import React from 'react';
import './PopularStyles.css';

interface StyleItem {
  title: string;
  bgColor: string; // لون الخلفية المتدرجة للبطاقة
  linkUrl: string;
  icons: string[];
}

const popularStylesData: StyleItem[] = [
  {
    title: 'Black outline',
    bgColor: 'gradient-blue',
    linkUrl: '/style/black-outline',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/3209/3209990.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209923.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209961.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209904.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209977.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209941.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209930.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209950.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209985.png',
    ],
  },
  {
    title: 'Black filled',
    bgColor: 'gradient-orange',
    linkUrl: '/style/black-filled',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/2965/2965300.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965319.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965327.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965335.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965343.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965351.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965360.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965375.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965390.png',
    ],
  },
  {
    title: 'Black outline',
    bgColor: 'gradient-light-blue',
    linkUrl: '/style/outline-blue',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/3105/3105807.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105822.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105830.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105842.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105850.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105861.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105870.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105885.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105899.png',
    ],
  },
  {
    title: 'Black outline',
    bgColor: 'gradient-green',
    linkUrl: '/style/green-style',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/744/744546.png',
      'https://cdn-icons-png.flaticon.com/512/744/744530.png',
      'https://cdn-icons-png.flaticon.com/512/744/744502.png',
      'https://cdn-icons-png.flaticon.com/512/744/744485.png',
      'https://cdn-icons-png.flaticon.com/512/744/744521.png',
      'https://cdn-icons-png.flaticon.com/512/744/744490.png',
      'https://cdn-icons-png.flaticon.com/512/744/744510.png',
      'https://cdn-icons-png.flaticon.com/512/744/744535.png',
      'https://cdn-icons-png.flaticon.com/512/744/744555.png',
    ],
  },
  {
    title: 'Black outline',
    bgColor: 'gradient-red',
    linkUrl: '/style/red-style',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/3820/3820188.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820194.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820201.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820209.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820215.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820223.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820235.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820245.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820255.png',
    ],
  },
  {
    title: 'Black outline',
    bgColor: 'gradient-indigo',
    linkUrl: '/style/indigo-style',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/4151/4151759.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151768.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151775.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151782.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151791.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151800.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151810.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151820.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151830.png',
    ],
  },
];

export const PopularStyles: React.FC = () => {
  return (
    <section className="popular-styles-section">
      <div className="popular-styles-container">
        
        {/* عنوان القسم والوصف */}
        <div className="popular-styles-header">
          <h2 className="popular-styles-title">Popular styles</h2>
          <p className="popular-styles-subtitle">Choose the icon style that fits your project.</p>
        </div>

        {/* شبكة البطاقات (3 أعمدة) */}
        <div className="popular-styles-grid">
          {popularStylesData.map((item, index) => (
            <a key={index} href={item.linkUrl} className={`style-card ${item.bgColor}`}>
              
              {/* بطاقة المعاينة البيضاء المتداخلة */}
              <div className="style-inner-white-box">
                <span className="style-card-label">{item.title}</span>
                
                {/* شبكة الأيقونات الداخلية (3×3) */}
                <div className="style-icons-grid">
                  {item.icons.map((iconUrl, iconIdx) => (
                    <div key={iconIdx} className="style-icon-wrapper">
                      <img src={iconUrl} alt="style icon" className="style-icon-img" />
                    </div>
                  ))}
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularStyles;