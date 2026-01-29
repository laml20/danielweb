import React from 'react';
import { Container } from 'react-bootstrap';
import Daniel from "../media/home/daniel.png";
import Rice from "../media/home/Rice.png";
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

      <p style={{textAlign: "center"}}><b>Note: This site is a work in progress.</b></p>
        
      <Container className="home-container">
        <LeftSection
          title="Hello!"
          text="Welcome to my personal website. If you'd like to learn more about who I am and what I'm about, you've come to the right place. I consider this my digital notebook, it is a journal filled with content throughout my years in academia and I plan to continually update it. In here you'll find my qualifications, previous engineering projects, and creative pursuits. So, be my guest and explore!"
          buttonText="Projects"
          buttonLink="/projects"
          imageSrc={Daniel}
          backgroundImage={Rice}
        />

        

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
          buttonText="read more"
          buttonLink="/about"
          imageSrc={Family}
        />
      </Container>
    </>
  );
};

export default HomePage;