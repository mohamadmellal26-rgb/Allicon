import React from 'react';
import './interfaceIcons.css';
import TrendingIcons from './TrendingIcons';
import IconFontsFeatures from './IconFontsFeatures';
import TopInterfaceIconsSearch from './TopInterfaceIconsSearch';
import AnimatedIcons from './AnimatedIcons';
import TrendingAnimatedIcons from './TrendingAnimatedIcons';
import AnimatedIconsInAction from './AnimatedIconsInAction';
import TopAnimatedIconSearch from './TopAnimatedIconSearch';

export const InterfaceIcons: React.FC = () => {
  return (
    <section className="interface-icons-section">
      <div className="interface-icons-container">
        
        {/* القسم الأيسر: الشعار والنصوص والأزرار */}
        <div className="interface-content-left">
          <div className="uicons-brand-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">uicons</span>
            <span className="logo-bracket">&gt;</span>
          </div>

          <h3 className="interface-subtitle">
            Icon Fonts for any project, big or small
          </h3>

          <p className="interface-description">
            Over 50,000+ SVG and web font-optimal vector-based icons available for web, iOS, and Android applications
          </p>

          <div className="interface-actions-group">
            <a href="/icons" className="see-all-icons-btn">
              See all icons
            </a>
            <a href="https://figma.com" target="_blank" rel="noreferrer" className="open-figma-btn">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" 
                alt="Figma Logo" 
                className="figma-btn-icon" 
              />
              <span>Open in Figma</span>
            </a>
          </div>
        </div>

        {/* القسم الأيمن: معاينة محرر الكود وشبكة الأيقونات */}
        <div className="interface-preview-right">
          <div className="preview-composite-box">
            
            {/* نافذة محرر الكود الخلفية */}
            <div className="code-editor-window">
              <div className="editor-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre className="code-snippet">
                <code>
                  <span className="code-tag">&lt;head&gt;</span>{'\n'}
                  {'  '}<span className="code-tag">&lt;link</span> <span className="code-attr">rel</span>=<span className="code-str">"stylesheet"</span> <span className="code-tag">&gt;</span>{'\n'}
                  <span className="code-tag">&lt;/head&gt;</span>{'\n'}
                  <span className="code-tag">&lt;body&gt;</span>{'\n'}
                  {'  '}<span className="code-tag">&lt;i</span> <span className="code-attr">class</span>=<span className="code-str">"fi fi-rr-star"</span><span className="code-tag">&gt;&lt;/i&gt;</span>
                </code>
              </pre>
            </div>

            {/* لوحة الأيقونات البيضاء الأمامية */}
            <div className="icons-floating-panel">
              
              {/* بطاقة النجمة المكبرة العائمة */}
              <div className="featured-star-card">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" 
                  alt="Featured Star" 
                  className="star-icon" 
                />
              </div>

              {/* شبكة الأيقونات المصغرة */}
              <div className="preview-icons-grid">
                <img src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828819.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/126/126477.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/2989/2989835.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/2089/2089704.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/2089/2089713.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/833/833300.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/2089/2089720.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991108.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/744/744546.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="icon" />
              </div>

            </div>

          </div>
        </div>

      </div>
      <TrendingIcons />
      <IconFontsFeatures />
      <TopInterfaceIconsSearch />
      <AnimatedIcons />
      <TrendingAnimatedIcons />
      <AnimatedIconsInAction />
      <TopAnimatedIconSearch />
    </section>
  );
};

export default InterfaceIcons;