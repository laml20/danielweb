import React from 'react';
import { Container } from 'react-bootstrap';
import Daniel from "../media/home/Daniel1.png";
import Rice from "../media/home/Rice5.png";
import Family from "../media/home/fam.png";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import ProjectsCarousel from '../components/ProjectsCarousel';
import AboutMe from '../components/AboutMe';
import "../App.css";

const HomePage = () => {
  return (
    <>
      <style>{`
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
          .video-section {
            padding: 1.5rem 0;
            margin-bottom: 3rem;
          }
          .video-wrapper {
            width: 96%;
          }
        }
      `}</style>

      <p style={{textAlign: "center", color: "var(--color-hover)"}}><i>Note: This site is a work in progress.</i></p>
        
      <div className="container-fluid" style={{ maxWidth: '1150px', margin: '0 auto', padding: '0 12px' }}>
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
        <AboutMe/>
      </div>
    </>
  );
};

export default HomePage;