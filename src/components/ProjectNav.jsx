import { useState } from 'react';
import paperTexture from '../media/home/paper_texture_tile.jpeg';

const ProjectNav = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('nav')?.offsetHeight || 64;
      const projectNavHeight = document.querySelector('[data-project-nav]')?.offsetHeight || 60;
      const offset = headerHeight + projectNavHeight;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .project-nav-tab {
          cursor: pointer;
          font-size: calc(0.85rem + 0.2vw);
          font-family: 'Martian Mono', monospace;
          color: #6c757d;
          font-weight: normal;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .project-nav-tab:hover {
          color: #c1440e;
        }
        .project-nav-tab.active {
          color: #8e3207;
          font-weight: bold;
          border-bottom: 2px solid #c1440e;
        }
        .project-nav-outer {
          position: sticky;
          top: 80px;
          z-index: 99;
          padding: 1rem 3rem 0;
        }
        .project-nav-inner {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .project-nav-outer {
            padding: 0.75rem 0 0;
          }
          .project-nav-inner {
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding: 0.5rem 5% 0;
            gap: 1.75rem;
            scrollbar-width: none;
            max-width: none;
            margin: 0;
          }
          .project-nav-inner::-webkit-scrollbar { display: none; }
        }
      `}</style>
      <div data-project-nav className="project-nav-outer" style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px',
      }}>
        <div className="project-nav-inner">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              className={`project-nav-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => scrollToSection(tab.id)}
            >
              {tab.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectNav;
