import React from 'react';
import './IconStyles.css';

interface StyleCard {
  title: string;
  count: string;
  bgColor: string;
  imageSrc: string; // صورة واحدة تحتوي الشبكة بالكامل
}

const stylesData: StyleCard[] = [
  {
    title: 'Brands',
    count: '200 icons',
    bgColor: '#c4b5fd', // بنفسجي
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/free-svg-banner/brands.png',
  },
  {
    title: 'Bold',
    count: '10,000 icons',
    bgColor: '#93c5fd', // أزرق سماوي
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/free-svg-banner/bold.png',
  },
  {
    title: 'Regular',
    count: '13,000 icons',
    bgColor: '#fed7aa', // برتقالي
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/free-svg-banner/regular.png',
  },
  {
    title: 'Solid',
    count: '13,000 icons',
    bgColor: '#fca5a5', // وردي / أحمر
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/free-svg-banner/solid.png',
  },
  {
    title: 'Thin',
    count: '13,000 icons',
    bgColor: '#a7f3d0', // أخضر نعناعي
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/free-svg-banner/thin.png',
  },
];

export const IconStyles: React.FC = () => {
  return (
    <section className="styles-section">
      <div className="styles-container">
        <div className="styles-grid">
          {stylesData.map((item, index) => (
            <div key={index} className="style-card">
              <div 
                className="style-card-preview" 
                style={{ backgroundColor: item.bgColor }}
              >
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className="preview-single-image" 
                />
              </div>
              <h3 className="style-title">{item.title}</h3>
              <span className="style-count">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconStyles;