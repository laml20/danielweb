import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

const Projects = () => {
  const basePath = '/danielweb'; // Define the base path
  const projects = [
      {
        id: 1,
        image: 'https://via.placeholder.com/400x300',
        title: 'Autonomous Sailboat',
        description: 'So basically the main idea of this is we want to be able to design two fully',
        link: `${basePath}/projects/autonomous-sailboat-fleet`
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/400x300',
        title: 'vending',
        description: 'Project description goes here',
        link: `${basePath}/projects/automated-capsule-vending-machine`
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/400x300',
        title: 'glove',
        description: 'Project description goes here',
        link: `${basePath}/projects/vibrational-glove-for=parkinsons-disease`
      },
      {
          id: 4,
          image: 'https://via.placeholder.com/400x300',
          title: 'hand',
          description: 'Project description goes here',
          link: `${basePath}/projects/handwriting-assistance-device`
        },
      {
          id: 5,
          image: 'https://via.placeholder.com/400x300',
          title: 'foot',
          description: 'Project description goes here',
          link: `${basePath}/projects/sensory-feedback-for-smart-prosthetics`
      }
    ];
  return(
  <Container style={{padding: '3% 10%'}}>
      <h1>Projects</h1>
              {/* Projects Gallery */}
              <section className="projects-gallery py-5">
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={4}>
              <div className="card h-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontFamily: 'monospace' }}>
                    {project.title}
                  </h5>
                  <p className="card-text flex-grow-1">
                    {project.description}
                  </p>
                  <Button 
                    variant="outline-dark"
                    style={{ fontFamily: 'monospace' }}
                    onClick={() => window.location.href = project.link}
                  >
                    project
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
  </Container>
  );
};

export default Projects;