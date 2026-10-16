import React from 'react';
import { Gauge, Edit3, Maximize2 } from 'lucide-react';
import './IconFontsFeatures.css';

export const IconFontsFeatures: React.FC = () => {
  return (
    <section className="icon-fonts-section">
      <div className="icon-fonts-container">
        
        {/* الجانب الأيسر: العناوين والميزات */}
        <div className="icon-fonts-left">
          <span className="icon-fonts-tag">ICON FONTS</span>
          <h2 className="icon-fonts-title">
            High performance, easy to edit, fully responsive icon fonts
          </h2>

          <div className="features-list">
            {/* الميزة 1 */}
            <div className="feature-item">
              <div className="feature-icon-box">
                <Gauge className="feature-icon" size={22} />
              </div>
              <div className="feature-content">
                <h4 className="feature-name">High performance</h4>
                <p className="feature-desc">
                  Performance-oriented: only one HTTP request is required since it is a single font.
                </p>
              </div>
            </div>

            {/* الميزة 2 */}
            <div className="feature-item">
              <div className="feature-icon-box">
                <Edit3 className="feature-icon" size={22} />
              </div>
              <div className="feature-content">
                <h4 className="feature-name">Easy to edit</h4>
                <p className="feature-desc">
                  Full CSS styling capability; make any change without an additional tool.
                </p>
              </div>
            </div>

            {/* الميزة 3 */}
            <div className="feature-item">
              <div className="feature-icon-box">
                <Maximize2 className="feature-icon" size={22} />
              </div>
              <div className="feature-content">
                <h4 className="feature-name">Responsive</h4>
                <p className="feature-desc">
                  They will look great on all platforms, wherever you need to use them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* الجانب الأيمن: البطاقات الجرافيكية ومحرر الكود */}
        <div className="icon-fonts-right">
          <div className="visual-composite-container">
            
            {/* بطاقة Dashboard العلوية */}
            <div className="dashboard-card">
              <div className="stats-row">
                <div className="stat-box green">
                  <span className="stat-value">13k</span>
                  <span className="stat-label">Visitors</span>
                </div>
                <div className="stat-box blue">
                  <span className="stat-value">820</span>
                  <span className="stat-label">Orders</span>
                </div>
                <div className="stat-box purple">
                  <span className="stat-value">120</span>
                  <span className="stat-label">Messages</span>
                </div>
              </div>

              <div className="dashboard-header-row">
                <span className="dashboard-title">Dashboard</span>
                <div className="home-icon-circle">
                  <span className="home-dot"></span>
                </div>
              </div>

              {/* الأعمدة البيانية */}
              <div className="chart-bars-row">
                <div className="chart-bar blue-bar"></div>
                <div className="chart-bar light-bar"></div>
                <div className="chart-bar purple-bar"></div>
                <div className="chart-bar light-bar"></div>
                <div className="chart-bar green-bar"></div>
              </div>
            </div>

            {/* نافذة محرر الكود المتداخلة في الأسفل */}
            <div className="code-editor-card">
              <div className="editor-dots-bar">
                <span className="editor-dot red"></span>
                <span className="editor-dot yellow"></span>
                <span className="editor-dot green"></span>
              </div>
              <pre className="code-content">
                <code>
                  <span className="code-tag">&lt;head&gt;</span>{'\n'}
                  {'  '}<span className="code-tag">&lt;link</span> <span className="code-attr">href</span>=<span className="code-str">"/website/css/uicons-solid-rounded.css"</span> <span className="code-attr">rel</span>=<span className="code-str">"stylesheet"</span><span className="code-tag">&gt;</span>{'\n'}
                  <span className="code-tag">&lt;/head&gt;</span>{'\n'}
                  <span className="code-tag">&lt;body&gt;</span>{'\n'}
                  {'  '}<span className="code-tag">&lt;i</span> <span className="code-attr">class</span>=<span className="code-str">"fi-sr-eye"</span><span className="code-tag">&gt;&lt;/i&gt;</span>{'\n'}
                  {'  '}<span className="code-tag">&lt;i</span> <span className="code-attr">class</span>=<span className="code-str">"fi-sr-shopping-bag"</span><span className="code-tag">&gt;&lt;/i&gt;</span>{'\n'}
                  {'  '}<span className="code-tag">&lt;i</span> <span className="code-attr">class</span>=<span className="code-str">"fi-sr-envelope"</span><span className="code-tag">&gt;&lt;/i&gt;</span>{'\n'}
                  <span className="code-tag">&lt;/body&gt;</span>
                </code>
              </pre>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default IconFontsFeatures;