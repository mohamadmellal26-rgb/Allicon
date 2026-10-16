import React from 'react';
import './FigmaPluginBanner.css';

export const FigmaPluginBanner: React.FC = () => {
  return (
    <section className="figma-banner-section">
      <div className="figma-banner-container">
        
        {/* القسم الأيسر: النصوص والزر */}
        <div className="figma-banner-left">
          <h2 className="figma-banner-title">
            Add icons to Figma faster
          </h2>
          <p className="figma-banner-desc">
            The new Figma plugin is here, bringing millions of vector icons right to your canvas
          </p>
          <a href="/figma-plugin" className="get-plugin-btn">
            Get the Plugin
          </a>
        </div>

        {/* القسم الأيمن: الرسم التوضيحي وتكامل الأيقونات */}
        <div className="figma-banner-right">
          <div className="figma-graphics-wrapper">
            {/* بطاقة الشعار الأول */}
            <div className="figma-card-item left-card">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" 
                alt="Figma Icon" 
                className="plugin-logo-img" 
              />
            </div>

            {/* خط التوصيل وشارة فك القفل */}
            <div className="connection-path-area">
              <div className="badge-unlock-svg">Unlock SVG</div>
            </div>

            {/* بطاقة الشعار الثاني */}
            <div className="figma-card-item right-card">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png" 
                alt="Workspace Icon" 
                className="plugin-logo-img" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FigmaPluginBanner;