import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, User, ArrowLeft } from 'lucide-react';
import './auth.css';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // true لتسجيل الدخول، false لإنشاء حساب
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // تحديد مسار الـ API بناءً على الحالة الحالية
    const endpoint = isLogin ? 'http://localhost:8080/login' : 'http://localhost:8080/register';
    const payload = isLogin ? { email, password } : { name, email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || (isLogin ? 'Invalid email or password' : 'Registration failed'));
      }

      const data = await response.json();
      
      // حفظ التوكن في التخزين المحلي إذا وجد
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      
      // التوجيه إلى الصفحة الرئيسية بعد النجاح
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        
        {/* زر العودة للصفحة الرئيسية */}
        <Link to="/" className="auth-back-link">
          <ArrowLeft size={16} />
          <span>Back to Allicon</span>
        </Link>

        <div className="auth-header">
          <img 
            src="https://allicon-24d40.web.app/assets/cropped_circle_image%20(2)-DQm8DeJ8.png" 
            alt="Allicon Logo" 
            className="auth-logo"
          />
          <h2>{isLogin ? 'Welcome back' : 'Create an account'}</h2>
          <p>{isLogin ? 'Sign in to your Allicon account to continue' : 'Sign up to get started with Allicon'}</p>
        </div>

        {error && <div className="auth-error-box">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {/* حقل الاسم يظهر فقط عند إنشاء حساب جديد */}
          {!isLogin && (
            <div className="auth-input-group">
              <label>Full Name</label>
              <div className="input-field-wrapper">
                <User size={18} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="auth-input-group">
            <label>Email Address</label>
            <div className="input-field-wrapper">
              <Mail size={18} className="input-icon" />
              <input 
                type="email" 
                placeholder="name@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <div className="input-field-wrapper">
              <Lock size={18} className="input-icon" />
              <input 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading 
              ? (isLogin ? 'Signing in...' : 'Creating account...') 
              : (isLogin ? 'Sign in' : 'Sign up')}
          </button>
        </form>

        {/* زر التبديل بين تسجيل الدخول وإنشاء الحساب */}
        <div className="auth-footer">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span 
                onClick={() => { setIsLogin(false); setError(''); }} 
                style={{ cursor: 'pointer', fontWeight: '600', color: '#0b1326', textDecoration: 'underline' }}
              >
                Sign up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span 
                onClick={() => { setIsLogin(true); setError(''); }} 
                style={{ cursor: 'pointer', fontWeight: '600', color: '#0b1326', textDecoration: 'underline' }}
              >
                Sign in
              </span>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Auth;