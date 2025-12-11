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
    <section style={{ textAlign: "center", padding: "1.5rem 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        <h3
          style={{
            fontFamily: "monospace",
            margin: 0,
          }}
        >
          My Experience
        </h3>
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
  );
}