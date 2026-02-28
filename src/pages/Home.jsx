import React from 'react';
import { Container } from 'react-bootstrap';
import Daniel from "../media/home/Daniel1.png";
import Rice from "../media/home/Rice5.png";
import Family from "../media/home/fam.png";
import RightSection from '../components/RightSection';
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import ProjectsCarousel from '../components/ProjectsCarousel';
import AboutMe from '../components/AboutMe';

const HomePage = () => {
  return (
    <>
      <style>{`
        .home-container {
          padding: 0;
        }

        .video-section {
          display: flex;
          justify-content: center;
          padding: 3rem 0;
        }

        .video-wrapper {
          width: 65%;
        }

        /* Tablet styles */
        @media (max-width: 992px) {
          .video-wrapper {
            width: 90%;
          }
        }

        /* Mobile styles */
        @media (max-width: 576px) {
          .video-wrapper {
            width: 80%;
          }
        }
      `}</style>

      <p style={{textAlign: "center"}}><b>Note: This site is a work in progress.</b></p>
        
      <Container className="home-container">
        <Intro/>
        <Experience />

        

        <section className="video-section">
          <div className="video-wrapper">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/IPjDeEaensU?si=NZfhSi-nU1ba_O-T"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <ProjectsCarousel />

        <AboutMe 
          title="About Me"
          text="I'm Daniel, a mechanical engineer who's interested in design-driven research at the intersection of haptics, rehabilitation, and robotics."
          buttonText="Read More"
          buttonLink="/about"
          imageSrc={Family}
        />
      </Container>
    </>
  );
};

export default HomePage;