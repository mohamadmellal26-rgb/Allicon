import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* الشريط العلوي للفوتر: الشعار والأزرار */}
        <div className="footer-top-bar">
          <div className="footer-logo">ALLicon</div>
          <div className="footer-top-actions">
            <a href="/contributor" className="contributor-btn">Contributor access</a>
            <a href="/discount" className="discount-btn">Get 10% Off Today!</a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* أعمدة الروابط والأقسام */}
        <div className="footer-columns-grid">
          
          {/* عمود Content */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONTENT</h4>
            <ul className="footer-links-list">
              <li><a href="/authors">Authors</a></li>
              <li><a href="/icons">Icons</a></li>
              <li><a href="/stickers">Stickers</a></li>
              <li><a href="/interface-icons">Interface icons</a></li>
              <li><a href="/animated-icons">Animated icons</a></li>
              <li><a href="/icon-tags">Icon tags</a></li>
              <li><a href="/stickers-tags">Stickers tags</a></li>
            </ul>
          </div>

          {/* عمود Tools */}
          <div className="footer-col">
            <h4 className="footer-col-title">TOOLS</h4>
            <ul className="footer-links-list">
              <li><a href="/api">API</a></li>
              <li><a href="/google-workspace">Google Workspace</a></li>
            </ul>
          </div>

          {/* عمود Help */}
          <div className="footer-col">
            <h4 className="footer-col-title">HELP</h4>
            <ul className="footer-links-list">
              <li><a href="/support">Support</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/icon-styles">Icon styles</a></li>
              <li><a href="/icons-editor">Icons editor</a></li>
              <li><a href="/collections">Flaticon Collections</a></li>
              <li><a href="/follow">Follow</a></li>
              <li><a href="/merchandising-license">Merchandising License</a></li>
            </ul>
          </div>

          {/* عمود Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links-list">
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li><a href="/license">Our license</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/pricing">Plans and Pricing</a></li>
              <li><a href="/whats-new">What's new</a></li>
            </ul>
          </div>

          {/* عمود Social Media */}
          <div className="footer-col">
            <h4 className="footer-col-title">SOCIAL MEDIA</h4>
            <ul className="footer-links-list">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">FB</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">X</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">IG</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-divider"></div>

        {/* الشريط السفلي: الشروط وقائمة اللغة */}
        <div className="footer-bottom-bar">
          <div className="footer-legal-links">
            <a href="/terms">Terms & conditions</a>
            <span>|</span>
            <a href="/privacy">Privacy policy</a>
            <span>|</span>
            <a href="/cookies">Cookies policy</a>
            <span>|</span>
            <a href="/copyrights">Copyrights Notification</a>
          </div>

          <div className="footer-lang-selector">
            <button className="lang-dropdown-btn">
              English ▾
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;