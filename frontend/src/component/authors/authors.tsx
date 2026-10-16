import React, { useState } from 'react';
import './authors.css';

interface AuthorCard {
  id: number;
  name: string;
  category: string;
  resourcesCount: string;
  avatarUrl: string;
  previewIcons: string[];
  isFollowing?: boolean;
}

const authorsData: AuthorCard[] = [
  {
    id: 1,
    name: 'Freepik',
    category: 'Vector icons',
    resourcesCount: '3,300,323 resources',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
    previewIcons: [
      'https://cdn-icons-png.flaticon.com/512/733/733547.png',
      'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
      'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
      'https://cdn-icons-png.flaticon.com/512/733/733558.png',
      'https://cdn-icons-png.flaticon.com/512/733/733585.png',
      'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    ],
  },
  {
    id: 2,
    name: 'Smashicons',
    category: 'Glyph icons',
    resourcesCount: '210,571 resources',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/2965/2965300.png',
    previewIcons: [
      'https://cdn-icons-png.flaticon.com/512/2965/2965319.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965327.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965335.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965343.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965351.png',
      'https://cdn-icons-png.flaticon.com/512/2965/2965360.png',
    ],
  },
  {
    id: 3,
    name: 'UIcons',
    category: 'Interface icons',
    resourcesCount: '50,400 resources',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    previewIcons: [
      'https://cdn-icons-png.flaticon.com/512/3209/3209990.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209923.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209961.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209904.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209977.png',
      'https://cdn-icons-png.flaticon.com/512/3209/3209941.png',
    ],
  },
  {
    id: 4,
    name: 'Pixel Perfect',
    category: 'Brand icons',
    resourcesCount: '72,699 resources',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
    previewIcons: [
      'https://cdn-icons-png.flaticon.com/512/733/733579.png',
      'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
      'https://cdn-icons-png.flaticon.com/512/733/733558.png',
      'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
      'https://cdn-icons-png.flaticon.com/512/2111/2111370.png',
      'https://cdn-icons-png.flaticon.com/512/2111/2111320.png',
    ],
  },
  {
    id: 5,
    name: 'Eucalyp',
    category: 'Linear icons',
    resourcesCount: '194,078 resources',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/3105/3105807.png',
    previewIcons: [
      'https://cdn-icons-png.flaticon.com/512/3105/3105822.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105830.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105842.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105850.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105861.png',
      'https://cdn-icons-png.flaticon.com/512/3105/3105870.png',
    ],
  },
  {
    id: 6,
    name: 'Good Ware',
    category: 'Product icons',
    resourcesCount: '139,162 resources',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/744/744546.png',
    previewIcons: [
      'https://cdn-icons-png.flaticon.com/512/744/744530.png',
      'https://cdn-icons-png.flaticon.com/512/744/744502.png',
      'https://cdn-icons-png.flaticon.com/512/744/744485.png',
      'https://cdn-icons-png.flaticon.com/512/744/744521.png',
      'https://cdn-icons-png.flaticon.com/512/744/744490.png',
      'https://cdn-icons-png.flaticon.com/512/744/744510.png',
    ],
  },
];

export const Authors: React.FC = () => {
  const [followingState, setFollowingState] = useState<{ [key: number]: boolean }>({});

  const toggleFollow = (id: number) => {
    setFollowingState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="authors-page-section">
      <div className="authors-container">
        
        {/* عنوان الصفحة */}
        <h1 className="authors-page-title">Authors</h1>

        {/* شبكة المؤلفين (3 أعمدة) */}
        <div className="authors-grid">
          {authorsData.map((author) => {
            const isFollowing = followingState[author.id];
            return (
              <div key={author.id} className="author-card">
                
                {/* الجزء العلوي: الصورة والمعلومات وزر المتابعة */}
                <div className="author-card-header">
                  <div className="author-info-group">
                    <img src={author.avatarUrl} alt={author.name} className="author-avatar" />
                    <div className="author-details">
                      <h3 className="author-name">{author.name}</h3>
                      <span className="author-category">{author.category}</span>
                      <span className="author-resources">{author.resourcesCount}</span>
                    </div>
                  </div>
                  <button 
                    className={`follow-btn ${isFollowing ? 'following' : ''}`}
                    onClick={() => toggleFollow(author.id)}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>

                {/* شبكة الأيقونات المصغرة للمؤلف مع تحريك تفاعلي */}
                <div className="author-preview-icons">
                  {author.previewIcons.map((iconUrl, idx) => (
                    <div key={idx} className="preview-icon-wrapper">
                      <img src={iconUrl} alt="preview icon" className="preview-icon-img" />
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* التنقل بين الصفحات Pagination */}
        <div className="authors-pagination">
          <button className="next-pages-btn">Next pages</button>
          <div className="pagination-controls">
            <span className="page-info">1 of 80</span>
            <button className="page-arrow-btn" aria-label="Previous Page">&lt;</button>
            <button className="page-arrow-btn" aria-label="Next Page">&gt;</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Authors;