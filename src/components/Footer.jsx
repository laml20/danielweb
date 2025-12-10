import React from "react";
import bkgd from "../media/home/background.png"; // Import the background image

export default function Footer() {
  return (
    <footer
      className="py-4 text-center"
      style={{
        backgroundImage: `url(${bkgd})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "1rem 0",
      }}
    >
      <hr />
      <nav style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem" }}>
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
        <span style={{ color: "#6c757d" }}>© Daniel LLC</span>
      </nav>
    </footer>
  );
}