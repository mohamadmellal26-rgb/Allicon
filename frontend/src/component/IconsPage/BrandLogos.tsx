import React from 'react';
import './BrandLogos.css';

interface BrandItem {
  id: number;
  name: string;
  logoUrl: string;
  linkUrl: string;
}

const brandsData: BrandItem[] = [
  {
    id: 1,
    name: 'Google',
    logoUrl: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
    linkUrl: '/brand/google',
  },
  {
    id: 2,
    name: 'Twitter',
    logoUrl: 'https://cdn-icons-png.flaticon.com/512/3256/3256013.png', // رابط مباشر وشغال لشعار Twitter / X
    linkUrl: '/brand/twitter',
  },
  {
    id: 3,
    name: 'YouTube',
    logoUrl: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
    linkUrl: '/brand/youtube',
  },
  {
    id: 4,
    name: 'Linkedin',
    logoUrl: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    linkUrl: '/brand/linkedin',
  },
  {
    id: 5,
    name: 'WhatsApp',
    logoUrl: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
    linkUrl: '/brand/whatsapp',
  },
  {
    id: 6,
    name: 'Facebook',
    logoUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
    linkUrl: '/brand/facebook',
  },
];

export const BrandLogos: React.FC = () => {
  return (
    <section className="brand-logos-section">
      <div className="brand-logos-container">
        
        {/* العناوين والوصف */}
        <div className="brand-logos-header">
          <h2 className="brand-logos-title">InnerCardWrapper</h2>
          <p className="brand-logos-subtitle">
            Add to your projects the logos of all the brands you need, available in hundreds of different styles
          </p>
        </div>

        {/* شبكة بطاقات الشعارات */}
        <div className="brand-logos-grid">
          {brandsData.map((brand) => (
            <a key={brand.id} href={brand.linkUrl} className="brand-card">
              <div className="brand-logo-box">
                <img src={brand.logoUrl} alt={brand.name} className="brand-logo-img" />
              </div>
              <span className="brand-name">{brand.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandLogos;