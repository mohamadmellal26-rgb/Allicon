import React from 'react';
import './TopIconSearch.css';

interface SearchTagItem {
  name: string;
  linkUrl: string;
}

const topSearchItems: SearchTagItem[] = [
  { name: 'Education', linkUrl: '/search/education' },
  { name: 'Money', linkUrl: '/search/money' },
  { name: 'Building', linkUrl: '/search/building' },
  { name: 'House', linkUrl: '/search/house' },
  { name: 'Cloud', linkUrl: '/search/cloud' },

  { name: 'User', linkUrl: '/search/user' },
  { name: 'Computer', linkUrl: '/search/computer' },
  { name: 'Arrow', linkUrl: '/search/arrow' },
  { name: 'Music', linkUrl: '/search/music' },
  { name: 'Book', linkUrl: '/search/book' },

  { name: 'Business', linkUrl: '/search/business' },
  { name: 'Avatar', linkUrl: '/search/avatar' },
  { name: 'Time', linkUrl: '/search/time' },
  { name: 'Data', linkUrl: '/search/data' },
  { name: 'Search', linkUrl: '/search/search' },

  { name: 'Food', linkUrl: '/search/food' },
  { name: 'Document', linkUrl: '/search/document' },
  { name: 'Calendar', linkUrl: '/search/calendar' },
  { name: 'Chat', linkUrl: '/search/chat' },
  { name: 'Mail', linkUrl: '/search/mail' },

  { name: 'People', linkUrl: '/search/people' },
  { name: 'Heart', linkUrl: '/search/heart' },
  { name: 'Hand', linkUrl: '/search/hand' },
  { name: 'Location', linkUrl: '/search/location' },
  { name: 'Clock', linkUrl: '/search/clock' },

  { name: 'Security', linkUrl: '/search/security' },
  { name: 'Message', linkUrl: '/search/message' },
  { name: 'Home', linkUrl: '/search/home' },
  { name: 'Gear', linkUrl: '/search/gear' },
  { name: 'Date', linkUrl: '/search/date' },
];

export const TopIconSearch: React.FC = () => {
  return (
    <section className="top-search-section">
      <div className="top-search-container">
        
        {/* عنوان القسم */}
        <h2 className="top-search-title">Top icon search</h2>

        {/* شبكة الكلمات البحثية (5 أعمدة) */}
        <div className="top-search-grid">
          {topSearchItems.map((item, index) => (
            <a key={index} href={item.linkUrl} className="top-search-tag">
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopIconSearch;