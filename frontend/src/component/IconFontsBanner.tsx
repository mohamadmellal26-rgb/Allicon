import React from 'react';
import './IconFontsBanner.css';

export const IconFontsBanner: React.FC = () => {
  return (
    <section className="icon-fonts-banner-section">
      <div className="banner-container">
        
        {/* القسم الأيسر: النصوص والزر */}
        <div className="banner-text-content">
          <h2 className="banner-title">
            Icon Fonts for any project, big or small
          </h2>
          <p className="banner-description">
            +50,400 <strong>SVG</strong> and <strong>web font</strong>-optimal vector-based icons for web, iOS, and Android applications.
          </p>
          <a href="/icon-fonts" className="see-more-btn">
            See more
          </a>
        </div>

        {/* القسم الأيمن: المعاينة الرسومية (الكود وصورة العناصر) */}
        <div className="banner-graphics-content">
          {/* محاكي شاشة الكود الداكنة */}
          <div className="code-editor-window">
            <div className="window-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-snippet">
              <code>
                <span className="code-tag">&lt;head&gt;</span>{'\n'}
                {'  '}<span className="code-tag">&lt;link</span> <span className="code-attr">href</span>=<span className="code-string">"..."</span> <span className="code-attr">rel</span>=<span className="code-string">"stylesheet"</span><span className="code-tag">&gt;</span>{'\n'}
                <span className="code-tag">&lt;/head&gt;</span>{'\n'}
                <span className="code-tag">&lt;body&gt;</span>{'\n'}
                {'  '}<span className="code-tag">&lt;i</span> <span className="code-attr">class</span>=<span className="code-string">"fi fi-rr-star"</span><span className="code-tag">&gt;&lt;/i&gt;</span>
              </code>
            </pre>
          </div>

          {/* لوحة الأيقونات البيضاء المتداخلة مع الصورة الرسمية */}
          <div className="icons-preview-card">
            {/* بطاقة الأيقونة العائمة الممتازة (النجوم) */}
            <div className="featured-star-card">
              <svg className="star-icon" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* عرض الصورة الفعلية للشبكة والعناصر */}
            <div className="banner-elements-image-wrapper">
              <img 
                src="https://media.flaticon.com/dist/min/img/home/uicons/elements.png" 
                alt="UIcon Elements Preview" 
                className="banner-elements-img" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IconFontsBanner;