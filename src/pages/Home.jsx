import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import Daniel from "../media/home/daniel.png";
import Rice from "../media/home/rice.png";
import Family from "../media/home/fam.png";
import RightSection from '../components/RightSection';
import LeftSection from "../components/LeftSection";
import Experience from "../components/Experience";
import ProjectsCarousel from '../components/ProjectsCarousel';
import AboutMe from '../components/AboutMe';

const HomePage = () => {
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <ProjectsCarousel></ProjectsCarousel>

        <AboutMe 
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