import { Link } from "react-router-dom";

// This is a section with text on the right and an image on the left
export default function AboutMe({
    heading = null,
    title = "Title",
    text = "Lorem ipsum random text",
    buttonText = null,
    buttonLink = null,
    imageSrc = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    backgroundImage = null
  }) {
    return (
      <>
        <style>{`
          .abtmesection {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2% 15%;
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
              grid-template-columns: 1fr;
              gap: 1.5rem;
              margin: 5% 5%;
            }

            .abtmetextpart {
              text-align: center;
            }

            .abtmetextpart button {
              align-self: center;
            }

            .abtmeimgpart {
              justify-content: center;
              padding: 0;
              order: -1; /* Move image above text on mobile */
            }

            .abtmeimgpart img {
              max-height: 300px;
            }
          }

          /* Mobile styles */
          @media (max-width: 576px) {
            .abtmesection {
              margin: 5% 2%;
              gap: 1rem;
            }

            .abtmetextpart p:first-of-type {
              font-size: calc(1.2rem + .4vw) !important;
            }

            .abtmeimgpart img {
              max-height: 250px;
            }
          }
        `}</style>
  
        <div
          className="abtmesection"
          style={
            backgroundImage
              ? { backgroundImage: `url(${backgroundImage})` }
              : {}
          }
        >
          <div className="abtmeimgpart">
            <img src={imageSrc} alt="section visual" />
          </div>
          <div className="abtmetextpart">
            <p style={{ fontSize: 'calc(1.3rem + .6vw)' }}>{title}</p>
            <p>{text}</p>
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
        </div>
      </>
    );
  }