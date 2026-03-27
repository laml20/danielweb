import { Container } from 'react-bootstrap';
import { useState } from 'react';

export default function CurriculumVitae() {
  const [activeTab, setActiveTab] = useState('cv');
  
  const cvData = {
    title: 'Curriculum Vitae',
    path: '/documents/DanielPlascenciaCV.pdf',
    filename: 'DanielPlascenciaCV.pdf'
  };
  
  const certificates = [
    {
      title: 'EIT Certificate',
      path: '/documents/CV_Certificates_EIT.pdf',
      filename: 'CV_Certificates_EIT.pdf'
    },
    {
      title: 'CITI Certificate',
      path: '/documents/CV_Certificates_CITI.pdf',
      filename: 'CV_Certificates_CITI.pdf'
    },
    {
      title: 'CSWA Certificate',
      path: '/documents/CV_Certificates_CSWA.pdf',
      filename: 'CV_Certificates_CSWA.pdf'
    },
    {
      title: 'Order of the Engineer Certificate',
      path: '/documents/CV_Certificates_OrderoftheEngineer.pdf',
      filename: 'CV_Certificates_OrderoftheEngineer.pdf'
    }
  ];

  return (
    <Container style={{
      padding: '3rem 1rem',
      maxWidth: '1000px'
    }}>
      <style>{`
        .cv-download-btn { white-space: nowrap; padding-left: 1rem; padding-right: 1rem; color: black; }
        .cv-download-btn::after {
          content: ' ';
          margin-left: 0;
          transition: all 0.4s ease;
        }
        .cv-download-btn:hover::after {
          content: '↓';
          margin-left: 0.5rem;
        }
        .cv-btn-short { display: none; }
        .cv-tab {
          cursor: pointer;
          font-size: calc(1rem + .2vw);
          font-family: monospace;
          color: #6c757d;
          font-weight: normal;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .cv-tab:hover {
          color: #c1440e;
        }
        .cv-tab.active {
          color: #8e3207;
          font-weight: bold;
          border-bottom: 3px solid #c1440e;
        }
        .cv-mobile-view { display: none; }
        @media (max-width: 768px) {
          .cv-header-row {
            flex-wrap: nowrap !important;
          }
          .cv-btn-full { display: none; }
          .cv-btn-short { display: inline; }
          .cv-iframe-wrap { display: none !important; }
          .cv-trouble-text { display: none; }
          .cv-mobile-view { display: flex; }
          .cv-tab-row {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            min-width: 0;
          }
          .cv-tab-row::-webkit-scrollbar { display: none; }
        }
      `}</style>
      <div>
        {/* Header with Tabs */}
        <div className="cv-header-row" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {/* Tab Navigation */}
          <div className="cv-tab-row" style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div
              onClick={() => setActiveTab('cv')}
              className={`cv-tab${activeTab === 'cv' ? ' active' : ''}`}
            >
              Curriculum Vitae
            </div>
            <div
              onClick={() => setActiveTab('certificates')}
              className={`cv-tab${activeTab === 'certificates' ? ' active' : ''}`}
            >
              Certificates
            </div>
          </div>
          
          {/* Download CV Button */}
          <button
            className="cv-download-btn"
            onClick={() => {
              const link = document.createElement('a');
              link.href = cvData.path;
              link.download = cvData.filename;
              link.click();
            }}
          >
            <span className="cv-btn-full">Download CV</span>
            <span className="cv-btn-short">CV ↓</span>
          </button>
        </div>

        {/* Content Area */}
        {activeTab === 'cv' ? (
          <div>
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
                src={cvData.path}
                title={cvData.title}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              />
            </div>
            
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
                  href={cvData.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#8e3207', 
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                  }}
                >
                  Open in new tab
                </a>
                {' '}or{' '}
                <a 
                  href={cvData.path}
                  download={cvData.filename}
                  style={{ 
                    color: '#8e3207', 
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                  }}
                >
                  download directly
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {certificates.map((cert, index) => (
              <div key={index} style={{
                width: '100%',
                height: '700px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                overflow: 'hidden',
                backgroundColor: '#fafafa'
              }}>
                <iframe
                  src={`${cert.path}#view=FitV`}
                  title={cert.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                />
              </div>
            ))}
          </div>
        )}
        
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