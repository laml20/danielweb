import React, { useState } from "react";
import { Modal } from "react-bootstrap";

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
          padding: 1.5rem 0;
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

        /* Tablet styles */
        @media (max-width: 768px) {
          .experience-content {
            gap: 1.5rem;
          }

          .experience-title {
            font-size: 1.5rem;
          }
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
              openPdfModal("src/media/cv/Daniel_Plascencia_CV.pdf")
            }
          >
            Curriculum Vitae
          </button>
          <button
            onClick={() => openPdfModal("src/media/cv/Resume.pdf")}
          >
            Resume
          </button>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>PDF Viewer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src={pdfSrc}
              title="PDF Viewer"
              style={{ width: "100%", height: "500px", border: "none" }}
            ></iframe>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}