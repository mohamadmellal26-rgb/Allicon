import React from 'react';
import './TopInterfaceIconsSearch.css';

interface InterfaceSearchItem {
  name: string;
  linkUrl: string;
}

const interfaceSearchData: InterfaceSearchItem[] = [
  { name: 'Ui', linkUrl: '/search/ui' },
  { name: 'Communications', linkUrl: '/search/communications' },
  { name: 'Food And Restaurant', linkUrl: '/search/food-and-restaurant' },
  { name: 'Security', linkUrl: '/search/security' },
  { name: 'Money', linkUrl: '/search/money' },

  { name: 'Interface', linkUrl: '/search/interface' },
  { name: 'Arrows', linkUrl: '/search/arrows' },
  { name: 'People', linkUrl: '/search/people' },
  { name: 'Document', linkUrl: '/search/document' },
  { name: 'Emoji', linkUrl: '/search/emoji' },

  { name: 'Education', linkUrl: '/search/education' },
  { name: 'User', linkUrl: '/search/user' },
  { name: 'Direction', linkUrl: '/search/direction' },
  { name: 'Shapes And Symbols', linkUrl: '/search/shapes-and-symbols' },
  { name: 'Business', linkUrl: '/search/business' },

  { name: 'Electronics', linkUrl: '/search/electronics' },
  { name: 'Business And Finance', linkUrl: '/search/business-and-finance' },
  { name: 'Transportation', linkUrl: '/search/transportation' },
  { name: 'Technology', linkUrl: '/search/technology' },
  { name: 'Smileys', linkUrl: '/search/smileys' },
];

export const TopInterfaceIconsSearch: React.FC = () => {
  return (
    <section className="top-interface-search-section">
      <div className="top-interface-container">
        
        {/* عنوان القسم */}
        <h2 className="top-interface-title">Top Interface icons search</h2>

        {/* شبكة الكلمات البحثية (5 أعمدة) */}
        <div className="top-interface-grid">
          {interfaceSearchData.map((item, index) => (
            <a key={index} href={item.linkUrl} className="top-interface-tag">
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopInterfaceIconsSearch;