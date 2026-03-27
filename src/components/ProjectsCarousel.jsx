import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rice from "../media/home/rice.png";
import Glove from "../media/glove/glove.png";
import Foot from "../media/foot/foot.png";
import Roboduck from "../media/roboduck/robotics_1_Page_2 copy.jpg";
import Sailboat from "../media/sailboat/IMG_3933.jpg";
import Film5 from '../media/film/000000010022.jpg';
import Film15 from '../media/film/000099410007.jpg';
import Object1 from '../media/digital/Photography_object_1.jpg';


const responsiveStyles = `
  .projects-carousel .carousel-caption a {
    text-decoration: none;
  }
  .projects-carousel .carousel-caption a:hover {
  }

  .projects-carousel .carousel-caption a::after {
    content: ' ';
    margin-left: 0;
    transition: all 0.4s ease;
  }

  .projects-carousel .carousel-caption a:hover::after {
    content: ' →';
    margin-left: 0.5rem;
  }


  @media (max-width: 992px) {
    .projects-carousel {
      max-width: 100vw !important;
      margin-left: calc(-50vw + 50%) !important;
      margin-right: calc(-50vw + 50%) !important;
      margin-top: 6% !important;
      margin-bottom: 6% !important;
    }
    .projects-carousel .slide-container img {
      height: 320px !important;
    }
  }
`;

const styles = {
  carouselWrapper: {
    maxWidth: '90%',
    margin: '6% auto',
  },
  slideContainer: {
    position: 'relative',
    maxHeight: '575px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '575px',
    objectFit: 'cover',
    objectPosition: 'center 25%',
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
      image: Glove,
      title: 'Parkinsons Vibrational Glove',
      button: 'Read More',
      link: '/projects/vibrational-glove-for-parkinsons-disease',
    },
    {
      id: 2,
      image: Sailboat,
      title: 'Autonomous Sailboat Fleet',
      button: 'Read More',
      link: '/projects/autonomous-sailboat-fleet',
    },
    {
      id: 3,
      image: Film5,
      title: 'Film Photography',
      button: 'View Gallery',
      link: '/creative',
    },
    {
      id: 4,
      image: Foot,
      title: 'Research: Team Foot',
      button: 'Read More',
      link: '/projects/sensory-feedback-for-smart-prosthetics',
    },
    {
      id: 5,
      image: Film15,
      title: 'Film Photography',
      button: 'View Gallery',
      link: '/creative',
    },
    {
      id: 6,
      image: Roboduck,
      title: 'Robotics: RoboDuck',
      button: 'Read More',
      link: '/projects/robotics-robowear',
    },
    {
      id: 7,
      image: Object1,
      title: 'Digital Art',
      button: 'View Gallery',
      link: '/creative?tab=digital',
    },
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
