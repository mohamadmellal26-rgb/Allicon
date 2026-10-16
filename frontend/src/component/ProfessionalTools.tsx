import React, { useState } from 'react';
import './ProfessionalTools.css';

interface ToolItem {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageSrc: string; // صورة مخصصة لكل أداة
}

const toolsData: ToolItem[] = [
    {
    title: 'Google Workspace',
    description: 'Use the icons in Google Docs and Slides easily, quickly and free of charge.',
    linkText: 'See more',
    linkUrl: '/google-workspace',
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/slides-home/gsuite-slide.png'
  },
  {
    title: 'Collections',
    description: 'Create multiple collections...',
    linkText: 'See more',
    linkUrl: '/collections',
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/slides-home/collections-slide.png'
  },
  {
    title: 'Editor',
    description: 'Edit the color of your icons...',
    linkText: 'See more',
    linkUrl: '/editor',
    imageSrc: 'https://media.flaticon.com/dist/min/img/home/slides-home/editor-slide.png'
  },
];

export const ProfessionalTools: React.FC = () => {
  // حالة لتخزين مؤشر الأداة النشطة عند النقر
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="professional-tools-section">
      <div className="tools-container">
        
        {/* القسم الأيسر: العناوين، الوصف وقائمة الأدوات */}
        <div className="tools-content-left">
          <h2 className="tools-main-heading">
            Tools that help make your jobs more professional
          </h2>
          <p className="tools-sub-heading">
            Free accessories that allow you to organize, create and save time on your designs
          </p>

          <div className="tools-list">
            {toolsData.map((tool, index) => (
              <div 
                key={index} 
                className={`tool-row ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)} // تغيير الصورة عند النقر على العنصر
              >
                <h3 className="tool-item-title">{tool.title}</h3>
                <div className="tool-item-details">
                  <span className="tool-desc">{tool.description}</span>
                  <a href={tool.linkUrl} className="tool-see-more">
                    {tool.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* القسم الأيمن: عرض الصورة المتغيرة حسب الأداة النشطة */}
        <div className="tools-graphics-right">
          <div className="tools-mockup-window">
            <img 
              src={toolsData[activeIndex].imageSrc} 
              alt={toolsData[activeIndex].title} 
              className="tools-mockup-img" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalTools;