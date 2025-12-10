import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import Daniel from "../media/home/daniel.png";
import Rice from "../media/home/rice.png";
import Family from "../media/home/fam.png";
import RightSection from '../components/RightSection';
import LeftSection from "../components/LeftSection";
import Experience from "../components/Experience";

const HomePage = () => {
  const projects = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x300',
      title: 'Autonomous Sailboat',
      description: 'So basically the main idea of this is we want to be able to design two fully',
      link: '/projects/sailboat'
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

  return (
    <div>
      <Container>

      <LeftSection
        title="HELLO!"
        text="I'm Daniel and I'm super passionate about mechanical engineering and stuff'"
        buttonText="Projects"
        buttonLink="/projects"
        imageSrc={Daniel}
        backgroundImage={Rice}
      />

      <Experience></Experience>

        <section className="video-section py-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="ratio ratio-16x9 mb-5" style={{ width: '65%' }}>
            <iframe
              src="https://www.youtube.com/embed/IPjDeEaensU?si=NZfhSi-nU1ba_O-T"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

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
                  filter: 'brightness(50%)', // Makes the image darker
                }}
              />
              <Carousel.Caption style={{ position: 'absolute', bottom: '20%', color: '#fff' }}>
                <h3>First slide label</h3>
                <button>Hello</button>
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
                  filter: 'brightness(50%)', // Makes the image darker
                }}
              />
              <Carousel.Caption style={{ position: 'absolute', bottom: '20%', color: '#fff' }}>
                <h3>Second slide label</h3>
                <button>Hello</button>
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
                  filter: 'brightness(50%)', // Makes the image darker
                }}
              />
              <Carousel.Caption style={{ position: 'absolute', bottom: '20%', color: '#fff' }}>
                <h3>Third slide label</h3>
                <button>Hello</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>

        <RightSection 
          title="About Me"
          text="I'm daniel, and i'm from california yeehaw"
          buttonText="read more"
          buttonLink="/about"
          imageSrc={Family}
        />
      </Container>
    </div>
  );
};

export default HomePage;