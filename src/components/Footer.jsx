import React from "react";
import { Stack } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import bkgd from "../media/home/background.png"; // Import the background image

export default function Footer() {
  return (
    <footer className="py-5 mt-4 text-center">
      <hr className="mb-5" style={{ width: "80%", margin: "0 auto 2rem" }} />

      {/* Desktop layout */}
      <Stack
        direction="horizontal"
        className="justify-content-center d-none d-md-flex"
        style={{ gap: "4rem" }}
      >
        <span>Connect with me!</span>
        <a
          href="https://www.linkedin.com/in/plascenciasegura"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#0077b5", fontWeight: "bold" }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:plascenciadan24@gmail.com"
          style={{ textDecoration: "none", color: "#d14836", fontWeight: "bold" }}
        >
          Gmail
        </a>
        <span style={{ color: "#6c757d" }}>Updated 27 Feb 26</span>
      </Stack>

      {/* Mobile layout */}
      <Stack className="d-flex d-md-none align-items-center" gap={2}>
        <Stack direction="horizontal" className="justify-content-center" gap={3}>
          <span>Connect with me!</span>
          <a
            href="https://www.linkedin.com/in/plascenciasegura"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077b5" }}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:plascenciadan24@gmail.com"
            style={{ color: "#d14836" }}
          >
            <SiGmail size={20} />
          </a>
        </Stack>
        <span style={{ color: "#6c757d" }}>Updated 27 Feb 26</span>
      </Stack>
    </footer>
  );
}