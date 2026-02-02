import { Link } from "react-router-dom";
//  Version 3: White Highlight - This is a section with text on the left and an image on the right
export default function LeftSection({
heading = null,
title = "Title",
text = "Text",
buttonText = null,
buttonLink = null,
imageSrc = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
backgroundImage = null
}) {
return (
<>
<style>{`
          .leftsection {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 3% 5%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            max-height: none;
            align-items: center;
          }
          .lefttextpart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            width: 100%;
            padding: 0 0 0 10%;
          }
          .lefttextpart p {
            margin: 0.5rem 0;
          }
          .lefttextpart p:last-of-type {
            margin-bottom: 1.5rem;
          }
          .lefttextpart p span {
            background: rgba(255, 255, 255, 0.75);
            padding: 0.1rem 0.4rem;
            display: inline;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
            line-height: 1.6;
          }
          .lefttextpart button {
            width: auto; 
            align-self: flex-start;
            background: rgba(255, 255, 255, 0.75) !important;
            border: 2px solid black !important;
            padding: 0.5rem 1rem !important;
            transition: all 0.3s ease;
          }
          .lefttextpart button::after {
            content: '→';
            margin-left: 0;
            opacity: 0;
            transition: all 0.3s ease;
            display: inline-block;
          }
          .lefttextpart button:hover::after {
            opacity: 1;
            margin-left: 0.5rem;
          }
          .leftimgpart {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 10% 0 0;
          }
          .leftimgpart img {
            max-width: 100%;
            height: auto;
            max-height: 500px;
            object-fit: contain;
          }
          /* Tablet styles */
          @media (max-width: 992px) {
            .leftsection {
              grid-template-columns: 1fr;
              gap: 1.5rem;
              margin: 5% 5%;
            }
            .lefttextpart {
              padding: 0 5%;
              text-align: center;
            }
            .lefttextpart button {
              align-self: center;
            }
            .leftimgpart {
              justify-content: center;
              padding: 0;
              order: -1; /* Move image above text on mobile */
            }
            .leftimgpart img {
              max-height: 350px;
            }
          }
          /* Mobile styles */
          @media (max-width: 576px) {
            .leftsection {
              margin: 5% 2%;
              gap: 1rem;
            }
            .lefttextpart {
              padding: 0 2%;
            }
            .lefttextpart p:first-of-type {
              font-size: calc(1.2rem + .4vw) !important;
            }
            .leftimgpart img {
              max-height: 250px;
            }
          }
        `}</style>
<div
className="leftsection"
style={
backgroundImage
            ? { backgroundImage: `url(${backgroundImage})` }
            : {}
}
>
<div className="lefttextpart">
<p style={{ fontSize: 'calc(1.3rem + .6vw)' }}><span>{title}</span></p>
<p><span>{text}</span></p>
{buttonText && (
buttonLink ? (
<Link to={buttonLink}>
<button>{buttonText}</button>
</Link>
            ) : (
<button>{buttonText}</button>
            )
          )}
</div>
<div className="leftimgpart">
<img src={imageSrc} alt="section visual" />
</div>
</div>
</>
  );
}