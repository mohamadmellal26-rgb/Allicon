import React, { useState } from 'react';
import {
  Lightbulb, Calendar, Laptop, Files, Monitor, Share2, Video, Airplay, PhoneCall,
  UserCheck, Coffee, Armchair, Trophy, ShoppingCart, Tag, Banknote, Edit3, Tv,
  Presentation, Flame, Rocket, PiggyBank, Headphones, CloudDownload, Lock, Network, PhoneIncoming, Globe
} from 'lucide-react';
import './TrendingAnimatedIcons.css';

interface AnimatedIconItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const animatedIconsData: AnimatedIconItem[] = [
  { id: 1, name: 'Idea', icon: <Lightbulb size={28} /> },
  { id: 2, name: 'Calendar', icon: <Calendar size={28} /> },
  { id: 3, name: 'Laptop', icon: <Laptop size={28} /> },
  { id: 4, name: 'Files', icon: <Files size={28} /> },
  { id: 5, name: 'Monitor', icon: <Monitor size={28} /> },
  { id: 6, name: 'Share', icon: <Share2 size={28} /> },
  { id: 7, name: 'Video', icon: <Video size={28} /> },
  { id: 8, name: 'Airplay', icon: <Airplay size={28} /> },
  { id: 9, name: 'Phone', icon: <PhoneCall size={28} /> },

  { id: 10, name: 'User Check', icon: <UserCheck size={28} /> },
  { id: 11, name: 'Coffee', icon: <Coffee size={28} /> },
  { id: 12, name: 'Chair', icon: <Armchair size={28} /> },
  { id: 13, name: 'Trophy', icon: <Trophy size={28} /> },
  { id: 14, name: 'Cart', icon: <ShoppingCart size={28} /> },
  { id: 15, name: 'Tag', icon: <Tag size={28} /> },
  { id: 16, name: 'Money', icon: <Banknote size={28} /> },
  { id: 17, name: 'Note', icon: <Edit3 size={28} /> },
  { id: 18, name: 'TV', icon: <Tv size={28} /> },

  { id: 19, name: 'Presentation', icon: <Presentation size={28} /> },
  { id: 20, name: 'Water Cooler', icon: <Flame size={28} /> },
  { id: 21, name: 'Rocket', icon: <Rocket size={28} /> },
  { id: 22, name: 'Savings', icon: <PiggyBank size={28} /> },
  { id: 23, name: 'Support', icon: <Headphones size={28} /> },
  { id: 24, name: 'Cloud Download', icon: <CloudDownload size={28} /> },
  { id: 25, name: 'Safe', icon: <Lock size={28} /> },
  { id: 26, name: 'Network', icon: <Network size={28} /> },
  { id: 27, name: 'Call Incoming', icon: <PhoneIncoming size={28} /> },
  { id: 28, name: 'Global', icon: <Globe size={28} /> },
];

export const TrendingAnimatedIcons: React.FC = () => {
  // تحديد الأيقونة رقم 5 (Monitor) افتراضياً لتطابق الصورة
  const [activeId, setActiveId] = useState<number | null>(5);

  return (
    <section className="trending-animated-section">
      <div className="trending-animated-container">
        
        {/* الجزء العلوي: العنوان والوصف والزر الأيمن */}
        <div className="trending-animated-header">
          <div className="header-text-group">
            <h2 className="trending-animated-title">Trending animated icons</h2>
            <p className="trending-animated-subtitle">
              Browse the latest animated icon styles used by top designers.
            </p>
          </div>
          <a href="/animated-icons" className="btn-view-all-top">
            View all animated icons &rarr;
          </a>
        </div>

        {/* شبكة الأيقونات */}
        <div className="animated-icons-grid">
          {animatedIconsData.map((item) => (
            <div
              key={item.id}
              className={`animated-icon-cell ${activeId === item.id ? 'active-card' : ''}`}
              onMouseEnter={() => setActiveId(item.id)}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* الزر السفلي */}
        <div className="trending-animated-footer">
          <a href="/animated-icons" className="btn-view-all-bottom">
            View all animated icons &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default TrendingAnimatedIcons;