// Image floated right, text wraps around it (Word doc style)
export default function RightWrap({
    title = "Title",
    text = "Lorem ipsum random text",
    imageSrc,
    imageAlt = "section visual"
  }) {
    return (
      <>
        <style>{`
          .rightwrap-container {
            margin: 2% 15%;
            overflow: hidden;
          }

          .rightwrap-container::after {
            content: "";
            display: table;
            clear: both;
          }

          .rightwrap-img {
            float: right;
            max-width: 40%;
            height: auto;
            max-height: 350px;
            object-fit: contain;
            margin: 0 0 1rem 1.5rem;
          }

          .rightwrap-title {
            font-size: calc(1.3rem + .6vw);
            margin: 0 0 0.5rem 0;
          }

          .rightwrap-text {
            margin: 0;
          }

          @media (max-width: 576px) {
            .rightwrap-container {
              margin: 5% 2%;
            }

            .rightwrap-img {
              float: none;
              display: block;
              max-width: 100%;
              max-height: 250px;
              margin: 0 auto 1rem auto;
            }
          }
        `}</style>

        <div className="rightwrap-container">
          {imageSrc && <img src={imageSrc} alt={imageAlt} className="rightwrap-img" />}
          <p className="rightwrap-title">{title}</p>
          <div className="rightwrap-text">{text}</div>
        </div>
      </>
    );
  }
