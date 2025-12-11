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
            grid-template-columns: 50% 50%;
            margin: 2% 15%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
  
          .abtmesection div {
            margin: 0;
          }
  
          .abtmetextpart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            width: 90%;
            padding: 0;
          }

          .abtmetextpart button {
            width: auto;     
            align-self: flex-start; 
          }
  
          .abtmeimgpart {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
  
          .abtmeimgpart img {
            max-height: 350px;
            padding: 0% 25% 0% 0%;
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
  