import React from 'react';
import { ArrowRight } from 'lucide-react';
import './TopStickers.css';

interface StickerPack {
  title: string;
  count: string;
  link: string;
  stickers: string[]; // روابط الـ 6 ملصقات المعروضة داخل البطاقة
}

const topStickersPacks: StickerPack[] = [
  {
    title: 'Christmas Elements',
    count: '25 STICKERS',
    link: '/stickers/christmas-elements',
    stickers: [
      'https://cdn-icons-png.flaticon.com/512/4151/4151759.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151768.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151775.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151782.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151791.png',
      'https://cdn-icons-png.flaticon.com/512/4151/4151800.png',
    ],
  },
  {
    title: 'Birthday Black Cat',
    count: '20 STICKERS',
    link: '/stickers/birthday-black-cat',
    stickers: [
      'https://cdn-icons-png.flaticon.com/512/616/616408.png',
      'https://cdn-icons-png.flaticon.com/512/616/616412.png',
      'https://cdn-icons-png.flaticon.com/512/616/616430.png',
      'https://cdn-icons-png.flaticon.com/512/616/616438.png',
      'https://cdn-icons-png.flaticon.com/512/616/616442.png',
      'https://cdn-icons-png.flaticon.com/512/616/616450.png',
    ],
  },
  {
    title: 'Friendship Day',
    count: '20 STICKERS',
    link: '/stickers/friendship-day',
    stickers: [
      'https://cdn-icons-png.flaticon.com/512/3820/3820188.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820194.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820201.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820209.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820215.png',
      'https://cdn-icons-png.flaticon.com/512/3820/3820223.png',
    ],
  },
  {
    title: 'Business',
    count: '98 STICKERS',
    link: '/stickers/business',
    stickers: [
      'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998611.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998622.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998634.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998648.png',
      'https://cdn-icons-png.flaticon.com/512/1998/1998661.png',
    ],
  },
];

export const TopStickers: React.FC = () => {
  return (
    <section className="top-stickers-section">
      <div className="top-stickers-container">
        
        {/* العلوية: العنوان ورابط View all */}
        <div className="top-stickers-header">
          <h2 className="top-stickers-title">Top stickers</h2>
          <a href="/top-stickers" className="view-all-link">
            <span>View all</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* شبكة بطاقات الملصقات */}
        <div className="top-stickers-grid">
          {topStickersPacks.map((pack, index) => (
            <a key={index} href={pack.link} className="sticker-card">
              {/* شبكة معاينة 6 ملصقات (2 صفوف × 3 أعمدة) */}
              <div className="sticker-preview-grid">
                {pack.stickers.map((imgUrl, stickerIdx) => (
                  <div key={stickerIdx} className="sticker-item">
                    <img src={imgUrl} alt="sticker" className="sticker-img" />
                  </div>
                ))}
              </div>

              {/* أسباب البطاقة: العنوان وعدد الملصقات */}
              <div className="sticker-card-footer">
                <span className="sticker-title">{pack.title}</span>
                <span className="sticker-count">{pack.count}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopStickers;