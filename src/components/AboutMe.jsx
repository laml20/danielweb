import { Link } from "react-router-dom";
import Family from "../media/home/fam.png";

export default function AboutMe() {
return (
    <>
      <style>{`
        .abtmesection {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 9% 15% 4%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          align-items: center;
        }

        .abtmetextpart {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          width: 100%;
          padding: 0;
        }

        .abtmetextpart button {
          width: auto;     
          align-self: flex-start; 
        }

        .abtmeimgpart {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-right: 15%;
        }

        .abtmeimgpart img {
          max-width: 100%;
          height: auto;
          max-height: 350px;
          object-fit: contain;
        }

        /* Tablet styles */
        @media (max-width: 992px) {
          .abtmesection {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin: 10% 10% 5%;
          }

          .abtmeimgpart img {
            max-height: 300px;
            margin: 7% 0 5%;
          }
        }

        /* Mobile styles */
        @media (max-width: 576px) {
          .abtmesection {
            grid-template-columns: 1fr;
            margin: 17% 15% 5%;
            gap: 1rem;
          }

          .abtmetextpart {
            text-align: center;
          }

          .abtmetextpart p:last-of-type {
            margin: 0 0 8%;
          }

          .abtmetextpart button {
            align-self: center;
          }

          .abtmeimgpart {
            justify-content: center;
            padding: 0;
            order: -1; /* Move image above text on mobile */
          }

          .abtmetextpart p:first-of-type {
            font-size: calc(1.2rem + .4vw) !important;
          }

          .abtmeimgpart img {
            max-height: 250px;
            margin: 0 0 5%;
          }
        }
      `}</style>

      <div className="abtmesection">
        <div className="abtmeimgpart">
          <img src={Family} alt="Daniel and his family" />
        </div>
        <div className="abtmetextpart">
          <p style={{ fontSize: 'calc(1.3rem + .6vw)' }}>About Me</p>
          <p>I'm Daniel, a mechanical engineer who's interested in design-driven research at the intersection of haptics, rehabilitation, and robotics.</p>
          <Link to='/about'><button>Read More</button></Link>
        </div>
      </div>
    </>
    );
  }