import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

export default function CurriculumVitae() {
  const [activeTab, setActiveTab] = useState('cv');
  
  const cvImages = [
    '/documents/DanielPlascenciaCV1.png',
    '/documents/DanielPlascenciaCV2.png'
  ];

  const cvDownload = {
    path: '/documents/DanielPlascenciaCV.png',
    filename: 'DanielPlascenciaCV.png'
  };

  const certificates = [
    {
      title: 'EIT Certificate',
      imagePath: '/documents/DanielPlascenciaEIT.png'
    },
    {
      title: 'CITI Certificate',
      imagePath: '/documents/DanielPlascenciaCITI.png'
    },
    {
      title: 'CSWA Certificate',
      imagePath: '/documents/DanielPlascenciaCSWA.png'
    },
    {
      title: 'Order of the Engineer Certificate',
      imagePath: '/documents/DanielPlascenciaOOTE.png'
    }
  ];

  const certDownload = {
    path: '/documents/DanielPlascenciaCertificates.pdf',
    filename: 'DanielPlascenciaCertificates.pdf'
  };

  return (
    <Container style={{
      padding: '0rem 1rem',
      maxWidth: '1000px'
    }}>
      <style>{`
        .cv-download-btn { white-space: nowrap; padding-left: 1rem; padding-right: 1rem; color: black; display: inline-flex; align-items: center; }
        .cv-download-btn::after, .cv-download-btn:hover::after { content: '' !important; margin-left: 0 !important; }
        .cv-download-btn .cv-btn-icon { opacity: 0; width: 0; overflow: hidden; margin-left: 0; transition: opacity 0.2s ease, width 0.2s ease, margin-left 0.2s ease, transform 0.2s ease; }
        .cv-download-btn:hover .cv-btn-icon { opacity: 1; width: 15px; margin-left: 0.4rem; transform: translateY(2px); }
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
        @media (max-width: 768px) {
          .cv-header-row {
            flex-wrap: nowrap !important;
          }
          .cv-btn-full { display: none; }
          .cv-btn-short { display: inline; }
          .cv-download-btn .cv-btn-icon { opacity: 1; width: 15px; margin-left: 0.4rem; }
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
          marginBottom: '1rem',
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
          
          {/* Download Button */}
          <button
            className="cv-download-btn"
            style={{ marginBottom: '0.5rem' }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = activeTab === 'cv' ? cvDownload.path : certDownload.path;
              link.download = activeTab === 'cv' ? cvDownload.filename : certDownload.filename;
              link.click();
            }}
          >
            <span className="cv-btn-full">{activeTab === 'cv' ? 'Download CV' : 'Download Certificates'}</span>
            <span className="cv-btn-short">{activeTab === 'cv' ? 'CV' : 'Certs'}</span>
            <FiDownload className="cv-btn-icon" size={15} />
          </button>
        </div>

        {/* Content Area */}
        {activeTab === 'cv' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cvImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Curriculum Vitae page ${index + 1}`}
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              />
            ))}
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {certificates.map((cert, index) => (
              <img
                key={index}
                src={cert.imagePath}
                alt={cert.title}
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              />
            ))}
          </div>
        )}
        
      </div>
    </Container>
  );
}