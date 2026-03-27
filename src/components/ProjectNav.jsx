import { useState } from 'react';
import bkgd from '../media/home/background.png';

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
        .project-nav-inner {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .project-nav-outer {
            margin: 1.5rem 0 !important;
            padding: 0.75rem 0 0 0 !important;
          }
          .project-nav-inner {
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding: 0.5rem 5% 0;
            gap: 1.75rem;
            scrollbar-width: none;
          }
          .project-nav-inner::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
      <div data-project-nav className="project-nav-outer" style={{
        position: 'sticky',
        top: '64px',
        zIndex: 99,
        padding: '1rem 0 0 0',
        margin: '3rem',
        backgroundImage: `url(${bkgd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
