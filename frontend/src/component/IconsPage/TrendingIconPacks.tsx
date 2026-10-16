import React from 'react';
import './TrendingIconPacks.css';

interface IconPack {
  title: string;
  count: string;
  link: string;
  icons: string[];
}

const trendingPacksData: IconPack[] = [
  {
    title: 'Halloween',
    count: '20 Icons',
    link: '/pack/halloween',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/3209/3209990.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209923.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209961.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209904.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209977.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209941.png',
    ],
  },
  {
    title: 'Islam',
    count: '50 icons',
    link: '/pack/islam',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/2965/2965300.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965319.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965327.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965335.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965343.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965351.png',
    ],
  },
  {
    title: 'Nature',
    count: '35 icons',
    link: '/pack/nature',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/3105/3105807.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105822.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105830.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105842.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105850.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105861.png',
    ],
  },
  {
    title: 'Technology',
    count: '42 icons',
    link: '/pack/technology',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998611.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998622.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998634.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998648.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998661.png',
    ],
  },
  {
    title: 'Education',
    count: '28 icons',
    link: '/pack/education',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/744/744546.png',
      'https://cdn-icons-png.flaticon.com/512/744/744530.png',
      'https://cdn-icons-png.flaticon.com/512/744/744502.png',
      'https://cdn-icons-png.flaticon.com/512/744/744485.png',
      'https://cdn-icons-png.flaticon.com/512/744/744521.png',
      'https://cdn-icons-png.flaticon.com/512/744/744490.png',
    ],
  },
  {
    title: 'Medical',
    count: '60 icons',
    link: '/pack/medical',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/3820/3820188.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820194.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820201.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820209.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820215.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820223.png',
    ],
  },
  {
    title: 'Food',
    count: '45 icons',
    link: '/pack/food',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/616/616408.png',
      'https://cdn-icons-png.flaticon.com/512/616/616412.png',
      'https://cdn-icons-png.flaticon.com/512/616/616430.png',
      'https://cdn-icons-png.flaticon.com/512/616/616438.png',
      'https://cdn-icons-png.flaticon.com/512/616/616442.png',
      'https://cdn-icons-png.flaticon.com/512/616/616450.png',
    ],
  },
  {
    title: 'Travel',
    count: '30 icons',
    link: '/pack/travel',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/4151/4151759.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151768.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151775.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151782.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151791.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151800.png',
    ],
  },
];

export const TrendingIconPacks: React.FC = () => {
  return (
    <section className="trending-section">
      <div className="trending-container">
        
        {/* عنوان القسم */}
        <h2 className="trending-main-title">Trending Icon packs</h2>

        {/* شبكة البطاقات (4 أعمدة) */}
        <div className="trending-grid">
          {trendingPacksData.map((pack, index) => (
            <a key={index} href={pack.link} className="trending-card">
              
              {/* شبكة معاينة الـ 6 أيقونات */}
              <div className="trending-preview-grid">
                {pack.icons.map((imgUrl, iconIdx) => (
                  <div key={iconIdx} className="trending-icon-item">
                    <img src={imgUrl} alt="icon pack item" className="trending-icon-img" />
                  </div>
                ))}
              </div>

              {/* تذييل البطاقة (الاسم وعدد الأيقونات) */}
              <div className="trending-card-footer">
                <span className="trending-pack-title">{pack.title}</span>
                <span className="trending-pack-count">{pack.count}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingIconPacks;