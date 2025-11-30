import { Link } from "react-router-dom";

// This is a section with text on the right and an image on the left
export default function RightSection({
    title = "hello",
    subtitle = "i'm daniel and i'm a mechanical engineer passionate about stuff",
    buttonText = "projects",
    buttonLink = null, // null means no link
    imageSrc = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    backgroundImage = null
  }) {
    return (
      <>
        <style>{`
          .section {
            display: grid;
            grid-template-columns: auto auto;
            margin: 3% 10%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
  
          .section div {
            margin: 0;
          }
  
          .textpart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            width: 90%;
            padding: 0;
          }

          .textpart button {
            width: auto;       /* make button only as wide as its content */
            align-self: flex-start; /* optional: aligns left inside flex column */
          }
  
          .imgpart {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
  
          .imgpart img {
            max-height: 400px;
            padding: 10% 20% 0;
          }
        `}</style>
  
        <div
          className="section"
          style={
            backgroundImage
              ? { backgroundImage: `url(${backgroundImage})` }
              : {}
          }
        >
                  <div className="imgpart">
            <img src={imageSrc} alt="section visual" />
          </div>
          <div className="textpart">
            <p style={{ fontSize: 'calc(1.3rem + .6vw)' }}>{title}</p>
            <p>{subtitle}</p>
            {buttonLink ? (
            <Link to={buttonLink}>
              <button>{buttonText}</button>
            </Link>
          ) : (
            <button>{buttonText}</button>
          )}
          </div>
        </div>
      </>
    );
  }
  