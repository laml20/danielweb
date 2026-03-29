// Image floated right, text wraps around it (Word doc style)
export default function RightWrap({
    title,
    text = "Lorem ipsum random text",
    imageSrc,
    imageAlt = "section visual",
    id,
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
            margin: 2.5rem 0 0.5rem 2.5rem;
          }

          .rightwrap-title {
            font-size: var(--font-h3);
            margin: 0 0 0.5rem 0;
          }

          .rightwrap-text {
            margin: 0;
            font-size: var(--font-body);
          }

          @media (max-width: 576px) {
            .rightwrap-container {
              margin: 5% 8%;
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

        <div id={id} className="rightwrap-container" style={{ scrollMarginTop: '8rem' }}>
          {imageSrc && <img src={imageSrc} alt={imageAlt} className="rightwrap-img" />}
          {title && <p className="rightwrap-title">{title}</p>}
          <div className="rightwrap-text">{text}</div>
        </div>
      </>
    );
  }
