import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import bkgd from "../media/home/background.png";

const cvImages = [
  "/documents/DanielPlascenciaCV1.png",
  "/documents/DanielPlascenciaCV2.png"
];

const certImages = [
  "/documents/DanielPlascenciaEIT.png",
  "/documents/DanielPlascenciaCITI.png",
  "/documents/DanielPlascenciaCSWA.png",
  "/documents/DanielPlascenciaOOTE.png"
];

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const openModal = (images) => {
    setModalImages(images);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImages([]);
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

        .experience-section button {
          color: black;
        }

        .experience-section button { display: inline-flex; align-items: center; }
        .experience-section button::after, .experience-section button:hover::after { content: '' !important; margin-left: 0 !important; }
        .experience-section button .exp-btn-icon { opacity: 0; width: 0; overflow: hidden; margin-left: 0; transition: opacity 0.2s ease, width 0.2s ease, margin-left 0.2s ease, transform 0.2s ease; }
        .experience-section button:hover .exp-btn-icon { opacity: 1; width: 15px; margin-left: 0.3rem; transform: translate(2px, -2px); }

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
            margin-bottom: 0.5rem;
          }

          .experience-content button:last-of-type {
            margin-bottom: 1rem;
          }

          .modal-dialog {
            margin: 0.5rem !important;
            max-width: calc(100vw - 1rem) !important;
          }

          .modal-body {
            padding: 0 !important;
          }
        }
      `}</style>

      <section className="experience-section">
        <div className="experience-content">
          <h3 className="experience-title">My Experience</h3>
          <button onClick={() => openModal(cvImages)}>
            Curriculum Vitae <FiArrowUpRight className="exp-btn-icon" size={15} />
          </button>
          <button onClick={() => openModal(certImages)}>
            Certificates <FiArrowUpRight className="exp-btn-icon" size={15} />
          </button>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton style={{ backgroundImage: `url(${bkgd})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          </Modal.Header>
          <Modal.Body style={{ backgroundImage: `url(${bkgd})`, backgroundSize: "cover", backgroundPosition: "center", maxHeight: "80vh", overflowY: "auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {modalImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Page ${index + 1}`}
                  style={{ width: "100%", display: "block", borderRadius: "4px" }}
                />
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}
