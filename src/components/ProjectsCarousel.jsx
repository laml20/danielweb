import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import Rice from "../media/home/rice.png";


const ProjectsCarousel = () => {

    const projects = [
        {
        id: 1,
        image: 'https://via.placeholder.com/400x300',
        title: 'Autonomous Sailboat',
        link: '/projects/autonomous-sailboat-fleet'
        },
        {
        id: 2,
        image: 'https://via.placeholder.com/400x300',
        title: 'Project Title 2',
        description: 'Project description goes here',
        link: '/projects/project2'
        },
        {
        id: 3,
        image: 'https://via.placeholder.com/400x300',
        title: 'Project Title 3',
        description: 'Project description goes here',
        link: '/projects/project3'
        }
    ];    
    
    return(
        <Carousel interval={3000} style={{ maxWidth: '90%', margin: '0 auto' }}>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              src={Rice}
              alt="First slide"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                filter: 'brightness(40%)',
              }}
            />
            <Carousel.Caption style={{ position: 'absolute', bottom: '15%', color: '#fff' }}>
              <h3 style={{padding: '3%'}}>First slide label</h3>
              <button style={{borderColor: 'white', color: 'white'}}>Hello</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              src={Rice}
              alt="Second slide"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                filter: 'brightness(40%)',
              }}
            />
            <Carousel.Caption style={{ position: 'absolute', bottom: '15%', color: '#fff' }}>
              <h3 style={{padding: '3%'}}>Second slide label</h3>
              <button style={{borderColor: 'white', color: 'white'}}>Hello</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              src={Rice}
              alt="Third slide"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                filter: 'brightness(40%)',
              }}
            />
            <Carousel.Caption style={{ position: 'absolute', bottom: '15%', color: '#fff' }}>
              <h3 style={{padding: '3%'}}>Third slide label</h3>
              <button style={{borderColor: 'white', color: 'white'}}>Hello</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>

    );
}

export default ProjectsCarousel;