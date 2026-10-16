import React from 'react';
import './EmojisBanner.css';

export const EmojisBanner: React.FC = () => {
  return (
    <section className="emojis-banner-section">
      <div className="emojis-banner-container">
        
        {/* القسم الأيسر: العنوان، الوصف والزر */}
        <div className="emojis-banner-left">
          <h2 className="emojis-banner-title">
            Thousands of emojis <br />
            in every style you <br />
            need
          </h2>
          <p className="emojis-banner-desc">
            Add emotion to your texts by using emojis, emoticons, and smiley faces. Thousands of emojis in every style you need
          </p>
          <a href="/emojis" className="emojis-see-more-btn">
            See more
          </a>
        </div>

        {/* القسم الأيمن: المعاينة الجرافيكية المائلة للإيموجي */}
        <div className="emojis-banner-right">
          <img 
            src="https://media.flaticon.com/dist/min/img/home/uicons/elements.png" 
            alt="Thousands of emojis preview" 
            className="emojis-graphic-img" 
          />
        </div>

      </div>
    </section>
  );
};

export default EmojisBanner;