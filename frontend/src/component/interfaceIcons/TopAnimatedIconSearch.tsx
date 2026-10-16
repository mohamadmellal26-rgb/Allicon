import React from 'react';
import './TopAnimatedIconSearch.css';

interface AnimatedSearchItem {
  name: string;
  linkUrl: string;
}

const animatedSearchData: AnimatedSearchItem[] = [
  { name: 'User', linkUrl: '/search/animated/user' },
  { name: 'Security', linkUrl: '/search/animated/security' },
  { name: 'Computer', linkUrl: '/search/animated/computer' },
  { name: 'Document', linkUrl: '/search/animated/document' },
  { name: 'Message', linkUrl: '/search/animated/message' },

  { name: 'People', linkUrl: '/search/animated/people' },
  { name: 'Man', linkUrl: '/search/animated/man' },
  { name: 'Love', linkUrl: '/search/animated/love' },
  { name: 'Calendar', linkUrl: '/search/animated/calendar' },
  { name: 'Box', linkUrl: '/search/animated/box' },

  { name: 'Education', linkUrl: '/search/education' },
  { name: 'Food', linkUrl: '/search/animated/food' },
  { name: 'Marketing', linkUrl: '/search/animated/marketing' },
  { name: 'Book', linkUrl: '/search/animated/book' },
  { name: 'House', linkUrl: '/search/animated/house' },

  { name: 'Electronics', linkUrl: '/search/animated/electronics' },
  { name: 'Money', linkUrl: '/search/animated/money' },
  { name: 'Heart', linkUrl: '/search/animated/heart' },
  { name: 'Social Media', linkUrl: '/search/animated/social-media' },
  { name: 'Gear', linkUrl: '/search/animated/gear' },
];

export const TopAnimatedIconSearch: React.FC = () => {
  return (
    <section className="top-animated-search-section">
      <div className="top-animated-search-container">
        
        {/* عنوان القسم */}
        <h2 className="top-animated-search-title">Top animated icon search</h2>

        {/* شبكة الكلمات البحثية (5 أعمدة) */}
        <div className="top-animated-search-grid">
          {animatedSearchData.map((item, index) => (
            <a key={index} href={item.linkUrl} className="top-animated-tag">
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopAnimatedIconSearch;