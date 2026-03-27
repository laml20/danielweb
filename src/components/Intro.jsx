import { Link } from "react-router-dom";
import Daniel from "../media/home/Daniel2.png";
import Rice from "../media/home/Rice5.png";

export default function Intro() {
return (
<>
<style>{`
          .introsection-wrapper {
            margin: 3% 5%;
          }
          .introsection {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            align-items: center;
          }
          .introtextpart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10% 0 0 13%;
          }
          .introtextpart p {
            margin: 0.5rem 0;
          }
          .introtextpart p:last-of-type {
            margin-bottom: 1.5rem;
          }
          .introtextpart p span {
            background: rgba(255, 255, 255, 0.8);
            padding: 0.1rem 0.4rem;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
            line-height: 1.5;
          }
          .introtextpart button {
            align-self: flex-start;
            background: rgba(255, 255, 255, 0.8) !important;
            border: 2px solid black !important;
            padding: 0.5rem 1rem !important;
            outline: 8px solid rgba(255, 255, 255, 0.8);
            margin-left: 8px;
            transition: all 0.4s ease;
            color: black !important;
          }
          .introtextpart button:focus {
            outline: 8px solid rgba(255, 255, 255, 0.75);
          }
          .introtextpart button::after {
            content: ' ';
            margin-left: 0;
            opacity: 1;
            transition: all 0.4s ease;
          }
          .introtextpart button:hover::after {
            content: '→';
            opacity: 1;
            margin-left: 0.5rem;
          }
          .introimgpart {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 10% 0 0;
            margin: 25px 0px -50px 0px;
          }
          .introimgpart img {
            max-width: 100%;
            height: auto;
            max-height: 500px;
            object-fit: contain;
          }

          /* Mobile-only below-fold section (hidden by default) */
          .intro-below-fold {
            display: none;
          }

          /* Tablet styles */
          @media (max-width: 992px) {
            .introsection-wrapper {
              margin-left: calc(-50vw + 50%) !important;
              margin-right: calc(-50vw + 50%) !important;            
            }
            .introsection {
            gap: 0rem
            }
            .introtextpart {
            padding: 17% 0 10% 15%;
            }
            
          }

          /* Mobile styles */
          @media (max-width: 576px) {
            .introsection-wrapper {
              margin: 0;
              overflow: visible;
            }
            .introsection {
              grid-template-columns: 0.6fr 1fr;
              gap: 0;
              min-height: 230px;
              align-items: center;
              overflow: visible;
            }
            /* Hide description and button from inside the background on mobile */
            .introsection .intro-description,
            .introsection .intro-button-link {
              display: none;
            }
            .introtextpart {
              padding: 1rem 0 1rem 8%;
              text-align: right;
            }
            .introimgpart {
              justify-content: center;
              padding: 0;
              order: 1;
              margin: 0 0 -25px 0;
            }
            .introimgpart img {
              max-height: 400px;
              width: 100%;
              object-fit: contain;
            }
            /* Show the below-fold section on mobile */
            .intro-below-fold {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              padding: 2rem 5% 0;
            }
            .intro-below-fold p {
              margin: 0 0 1.5rem 0;
            }
            .intro-below-fold p span {
              background: rgba(255, 255, 255, 0.8);
              padding: 0.1rem 0.4rem;
              box-decoration-break: clone;
              -webkit-box-decoration-break: clone;
              line-height: 1.5;
            }
            .intro-below-fold button {
              background: rgba(255, 255, 255, 0.8) !important;
              border: 2px solid black !important;
              padding: 0.5rem 1rem !important;
              outline: 8px solid rgba(255, 255, 255, 0.8);
              transition: all 0.4s ease;
              color: black !important;
            }
            .intro-below-fold button:focus {
              outline: 8px solid rgba(255, 255, 255, 0.75);
            }
            .intro-below-fold button::after {
              content: ' ';
              margin-left: 0;
              opacity: 1;
              transition: all 0.4s ease;
            }
            .intro-below-fold button:hover::after {
              content: '→';
              opacity: 1;
              margin-left: 0.5rem;
            }
            .intro-below-fold button {
              margin-bottom: 3rem;
            }
          }
        `}</style>

<div className="introsection-wrapper">
  <div
    className="introsection"
    style={{ backgroundImage: `url(${Rice})` }}
  >
    <div className="introtextpart">
      <p style={{ fontSize: 'calc(1.3rem + .6vw)' }}><span>Hello!</span></p>
      <p className="intro-description"><span>I'm Daniel, a mechanical engineer exploring design-driven research at the intersection of haptics, rehabilitation, and robotics. Welcome to my digital notebook, where I keep a growing collection of engineering projects, academic work, and creative pursuits.</span></p>
      <Link className="intro-button-link" to="/projects">
        <button>Projects</button>
      </Link>
    </div>
    <div className="introimgpart">
      <img src={Daniel} alt="section visual" />
    </div>
  </div>
</div>

{/* Below-fold section: only visible on mobile */}
<div className="intro-below-fold">
  <p><span>I'm Daniel, a mechanical engineer exploring design-driven research at the intersection of haptics, rehabilitation, and robotics. Welcome to my digital notebook, where I keep a growing collection of engineering projects, academic work, and creative pursuits.</span></p>
  <Link to="/projects">
    <button>Projects</button>
  </Link>
</div>
</>
  );
}