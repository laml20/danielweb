import { useState } from 'react';
import Daniel from "../media/home/Daniel2.png";

export default function About() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    const res = await fetch('https://formspree.io/f/mreobopq', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      setStatus('success');
      e.target.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <>
      <style>{`
        .about-contact-wrapper {
          max-width: 1166px;
          margin: 0 auto;
          padding: 3% 5%;
        }

        .about-contact-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .about-contact-img {
          max-width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
        }

        .about-contact-form-side {
          display: flex;
          flex-direction: column;
          padding-top: 2rem;
        }

        .about-contact-title {
          font-size: calc(1.3rem + .6vw);
          margin: 0 0 1.5rem 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .contact-form input,
        .contact-form textarea {
          background: transparent;
          border: 2px solid black;
          outline: 8px solid transparent;
          padding: 0.5rem 1rem;
          font-size: inherit;
          font-family: inherit;
          color: inherit;
          transition: border-color 0.2s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #a51b09;
          outline: none;
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 130px;
        }

        .contact-send-btn {
          align-self: flex-start;
          background: transparent !important;
          border: 2px solid black !important;
          padding: 0.5rem 1rem !important;

          font-size: inherit;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .contact-send-btn:focus {
          outline: none;
        }

        .contact-send-btn::after {
          content: ' ';
          margin-left: 0;
          opacity: 1;
          transition: all 0.4s ease;
        }


        .contact-send-btn:hover:not(:disabled)::after {
          content: '→';
          opacity: 1;
          margin-left: 0.5rem;
        }

        .contact-send-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .about-contact-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-contact-img {
            max-height: 260px;
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="about-contact-wrapper">
      <div className="about-contact-section">
        <img src={Daniel} alt="Daniel" className="about-contact-img" />

        <div className="about-contact-form-side">
          <p className="about-contact-title">Contact Me</p>

          {status === 'success' ? (
            <p>Thanks for reaching out — I'll get back to you soon.</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Message
                <textarea name="message" required />
              </label>
              {status === 'error' && (
                <p style={{ color: '#a51b09', margin: 0 }}>
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                className="contact-send-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send'}
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
