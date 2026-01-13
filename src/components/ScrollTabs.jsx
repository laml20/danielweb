import { useState } from 'react';

const ScrollTabs = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Fixed Header with Tabs */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        paddingBottom: '1rem',
        marginBottom: '2rem',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              style={{
                cursor: 'pointer',
                fontSize: 'calc(1rem + .2vw)',
                fontFamily: 'monospace',
                color: activeTab === tab.id ? '#213547' : '#6c757d',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                paddingBottom: '0.5rem',
                borderBottom: activeTab === tab.id ? '3px solid #ca40bd' : '3px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      {tabs.map((tab) => (
        <section
          key={tab.id}
          id={tab.id}
          style={{
            minHeight: '60vh',
            marginBottom: '4rem',
            scrollMarginTop: '5rem'
          }}
        >
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#213547'
          }}>
            {tab.label}
          </h2>
          <div style={{
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
              Content for {tab.label} section goes here. Add your actual content to each section.
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ScrollTabs;