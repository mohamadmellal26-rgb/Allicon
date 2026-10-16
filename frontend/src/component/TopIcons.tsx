import React from 'react';
import { ArrowRight } from 'lucide-react';
import './TopIcons.css';

interface IconPack {
  title: string;
  count: string;
  link: string;
  icons: string[]; // روابط الـ 6 أيقونات المعروضة داخل البطاقة
}

const topIconsPacks: IconPack[] = [
  {
    title: 'Halloween',
    count: '50 ICONS',
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
    title: 'Stationery And Office Icon Set',
    count: '50 ICONS',
    link: '/pack/stationery-office',
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
    title: 'Christmas',
    count: '50 ICONS',
    link: '/pack/christmas',
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
    title: 'Pool',
    count: '50 ICONS',
    link: '/pack/pool',
    icons: [
      'https://cdn-icons-png.flaticon.com/512/3105/3105807.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105822.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105830.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105842.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105850.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105861.png',
    ],
  },
];

export const TopIcons: React.FC = () => {
  return (
    <section className="top-icons-section">
      <div className="top-icons-container">
        
        {/* العلوية: العنوان ورابط View all */}
        <div className="top-icons-header">
          <h2 className="top-icons-title">Top icons</h2>
          <a href="/top-icons" className="view-all-link">
            <span>View all</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* شبكة البطاقات 4 في السطر */}
        <div className="top-icons-grid">
          {topIconsPacks.map((pack, index) => (
            <a key={index} href={pack.link} className="pack-card">
              {/* المعاينة: 6 أيقونات (سطران × 3 أعمدة) */}
              <div className="pack-preview-grid">
                {pack.icons.map((imgUrl, iconIdx) => (
                  <div key={iconIdx} className="pack-icon-item">
                    <img src={imgUrl} alt="icon" className="pack-icon-img" />
                  </div>
                ))}
              </div>

              {/* ذيل البطاقة: الاسم والعدد */}
              <div className="pack-card-footer">
                <span className="pack-title">{pack.title}</span>
                <span className="pack-count">{pack.count}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopIcons;