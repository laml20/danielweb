import { Link } from "react-router-dom";
import Daniel from "../media/home/Daniel2.png";
import Rice from "../media/home/Rice5.png";

//  Version 3: White Highlight - This is a section with text on the left and an image on the right
export default function Intro() {
return (
<>
<style>{`
          .introsection {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 3% 5%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            align-items: center;
          }
          .introtextpart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10% 0 0 10%;
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
            background: rgba(255, 255, 255, 0.75) !important;
            border: 2px solid black !important;
            padding: 0.5rem 1rem !important;
            outline: 8px solid rgba(255, 255, 255, 0.75);
            margin-left: 8px;
            transition: all 0.4s ease;
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
          /* Tablet styles */
          @media (max-width: 992px) {
            .introsection {
              grid-template-columns: 1fr;
              gap: 1.5rem;
              margin: 5% 5%;
            }
            .introtextpart {
              padding: 0 5%;
              text-align: center;
            }
            .introtextpart button {
              align-self: center;
            }
            .introimgpart {
              justify-content: center;
              padding: 0;
              order: -1; /* Move image above text on mobile */
            }
            .introimgpart img {
              max-height: 350px;
            }
          }
          /* Mobile styles */
          @media (max-width: 576px) {
            .introsection {
              margin: 5% 2%;
              gap: 1rem;
            }
            .introtextpart {
              padding: 0 2%;
            }
            .introtextpart p:first-of-type {
              font-size: calc(1.2rem + .4vw) !important;
            }
            .introimgpart img {
              max-height: 250px;
            }
          }
        `}</style>
<div
className="introsection"
style={{ backgroundImage: `url(${Rice})` }}
>
<div className="introtextpart">
<p style={{ fontSize: 'calc(1.3rem + .6vw)' }}><span>Hello!</span></p>
<p><span>I'm Daniel, a mechanical engineer exploring design-driven research at the intersection of haptics, rehabilitation, and robotics. Welcome to my digital notebook, where I keep a growing collection of engineering projects, academic work, and creative pursuits.</span></p>
<Link to="/projects">
<button>Projects</button>
</Link>
</div>
<div className="introimgpart">
<img src={Daniel} alt="section visual" />
</div>
</div>
</>
  );
}