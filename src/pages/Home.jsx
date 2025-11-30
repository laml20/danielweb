import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import AboutSection from '../components/RightSection';
import Daniel from "../media/daniel.png";
import Rice from "../media/rice.png";
import Family from "../media/fam.png";
import RightSection from '../components/RightSection';
import LeftSection from "../components/LeftSection";


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
      <LeftSection
        title="HELLO!"
        subtitle="I'm Daniel and I'm super passionate about mechanical engineering and stuff'"
        buttonText="Projects"
        buttonLink="/projects"
        imageSrc={Daniel}
        backgroundImage={Rice}
      />

      <Container>
        {/* My Experience Section */}
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

        {/* Video Section */}
        <section className="video-section py-5">
          <div className="ratio ratio-16x9 mb-5" style={{width: '70%'}}>
          <iframe  src="https://www.youtube.com/embed/IPjDeEaensU?si=NZfhSi-nU1ba_O-T" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </section>

        <Carousel>
      <Carousel.Item>
        <img src={Rice} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <button>hello</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Rice} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <button>hello</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Rice} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <button>hello</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      

        <RightSection 
          title="About Me"
          subtitle="I'm daniel, and i'm from california yeehaw"
          buttonText="read more"
          buttonLink="/about"
          imageSrc={Family}
        />
      </Container>
    </div>
  );
};

export default HomePage;