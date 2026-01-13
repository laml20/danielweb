import { Container, Button, Badge } from 'react-bootstrap';
import { useState } from 'react';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('cv');

  const tabs = {
    cv: {
      title: 'Curriculum Vitae',
      path: '/src/media/cv/Daniel_Plascencia_CV.pdf',
      filename: 'Daniel_Plascencia_CV.pdf'
    },
    certificates: {
      title: 'Certificates',
      path: '/src/media/cv/Certificates.pdf',
      filename: 'Daniel_Plascencia_Certificates.pdf'
    }
  };

  return (
    <Container style={{ 
      padding: '3rem 1rem',
      maxWidth: '1000px'
    }}>
      <div>
        {/* Header with Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div
              onClick={() => setActiveTab('cv')}
              style={{
                cursor: 'pointer',
                fontSize: 'calc(1rem + .2vw)',
                fontFamily: 'monospace',
                color: activeTab === 'cv' ? '#213547' : '#6c757d',
                fontWeight: activeTab === 'cv' ? 'bold' : 'normal',
                paddingBottom: '0.5rem',
                borderBottom: activeTab === 'cv' ? '3px solid #ca40bd' : '3px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Curriculum Vitae
            </div>
            <div
              onClick={() => setActiveTab('certificates')}
              style={{
                cursor: 'pointer',
                fontSize: 'calc(1rem + .2vw)',
                fontFamily: 'monospace',
                color: activeTab === 'certificates' ? '#213547' : '#6c757d',
                fontWeight: activeTab === 'certificates' ? 'bold' : 'normal',
                paddingBottom: '0.5rem',
                borderBottom: activeTab === 'certificates' ? '3px solid #ca40bd' : '3px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Certificates
            </div>
          </div>

          {/* Download Button */}
          <button
            href={tabs[activeTab].path}
            download={tabs[activeTab].filename}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#ca40bd';
              e.target.style.color = '#ca40bd';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'black';
              e.target.style.color = 'black';
            }}
          >
            Download PDF
          </button>
        </div>

        {/* PDF Viewer */}
        <div style={{
          width: '100%',
          height: '80vh',
          minHeight: '600px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#fafafa',
          marginBottom: '2rem'
        }}>
          <iframe
            key={activeTab}
            src={tabs[activeTab].path}
            title={tabs[activeTab].title}
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>

        {/* Help Text */}
        <div style={{
          padding: '1rem',
          borderRadius: '4px',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: '#666',
            fontFamily: 'monospace'
          }}>
            Having trouble viewing?{' '}
            <a 
              href={tabs[activeTab].path}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: '#ca40bd', 
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}
            >
              Open in new tab
            </a>
            {' '}or{' '}
            <a 
              href={tabs[activeTab].path}
              download={tabs[activeTab].filename}
              style={{ 
                color: '#ca40bd', 
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}
            >
              download directly
            </a>
          </p>
        </div>

        {/* Contact Info Badges */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
        </div>
      </div>
    </Container>
  );
}