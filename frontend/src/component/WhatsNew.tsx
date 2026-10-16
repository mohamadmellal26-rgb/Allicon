import React from 'react';
import './WhatsNew.css';

interface UpdateCard {
  title: string;
  imageSrc: string;
  linkUrl: string;
}

const updatesData: UpdateCard[] = [
  {
    title: 'New Figma plugin with SVG format is here',
    imageSrc: 'https://media.flaticon.com/dist/min/img/whats-new/figma-plugin-v2.png',
    linkUrl: '/updates/figma-plugin'
  },
  {
    title: 'Simplify your UI experience',
    imageSrc: 'https://media.flaticon.com/dist/min/img/whats-new/filters-redesign.png',
    linkUrl: '/updates/simplify-ui'
  },
  {
    title: 'Sort by style and find matching icons fast',
    imageSrc: 'https://media.flaticon.com/dist/min/img/whats-new/smart-match.png',
    linkUrl: '/updates/sort-by-style'
  },
];

export const WhatsNew: React.FC = () => {
  return (
    <section className="whats-new-section">
      <div className="whats-new-container">
        
        {/* القسم الأيسر: العنوان والوصف وزر العرض */}
        <div className="whats-new-left">
          <h2 className="whats-new-main-title">What's New in Flaticon</h2>
          <p className="whats-new-desc">
            See the latest website updates, new features, and tools.
          </p>
          <a href="/whats-new" className="view-everything-btn">
            View everything
          </a>
        </div>

        {/* القسم الأيمن: شبكة بطاقات التحديثات */}
        <div className="whats-new-right-grid">
          {updatesData.map((item, index) => (
            <a key={index} href={item.linkUrl} className="update-card">
              <div className="update-img-wrapper">
                <img src={item.imageSrc} alt={item.title} className="update-img" />
              </div>
              <h3 className="update-card-title">{item.title}</h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatsNew;