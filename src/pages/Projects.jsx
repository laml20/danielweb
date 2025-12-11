import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Daniel from "../media/home/daniel.png";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const basePath = '/danielweb'; // Define the base path
  const projects = [
      {
        id: 1,
        image: Daniel,
        title: 'Autonomous Sailboat',
        description: 'So basically the main idea of this is we want to be able to design two fully',
        link: `${basePath}/projects/autonomous-sailboat-fleet`
      },
      {
        id: 2,
        image: Daniel,
        title: 'vending',
        description: 'Project description goes here',
        link: `${basePath}/projects/automated-capsule-vending-machine`
      },
      {
        id: 3,
        image: Daniel,
        title: 'glove',
        description: 'Project description goes here',
        link: `${basePath}/projects/vibrational-glove-for=parkinsons-disease`
      },
      {
          id: 4,
          image: Daniel,
          title: 'hand',
          description: 'Project description goes here',
          link: `${basePath}/projects/handwriting-assistance-device`
        },
      {
          id: 5,
          image: Daniel,
          title: 'foot',
          description: 'Project description goes here',
          link: `${basePath}/projects/sensory-feedback-for-smart-prosthetics`
      }
    ];

  const handleMouseMove = (e) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return(
  <Container style={{padding: '3% 10%'}}>
      <h1>Projects</h1>
              {/* Projects Gallery */}
              <section className="projects-gallery py-5">
        <Row className="g-3">
          {projects.map((project) => (
            <Col key={project.id} md={4}>
              <a 
                href={project.link} 
                style={{ textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="card h-100" 
                  style={{
                    backgroundColor: 'transparent', 
                    border: '0px',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="card-img-top"
                    onMouseMove={handleMouseMove}
                    style={{ 
                      height: '300px', 
                      objectFit: 'cover',
                      transform: hoveredCard === project.id 
                        ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.1)` 
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                      transition: 'transform 0.1s ease-out'
                    }}
                  />
                  <div className="card-body d-flex flex-column align-items-center" style={{ minHeight: '180px', paddingTop: '30px' }}>
                    <h5 
                      className="card-title" 
                      style={{ 
                        fontFamily: 'monospace',
                        fontWeight: hoveredCard === project.id ? 'bold' : 'normal',
                        transition: 'font-weight 0.3s ease',
                        textAlign: 'center',
                        width: '100%'
                      }}
                    >
                      {project.title}
                    </h5>
                    <p 
                      className="card-text" 
                      style={{ 
                        marginBottom: 0,
                        textAlign: 'center',
                        width: '100%'
                      }}
                    >
                      {project.description}
                      {hoveredCard === project.id && (
                        <span style={{ marginLeft: '8px' }}>→</span>
                      )}
                    </p>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </section>
  </Container>
  );
};

export default Projects;