import React from 'react';
import { Container } from 'react-bootstrap';
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
            width: 80%;
          }
        }

        /* Mobile styles */
        @media (max-width: 576px) {
          .video-section {
            padding: 2rem 0;
          }

          .video-wrapper {
            width: 95%;
          }
        }
      `}</style>

      <Container className="home-container">
        <LeftSection
          title="HELLO!"
          text="I'm Daniel and I'm super passionate about mechanical engineering and stuff"
          buttonText="Projects"
          buttonLink="/projects"
          imageSrc={Daniel}
          backgroundImage={Rice}
        />

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
          text="I'm daniel, and i'm from california yeehaw"
          buttonText="read more"
          buttonLink="/about"
          imageSrc={Family}
        />
      </Container>
    </>
  );
};

export default HomePage;