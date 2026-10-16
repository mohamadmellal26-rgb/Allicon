import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bell, Search, LayoutGrid, ExternalLink, LogIn, LogOut, User } from 'lucide-react';
import './header.css';

interface IconItem {
  ID: number;
  filename: string;
  file_path: string;
}

export const Header: React.FC = () => {
  const [searchCategory, setSearchCategory] = useState('Icons');
  const [searchQuery, setSearchQuery] = useState('');
  const [iconsData, setIconsData] = useState<IconItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchIcons();
    // التحقق من وجود التوكن في التخزين المحلي عند تحميل الهيدر
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const fetchIcons = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/icons', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from server');
      }

      const data: IconItem[] = await response.json();
      setIconsData(data);
    } catch (error) {
      console.error("Error connecting to Go backend:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
  };

  const filteredImages = searchQuery.trim() === '' ? [] : iconsData.filter(img => 
    img.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="allicon-header-wrapper">
        <div className="top-header">
          <div className="header-container header-top-flex">
            
            {/* القسم الأيسر: الشعار والقائمة */}
            <div className="header-left">
              <Link to="/" className="logo-link">
                <img 
                  src="https://allicon-24d40.web.app/assets/cropped_circle_image%20(2)-DQm8DeJ8.png" 
                  alt="Allicon Logo" 
                  className="logo-img"
                />
                <span className="logo-text">Allicon</span>
              </Link>

              <nav className="main-nav">
                <Link to="/authors" className="nav-item">Authors</Link>
                <Link to="/icons" className="nav-item">Icons</Link>
                <Link to="/stickers" className="nav-item">Stickers</Link>
                <Link to="/interface-icons" className="nav-item">Interface icons</Link>
                <Link to="/animated-icons" className="nav-item">Animated icons</Link>
              </nav>
            </div>

            {/* القسم الأيمن: التسعير، التنبيهات، وحالة المصادقة بناءً على التوكن */}
            <div className="header-right">
              <Link to="/pricing" className="pricing-link">Pricing</Link>
              
              <button className="icon-btn" aria-label="Notifications" type="button">
                <Bell size={20} strokeWidth={1.75} />
              </button>

              <div className="header-divider" />

              {/* التحقق من وجود التوكن لتغيير الزر */}
              <div className="auth-buttons-group">
                {token ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#fff', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={16} /> Account
                    </span>
                    <button 
                      onClick={handleLogout}
                      className="login-btn-white"
                      style={{ cursor: 'pointer', border: 'none' }}
                    >
                      <LogOut size={16} />
                      <span>Log out</span>
                    </button>
                  </div>
                ) : (
                  <Link to="/Auth" className="login-btn-white">
                    <LogIn size={16} />
                    <span>Log in</span>
                  </Link>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* شريط البحث */}
        <div className="search-bar-section">
          <div className="header-container search-container">
            <div className="search-box-wrapper">
              <div className="category-select-wrapper">
                <select 
                  value={searchCategory} 
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="category-select"
                >
                  <option value="Icons">Icons</option>
                  <option value="Stickers">Stickers</option>
                  <option value="UI Icons">UI Icons</option>
                </select>
                <span className="select-arrow-down">▼</span>
              </div>

              <input 
                type="text" 
                placeholder="Search icons..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />

              <button className="search-submit-btn" type="button" aria-label="Search">
                <Search size={18} strokeWidth={2} />
              </button>
            </div>

            <div className="collections-button">
              <LayoutGrid size={18} className="grid-icon" />
              <span className="collections-text">Collections</span>
              <span className="collections-badge">{filteredImages.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* قسم نتائج البحث */}
      {searchQuery.trim() !== '' && (
        <main className="search-results-main">
          <h2 className="results-title">
            Search Results for "{searchQuery}"
          </h2>
          
          {loading && <p className="loading-text">Loading icons...</p>}

          {!loading && filteredImages.length === 0 && (
            <p className="no-results-text">No icons found matching "{searchQuery}"</p>
          )}

          <div className="icons-grid-container">
            {filteredImages.map((img) => (
              <div 
                key={img.ID} 
                onClick={() => navigate(`/icons/${img.ID}`)}
                className="icon-card-item"
              >
                <div className="icon-preview-box">
                  <img 
                    src={img.file_path} 
                    alt="Icon" 
                    className="icon-img-thumb"
                  />
                </div>

                <a 
                  href={img.file_path} 
                  target="_blank" 
                  rel="noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className="icon-view-link"
                >
                  <span>View</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default Header;