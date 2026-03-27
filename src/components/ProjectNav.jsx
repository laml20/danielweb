import { useState } from 'react';
import bkgd from '../media/home/background.png';

const ProjectNav = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          color: #a51b09;
        }
        .project-nav-tab.active {
          color: #213547;
          font-weight: bold;
          border-bottom: 2px solid #213547;
        }
      `}</style>
      <div style={{
        position: 'sticky',
        top: '64px',
        zIndex: 99,
        padding: '1rem 0',
        margin: '3rem',
        backgroundImage: `url(${bkgd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          overflowX: 'auto',
        }}>
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
