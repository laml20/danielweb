import { Link } from "react-router-dom";

// Hero/intro block at the top of each project page — image left, text right
export default function ProjectDescription({
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
          .proj-desc {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 2rem;
            margin: 2% 15%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            align-items: center;
          }

          .proj-desc-textpart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            width: 100%;
            padding: 0;
          }

          .proj-desc-textpart button {
            width: auto;
            align-self: flex-start;
          }

          .proj-desc-imgpart {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-right: 10%;
          }

          .proj-desc-imgpart img {
            max-width: 100%;
            height: auto;
            max-height: 350px;
            object-fit: contain;
          }

          @media (max-width: 992px) {
            .proj-desc {
              grid-template-columns: 1fr;
              gap: 0.75rem;
              margin: 5% 8%;
            }

            .proj-desc-textpart {
              text-align: center;
            }

            .proj-desc-textpart button {
              align-self: center;
            }

            .proj-desc-imgpart {
              justify-content: center;
              padding: 0;
              order: -1;
            }

            .proj-desc-imgpart img {
              max-height: 300px;
            }
          }

          @media (max-width: 576px) {
            .proj-desc {
              margin: 5% 8%;
              gap: 0.5rem;
            }

            .proj-desc-imgpart img {
              max-height: 250px;
            }
          }
        `}</style>

        <div
          className="proj-desc"
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
        >
          <div className="proj-desc-imgpart">
            <img src={imageSrc} alt="project visual" />
          </div>
          <div className="proj-desc-textpart">
            <p style={{ fontSize: 'var(--font-h1)', margin: '0 0 0.75rem 0' }}>{title}</p>
            <p style={{ fontSize: 'var(--font-body)', margin: 0 }}>{text}</p>
            {buttonText && (
              buttonLink ? (
                <Link to={buttonLink}><button>{buttonText}</button></Link>
              ) : (
                <button>{buttonText}</button>
              )
            )}
          </div>
        </div>
      </>
    );
  }
