import React from 'react';
import { 
  Film, 
  FileText, 
  Image as ImageIcon, 
  Box, 
  Cloud, 
  Play, 
  ArrowUpRight, 
  DollarSign, 
  Package, 
  ArrowRight 
} from 'lucide-react';
import './AnimatedIcons.css';

export const AnimatedIcons: React.FC = () => {
  return (
    <section className="animated-icons-section">
      <div className="animated-icons-container">
        
        {/* الجانب الأيسر: النصوص وكرت الميزات الأربعة */}
        <div className="animated-icons-left">
          <h2 className="animated-main-title">
            High-quality animated icons
          </h2>
          <p className="animated-main-desc">
            57,000+ Animated Icons for create the best design projects. Available in JSON for Lottie, GIF, SVG and After Effects format.
          </p>

          <div className="animated-features-grid">
            {/* الكرت 1 */}
            <div className="animated-feature-card">
              <div className="card-top-row">
                <div className="card-icon-box">
                  <Film size={20} />
                </div>
                <span className="format-title">GIF and MP4</span>
                <span className="badge-free">FREE</span>
              </div>
              <p className="card-desc">Ready-to-use format with no editing required.</p>
            </div>

            {/* الكرت 2 */}
            <div className="animated-feature-card">
              <div className="card-top-row">
                <div className="card-icon-box">
                  <FileText size={20} />
                </div>
                <span className="format-title">After Effects and JSON</span>
              </div>
              <p className="card-desc">Editable formats for Adobe After Effects or JSON with Lottie.</p>
            </div>

            {/* الكرت 3 */}
            <div className="animated-feature-card">
              <div className="card-top-row">
                <div className="card-icon-box">
                  <ImageIcon size={20} />
                </div>
                <span className="format-title">PNG</span>
                <span className="badge-free">FREE</span>
              </div>
              <p className="card-desc">The most common image format with transparencies.</p>
            </div>

            {/* الكرت 4 */}
            <div className="animated-feature-card">
              <div className="card-top-row">
                <div className="card-icon-box">
                  <Box size={20} />
                </div>
                <span className="format-title">SVG, EPS and PSD</span>
              </div>
              <p className="card-desc">Vector formats for you to edit them as you wish.</p>
            </div>
          </div>
        </div>

        {/* الجانب الأيمن: المعاينة الرسومية والنافذة العائمة */}
        <div className="animated-icons-right">
          <div className="animated-preview-wrapper">
            
            {/* اللوحة الرئيسية البيضاء */}
            <div className="preview-main-window">
              <div className="window-dots">
                <span className="w-dot"></span>
                <span className="w-dot"></span>
                <span className="w-dot"></span>
              </div>

              <div className="preview-subgrid">
                <div className="mini-icon-box"><Cloud size={22} className="sub-icon" /></div>
                <div className="mini-icon-box"><Play size={20} className="sub-icon" /></div>
                <div className="mini-icon-box"><ArrowUpRight size={22} className="sub-icon" /></div>
                <div className="mini-icon-box"><DollarSign size={22} className="sub-icon" /></div>
                <div className="mini-icon-box"><ImageIcon size={22} className="sub-icon" /></div>
                <div className="mini-icon-box"><Package size={22} className="sub-icon" /></div>
                <div className="mini-icon-box"><Film size={22} className="sub-icon" /></div>
                <div className="mini-icon-box"><ArrowRight size={22} className="sub-icon" /></div>
              </div>
            </div>

            {/* البطاقة العائمة العلوية (السحابة) */}
            <div className="floating-cloud-card">
              <div className="cloud-inner-icon">
                <Cloud size={40} color="#00ce7c" />
              </div>
            </div>

            {/* البطاقة الداكنة السفلية ($) */}
            <div className="floating-dark-card">
              <DollarSign size={42} color="#ffffff" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AnimatedIcons;