import { Link } from "react-router-dom";

//  This is a section with text on the left and an image on the right
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
            grid-template-columns: auto auto;
            margin: 2% 5%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            max-height: 450px;
          }
  
          .lefttextpart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            width: 90%;
            padding: 0 0 0 15%;
          }

          .lefttextpart button {
            width: auto; 
            align-self: flex-start;
          }
  
          .leftimgpart {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
  
          .leftimgpart img {
            max-height: 500px;
            height: 87%;
            padding: 10% 17% 0;
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
            <p style={{ fontSize: 'calc(1.3rem + .6vw)' }}>{title}</p>
            <p>{text}</p>
            {buttonLink ? (
            <Link to={buttonLink}>
              <button>{buttonText}</button>
            </Link>
          ) : (
            <button>{buttonText}</button>
          )}
          </div>
  
          <div className="leftimgpart">
            <img src={imageSrc} alt="section visual" />
          </div>
        </div>
      </>
    );
  }
  