import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rice from "../media/home/rice.png";

const responsiveStyles = `
  .projects-carousel .carousel-caption a {
    text-decoration: none;
  }
  .projects-carousel .carousel-caption a:hover {
    border-color: #a51b09;
  }

  @media (max-width: 1024px) {
    .projects-carousel {
      max-width: 92% !important;
    }
    .projects-carousel .slide-container {
      max-height: 450px;
    }
  }

  @media (max-width: 768px) {
    .projects-carousel {
      max-width: 100vw !important;
      margin-left: calc(-50vw + 50%) !important;
      margin-right: calc(-50vw + 50%) !important;
      margin-top: 6% !important;
      margin-bottom: 6% !important;
    }
    .projects-carousel .slide-container {
      max-height: 320px;
    }
  }
`;

const styles = {
  carouselWrapper: {
    maxWidth: '80%',
    margin: '6% auto',
  },
  slideContainer: {
    position: 'relative',
    maxHeight: '575px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(55%)',
  },
  caption: {
    position: 'absolute',
    bottom: '15%',
    color: '#fff',
  },
  captionHeading: {
    padding: '3%',
  },
  button: {
    padding: '0.5rem 2rem',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-block',
  },
};

const ProjectsCarousel = () => {

  const projects = [
    {
      id: 1,
      image: Rice,
      title: 'Autonomous Sailboat',
      button: 'Read More',
      link: '/projects/autonomous-sailboat-fleet'
    },
    {
      id: 2,
      image: Rice,
      title: 'Project Title 2',
      button: 'View Gallery',
      link: '/projects/project2'
    },
    {
      id: 3,
      image: Rice,
      title: 'Project Title 3',
      button: 'Read More',
      link: '/projects/project3'
    }
  ];

  return (
    <>
      <style>{responsiveStyles}</style>
      <Carousel interval={3000} style={styles.carouselWrapper} className="projects-carousel">
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <div style={styles.slideContainer} className="slide-container">
              <img
                src={project.image}
                alt={project.title}
                style={styles.image}
              />
              <Carousel.Caption style={styles.caption}>
                <h3 style={styles.captionHeading}>{project.title}</h3>
                <Link to={project.link} style={styles.button}>{project.button}</Link>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ProjectsCarousel;