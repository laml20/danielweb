import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Add this import
import { useState } from 'react';
import Daniel from "../media/home/daniel.png";
import HandwriteAssist from "../media/projects/HandwriteAssist.png";
import VendingMachine from "../media/projects/VendingMachine.png";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const projects = [
      {
        id: 1,
        image: Daniel,
        title: 'Senior Design: Autonomous Sailboat Fleet',
        description: 'Two sailboats that communicate and self-navigate to a given endpoint while carrying cargo',
        link: '/projects/autonomous-sailboat-fleet'
      },
      {
        id: 2,
        image: VendingMachine,
        title: 'Automated Capsule Vending Machine',
        description: 'A functioning vending machine built for class, a project focused on learning the basics of electronics',
        link: '/projects/automated-capsule-vending-machine'
      },
      {
        id: 3,
        image: Daniel,
        title: 'Parkinsons Vibrational Glove',
        description: 'A wearable glove based on Stanford research which delivers vibrations to calm tremors',
        link: '/projects/vibrational-glove-for-parkinsons-disease'
      },
      {
          id: 4,
          image: HandwriteAssist,
          title: 'Handwriting Assistance Device',
          description: 'A wearable device for people with limited mobility to enable independent writing',
          link: '/projects/handwriting-assistance-device'
        },
      {
          id: 5,
          image: Daniel,
          title: 'Research: Team Foot',
          description: 'A haptic device for transfemoral amputees which provides feedback to improve balance',
          link: '/projects/sensory-feedback-for-smart-prosthetics'
      },
      {
          id: 6,
          image: Daniel,
          title: 'DC Motor',
          description: 'A hands-on build of a functioning DC motor, focused on core prototyping and fabrication techniques',
          link: '/projects/dc-motor'
      },
      {
          id: 7,
          image: Daniel,
          title: 'REV Aeroshell',
          description: 'Structural chassis for the Rice Electric Vehicle competition team, built for integrity and aerodynamic performance',
          link: '/projects/rev-aeroshell'
      },
      {
          id: 8,
          image: Daniel,
          title: 'RoboDuck - WIP',
          description: 'A personal robot built from scratch — a self-driven project mainly to learn and explore robotics',
          link: '/projects/robo-duck'
      },    
      {
          id: 9,
          image: Daniel,
          title: 'Personal Work Booth',
          description: 'A personal work station built from scratch — a self-driven project mainly to learn and explore woodworking',
          link: '/projects/personal-work-booth'
      }, 
      {
          id: 10,
          image: Daniel,
          title: 'ENGI 210: Prototyping & Fabrication',
          description: 'A hands-on class covering 3D printing, fabrication methods, and other prototyping techniques',
          link: '/projects/prototyping-fabrication'
      }, 
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
      <section className="projects-gallery py-5">
        <Row className="g-3">
          {projects.map((project) => (
            <Col key={project.id} md={4}>
              <Link 
                to={project.link}  // Change href to "to"
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
              </Link>
            </Col>
          ))}
        </Row>
      </section>
  </Container>
  );
};

export default Projects;