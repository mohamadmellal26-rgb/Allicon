import React, { useState } from 'react';
import './IconsPage.css';
import TrendingIconPacks from './TrendingIconPacks';
import PopularStyles from './PopularStyles';
import EmojisBanner from './EmojisBanner';
import BrandLogos from './BrandLogos';
import TopIconSearch from './TopIconSearch';

interface IconItem {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
}

const categoriesData = [
  'All',
  'Education',
  'Money',
  'User',
  'Computer',
  'Document',
  'Music',
  'Food',
];

const mockIcons: IconItem[] = [
  { id: 1, title: 'Student Graduation', category: 'Education', imgUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
  { id: 2, title: 'Book & Apple', category: 'Education', imgUrl: 'https://cdn-icons-png.flaticon.com/512/2997/2997295.png' },
  { id: 3, title: 'Dollar Wallet', category: 'Money', imgUrl: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png' },
  { id: 4, title: 'Credit Card', category: 'Money', imgUrl: 'https://cdn-icons-png.flaticon.com/512/633/633611.png' },
  { id: 5, title: 'User Avatar', category: 'User', imgUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' },
  { id: 6, title: 'Laptop Device', category: 'Computer', imgUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png' },
  { id: 7, title: 'Folder Document', category: 'Document', imgUrl: 'https://cdn-icons-png.flaticon.com/512/3767/3767084.png' },
  { id: 8, title: 'Music Note', category: 'Music', imgUrl: 'https://cdn-icons-png.flaticon.com/512/461/461238.png' },
  { id: 9, title: 'Burger Fast Food', category: 'Food', imgUrl: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' },
  { id: 10, title: 'Pizza Slice', category: 'Food', imgUrl: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png' },
  { id: 11, title: 'Headphones Audio', category: 'Music', imgUrl: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png' },
  { id: 12, title: 'File Text', category: 'Document', imgUrl: 'https://cdn-icons-png.flaticon.com/512/2991/2991108.png' },
];

export const IconsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // تصفية الأيقونات حسب الفئة والبحث
  const filteredIcons = mockIcons.filter((icon) => {
    const matchesCategory =
      selectedCategory === 'All' || icon.category === selectedCategory;
    const matchesSearch = icon.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="icons-page">
      <div className="icons-page-container">
        
        {/* قسم الهيرو الرئيسي */}
        <section className="icons-hero-section">
          <div className="icons-hero-left">
            <h1 className="icons-hero-title">
              Free access 18.0M+ <br /> icons in PNG
            </h1>
            <p className="icons-hero-subtitle">
              The largest database of vector icons available for download: SVG, EPS, PSD and BASE 64 formats.
            </p>
            <button className="popular-icons-btn">
              See popular icons
            </button>
          </div>

          <div className="icons-hero-right">
            <img 
              src="https://media.flaticon.com/dist/min/img/home/uicons/elements.png" 
              alt="Icons Banner Showcase" 
              className="hero-graphic-img" 
            />
          </div>
        </section>

        {/* حقل البحث والتصنيفات */}
        <section className="icons-search-section">
          <div className="search-bar-wrapper">
            <input 
              type="text" 
              placeholder="Search icons by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="icons-search-input"
            />
            <button className="icons-search-btn">
              Search
            </button>
          </div>

          {/* أزرار الفئات السريعة */}
          <div className="category-tags-list">
            {categoriesData.map((category) => (
              <button
                key={category}
                className={`category-tag-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* شبكة عرض الأيقونات */}
        <section className="icons-grid-section">
          <div className="icons-grid">
            {filteredIcons.map((icon) => (
              <div key={icon.id} className="icon-card">
                <div className="icon-img-box">
                  <img src={icon.imgUrl} alt={icon.title} className="icon-img" />
                </div>
                <span className="icon-title">{icon.title}</span>
              </div>
            ))}
          </div>

          {filteredIcons.length === 0 && (
            <div className="no-icons-found">
              <p>No icons found matching your search.</p>
            </div>
          )}
        </section>
        <TrendingIconPacks />
        <PopularStyles />
        <EmojisBanner />
        <BrandLogos />
        <TopIconSearch />
      </div>
    </div>
  );
};

export default IconsPage;