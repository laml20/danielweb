// Image floated left, text wraps around it (Word doc style)
export default function LeftWrap({
    title = "Title",
    text = "Lorem ipsum random text",
    imageSrc,
    imageAlt = "section visual"
  }) {
    return (
      <>
        <style>{`
          .leftwrap-container {
            margin: 2% 15%;
            overflow: hidden;
          }

          .leftwrap-container::after {
            content: "";
            display: table;
            clear: both;
          }

          .leftwrap-img {
            float: left;
            max-width: 40%;
            height: auto;
            max-height: 350px;
            object-fit: contain;
            margin: 0 1.5rem 1rem 0;
          }

          .leftwrap-title {
            font-size: var(--font-h3);
            margin: 0 0 0.5rem 0;
          }

          .leftwrap-text {
            margin: 0;
            font-size: var(--font-body);
          }

          @media (max-width: 576px) {
            .leftwrap-container {
              margin: 5% 8%;
            }

            .leftwrap-img {
              float: none;
              display: block;
              max-width: 100%;
              max-height: 250px;
              margin: 0 auto 1rem auto;
            }
          }
        `}</style>

        <div className="leftwrap-container">
          {imageSrc && <img src={imageSrc} alt={imageAlt} className="leftwrap-img" />}
          <p className="leftwrap-title">{title}</p>
          <div className="leftwrap-text">{text}</div>
        </div>
      </>
    );
  }
