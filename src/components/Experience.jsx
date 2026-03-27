import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import bkgd from "../media/home/background.png";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [pdfSrc, setPdfSrc] = useState("");

  const openPdfModal = (src) => {
    setPdfSrc(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPdfSrc("");
  };

  return (
    <>
      <style>{`
        .experience-section {
          text-align: center;
          padding: 4rem 0 3.5rem;
        }

        .experience-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .experience-title {
          font-family: monospace;
          margin: 0;
        }

        .experience-section button::after {
          content: ' ';
          margin-left: 0;
          transition: all 0.4s ease;
        }

        .experience-section button:hover::after {
          content: ' ↗';
          margin-left: 0.5rem;
        }

        /* Mobile styles */
        @media (max-width: 576px) {
          .experience-section {
            padding: 1rem 0;
          }

          .experience-content {
            gap: 1rem;
            flex-direction: column;
          }

          .experience-title {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <section className="experience-section">
        <div className="experience-content">
          <h3 className="experience-title">My Experience</h3>
          <button
            onClick={() =>
              openPdfModal("/documents/DanielPlascenciaCV.pdf")
            }
          >
            Curriculum Vitae
          </button>
          <button
            onClick={() => openPdfModal("/documents/CV_Certificates_EIT.pdf")}
          >
            Certificates
          </button>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton style={{ backgroundImage: `url(${bkgd})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          </Modal.Header>
          <Modal.Body style={{ backgroundImage: `url(${bkgd})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <iframe
              src={pdfSrc}
              style={{ width: "100%", height: "500px", border: "none" }}
            ></iframe>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}