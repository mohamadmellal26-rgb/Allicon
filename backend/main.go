package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Global DB Instance
var DB *gorm.DB

// Model (جدول الأيقونات)
type Icon struct {
	gorm.Model
	Filename string `json:"filename" binding:"required"`
	FilePath string `json:"file_path" binding:"required"`
}

// Model (جدول المستخدمين لتسجيل الدخول وإنشاء الحساب)
type User struct {
	gorm.Model
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"unique;not null" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

// Database Connection & Migration
func initDB() {
	dsn := "host=localhost user=postgres password=secret dbname=mydb port=5432 sslmode=disable TimeZone=Africa/Algiers"
	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// إنشاء الجداول تلقائياً (Icons & Users)
	DB.AutoMigrate(&Icon{}, &User{})
}

// Keyword Filter for Image/Icon Names (فلتر أسماء الأيقونات)
func isAllowedFilename(filename string) bool {
	forbiddenWords := []string{"badword", "porn", "violence", "hack", "malware", "knife", "blood"}
	
	lowerName := strings.ToLower(filename)
	for _, word := range forbiddenWords {
		if strings.Contains(lowerName, word) {
			return false
		}
	}
	return true
}

func main() {
	// 1. الاتصال بقاعدة البيانات
	initDB()

	// 2. إنشاء سيرفر Gin
	r := gin.Default()

	// تفعيل الـ CORS للسماح لجميع الأصول بالاتصال من واجهة الرأكت
	r.Use(cors.Default())

	// 3. المسارات الخاصة بالمصادقة (Auth Endpoints)

	// POST: إنشاء حساب جديد (Register)
	r.POST("/register", func(c *gin.Context) {
		var input User
		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// التحقق مما إذا كان البريد الإلكتروني مسجلاً مسبقاً
		var existingUser User
		if err := DB.Where("email = ?", input.Email).First(&existingUser).Error; err == nil {
			c.JSON(http.StatusConflict, gin.H{"error": "Email already registered"})
			return
		}

		// تشفير كلمة المرور قبل حفظها في قاعدة البيانات
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
			return
		}
		input.Password = string(hashedPassword)

		// حفظ المستخدم الجديد
		if err := DB.Create(&input).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
			return
		}

		c.JSON(http.StatusCreated, gin.H{
			"message": "User registered successfully!",
			"email":   input.Email,
		})
	})

	// POST: تسجيل الدخول (Login)
	r.POST("/login", func(c *gin.Context) {
		var input struct {
			Email    string `json:"email" binding:"required,email"`
			Password string `json:"password" binding:"required"`
		}

		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		var user User
		// البحث عن المستخدم بواسطة البريد الإلكتروني
		if err := DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
			return
		}

		// مقارنة كلمة المرور المدخلة مع كلمة المرور المشفرة
		err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password))
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
			return
		}

		// نجاح تسجيل الدخول (يمكنك لاحقاً توليد JWT Token هنا إذا أردت)
		c.JSON(http.StatusOK, gin.H{
			"message": "Login successful!",
			"token":   "mock-jwt-token-xyz", // استبدلها بتوكن حقيقي عند الحاجة
			"user": gin.H{
				"name":  user.Name,
				"email": user.Email,
			},
		})
	})

	// 4. مسارات الأيقونات (Icon Endpoints)

	// GET: استرجاع جميع الأيقونات المخزنة في الداتا مباشرة
	r.GET("/icons", func(c *gin.Context) {
		var icons []Icon
		if err := DB.Find(&icons).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, icons)
	})

	// POST: إضافة أيقونة جديدة مباشرة مع تطبيق فلتر الكلمات على اسمها
	r.POST("/icons", func(c *gin.Context) {
		var input Icon
		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// فحص اسم الأيقونة عبر الفلتر قبل الحفظ
		if !isAllowedFilename(input.Filename) {
			c.JSON(http.StatusForbidden, gin.H{
				"error": "Icon name '" + input.Filename + "' contains forbidden keywords!",
			})
			return
		}

		// حفظ الأيقونة مباشرة في قاعدة البيانات
		if err := DB.Create(&input).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save icon"})
			return
		}

		c.JSON(http.StatusCreated, gin.H{
			"message": "Icon saved successfully in database!",
			"data":    input,
		})
	})

	// 5. تشغيل السيرفر على Port 8080
	r.Run(":8080")
}