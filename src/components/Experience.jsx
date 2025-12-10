export default function Experience() {
    return (
        <section style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <h3 style={{ 
              fontFamily: 'monospace', 
              margin: 0 
            }}>
              My Experience
            </h3>
            <button 
              style={{
                padding: '0.5rem 2rem',
                border: '2px solid black',
                backgroundColor: 'white',
                color: 'black',
                cursor: 'pointer',
                fontFamily: 'monospace'
              }}
              onClick={() => openPdfModal('/path/to/cv.pdf', 'Curriculum Vitae')}
            >
              Curriculum Vitae
            </button>
            <button 
              style={{
                padding: '0.5rem 2rem',
                border: '2px solid black',
                backgroundColor: 'white',
                color: 'black',
                cursor: 'pointer',
                fontFamily: 'monospace'
              }}
              onClick={() => openPdfModal('/path/to/resume.pdf', 'Resume')}
            >
              Resume
            </button>
          </div>
        </section>
    );

}