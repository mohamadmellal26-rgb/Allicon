import React from 'react';
import './TrendingIcons.css';

interface IconCardItem {
  id: number;
  name: string;
  imgUrl: string;
  linkUrl: string;
}

const trendingIconsData: IconCardItem[] = [
  { id: 1, name: 'Home', imgUrl: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', linkUrl: '/icon/home' },
  { id: 2, name: 'User', imgUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png', linkUrl: '/icon/user' },
  { id: 3, name: 'Mail', imgUrl: 'https://cdn-icons-png.flaticon.com/512/542/542689.png', linkUrl: '/icon/mail' },
  { id: 4, name: 'Phone', imgUrl: 'https://cdn-icons-png.flaticon.com/512/126/126509.png', linkUrl: '/icon/phone' },
  { id: 5, name: 'Search', imgUrl: 'https://cdn-icons-png.flaticon.com/512/622/622669.png', linkUrl: '/icon/search' },
  { id: 6, name: 'Location', imgUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', linkUrl: '/icon/location' },
  { id: 7, name: 'Gear', imgUrl: 'https://cdn-icons-png.flaticon.com/512/2040/2040504.png', linkUrl: '/icon/gear' },
  { id: 8, name: 'Globe', imgUrl: 'https://cdn-icons-png.flaticon.com/512/814/814587.png', linkUrl: '/icon/globe' },
  { id: 9, name: 'Cart', imgUrl: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png', linkUrl: '/icon/cart' },
  { id: 10, name: 'Check', imgUrl: 'https://cdn-icons-png.flaticon.com/512/4315/4315445.png', linkUrl: '/icon/check' },
  { id: 11, name: 'Heart', imgUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png', linkUrl: '/icon/heart' },
  { id: 12, name: 'Close', imgUrl: 'https://cdn-icons-png.flaticon.com/512/2997/2997911.png', linkUrl: '/icon/close' },
  { id: 13, name: 'Edit', imgUrl: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png', linkUrl: '/icon/edit' },
  { id: 14, name: 'Users', imgUrl: 'https://cdn-icons-png.flaticon.com/512/615/615075.png', linkUrl: '/icon/users' },
];

export const TrendingIcons: React.FC = () => {
  return (
    <section className="trending-icons-section">
      <div className="trending-icons-container">
        
        {/* عنوان القسم */}
        <h2 className="trending-icons-title">Trending icons</h2>

        {/* شبكة الأيقونات المربعة */}
        <div className="trending-icons-grid">
          {trendingIconsData.map((icon) => (
            <a key={icon.id} href={icon.linkUrl} className="trending-icon-card" title={icon.name}>
              <img src={icon.imgUrl} alt={icon.name} className="trending-icon-img" />
            </a>
          ))}
        </div>

        {/* زر العرض الكلي */}
        <div className="trending-icons-footer">
          <a href="/icons" className="see-all-trending-btn">
            See all icons
          </a>
        </div>

      </div>
    </section>
  );
};

export default TrendingIcons;