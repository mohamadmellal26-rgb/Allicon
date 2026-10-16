import React from 'react';
import './AnimatedIconsInAction.css';

interface ActionCardItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

const actionCardsData: ActionCardItem[] = [
  {
    id: 1,
    title: 'Mobile Apps',
    description: 'Funny animated icons ready to use in mobile apps or tablets',
    videoUrl: 'https://media.flaticon.com/dist/min/img/home-animated-icons/icons-in-action/mobile.mp4',
  },
  {
    id: 2,
    title: 'Wearable Devices',
    description: 'Dynamic icons that set your pace on all your favourite wearables',
    videoUrl: 'https://media.flaticon.com/dist/min/img/home-animated-icons/icons-in-action/whereable.mp4',
  },
  {
    id: 3,
    title: 'Websites',
    description: 'Liven up the look & feel of your website projects with the best animated icons',
    videoUrl: 'https://media.flaticon.com/dist/min/img/home-animated-icons/icons-in-action/web.mp4',
  },
];

export const AnimatedIconsInAction: React.FC = () => {
  return (
    <section className="action-icons-section">
      <div className="action-icons-container">
        
        {/* الترويسة والعنوان */}
        <div className="action-icons-header">
          <h2 className="action-icons-title">Animated icons in action</h2>
          <p className="action-icons-subtitle">
            Check out how our animated icons can help you improve your mobile apps, websites, or any interface that you need.
          </p>
        </div>

        {/* شبكة البطاقات الثلاث مع فيديوهات المعاينة */}
        <div className="action-cards-grid">
          {actionCardsData.map((card) => (
            <div key={card.id} className="action-card">
              <div className="card-info">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>
              </div>

              <div className="video-media-wrapper">
                <video
                  src={card.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="action-media-video"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AnimatedIconsInAction;