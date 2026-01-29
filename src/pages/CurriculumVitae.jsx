import { Container } from 'react-bootstrap';
import { useState } from 'react';

export default function CurriculumVitae() {
  const [activeTab, setActiveTab] = useState('cv');
  
  const cvData = {
    title: 'Curriculum Vitae',
    path: '/src/media/documents/DanielPlascenciaCV.pdf',
    filename: 'DanielPlascenciaCV.pdf'
  };
  
  const certificates = [
    {
      title: 'EIT Certificate',
      path: '/src/media/documents/CV_Certificates_EIT.pdf',
      filename: 'CV_Certificates_EIT.pdf'
    },
    {
      title: 'CITI Certificate',
      path: '/src/media/documents/CV_Certificates_CITI.pdf',
      filename: 'CV_Certificates_CITI.pdf'
    },
    {
      title: 'CSWA Certificate',
      path: '/src/media/documents/CV_Certificates_CSWA.pdf',
      filename: 'CV_Certificates_CSWA.pdf'
    },
    {
      title: 'Order of the Engineer Certificate',
      path: '/src/media/documents/CV_Certificates_OrderoftheEngineer.pdf',
      filename: 'CV_Certificates_OrderoftheEngineer.pdf'
    }
  ];

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
                borderBottom: activeTab === 'cv' ? '3px solid #923326' : '3px solid transparent',
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
                borderBottom: activeTab === 'certificates' ? '3px solid #923326' : '3px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Certificates
            </div>
          </div>
          
          {/* Download CV Button */}
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = cvData.path;
              link.download = cvData.filename;
              link.click();
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#923326';
              e.target.style.color = '#923326';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'black';
              e.target.style.color = 'black';
            }}
          >
            Download CV
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
                    color: '#923326', 
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
                    color: '#923326', 
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
                  src={cert.path}
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