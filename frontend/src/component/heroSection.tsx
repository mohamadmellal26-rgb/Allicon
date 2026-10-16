import React from 'react';
import { ArrowRight } from 'lucide-react';
import './heroSection.css';

interface CategoryCard {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const categories: CategoryCard[] = [
  {
    title: 'Icons',
    description: 'The largest database of free icons for any project.',
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/cards-products-section/circles/icons.png',
    link: '/icons'
  },
  {
    title: 'Interface Icons',
    description: 'Icons specially designed for your interfaces.',
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/cards-products-section/circles/interface.png',
    link: '/interface-icons'
  },
  {
    title: 'Animated Icons',
    description: 'Motion icons for creating stunning projects.',
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/cards-products-section/circles/animated.png',
    link: '/animated-icons'
  },
  {
    title: 'Stickers',
    description: 'Stickers for websites, apps or any place you need.',
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/cards-products-section/circles/stickers.png',
    link: '/stickers'
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* شبكة البطاقات الأربع */}
        <div className="hero-cards-grid">
          {categories.map((cat, index) => (
            <a href={cat.link} key={index} className="hero-card">
              <div className="card-image-wrapper">
                <div className="card-image-circle">
                  <img src={cat.imageSrc} alt={cat.title} className="card-img" />
                </div>
              </div>
              <h3 className="card-title">{cat.title}</h3>
              <p className="card-description">{cat.description}</p>
            </a>
          ))}
        </div>

        {/* قسم العنوان السفلي المتناسق أفقياً */}
        <div className="hero-bottom-header">
          <div className="hero-bottom-left">
            <div className="uicons-inline-title">
              <span className="bracket">&lt;</span>UICONS<span className="bracket">&gt;</span>
            </div>
            <h1 className="hero-inline-main-title">The most wanted free SVG user interface icons</h1>
          </div>

          <a href="/all-icons" className="all-icons-link">
            <span>All free SVG icons</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <p className="hero-sub-description">
          50,400+ free, UI icons in 9 different styles. All fully editable and customizable for you to make them truly yours
        </p>

      </div>
    </section>
  );
};

export default HeroSection;