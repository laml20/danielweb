// Title + justified text on top, image centered below
export default function CenterSection({
    title = "Title",
    text = "Lorem ipsum random text",
    imageSrc,
    imageAlt = "section visual"
  }) {
    return (
      <>
        <style>{`
          .centersection-container {
            margin: 2% 15%;
          }

          .centersection-title {
            font-size: calc(1.3rem + .6vw);
            margin: 0 0 0.5rem 0;
            text-align: left;
          }

          .centersection-text {
            text-align: justify;
            margin: 0 0 1.5rem 0;
          }

          .centersection-imgwrap {
            display: flex;
            justify-content: center;
          }

          .centersection-img {
            max-width: 80%;
            height: auto;
            max-height: 400px;
            object-fit: contain;
          }

          @media (max-width: 576px) {
            .centersection-container {
              margin: 5% 2%;
            }

            .centersection-img {
              max-width: 100%;
              max-height: 250px;
            }
          }
        `}</style>

        <div className="centersection-container">
          <p className="centersection-title">{title}</p>
          <div className="centersection-text">{text}</div>
          {imageSrc && (
            <div className="centersection-imgwrap">
              <img src={imageSrc} alt={imageAlt} className="centersection-img" />
            </div>
          )}
        </div>
      </>
    );
  }
