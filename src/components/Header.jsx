import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import paperTexture from "../media/home/paper_texture_tile.jpeg";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (expanded && navbarRef.current && !navbarRef.current.contains(e.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  return (
    <>
    <style>{`
      .header-nav .nav-link {
        color: #213547;
      }
      .header-nav .nav-link:hover {
        color: #c1440e !important;
      }
      .header-brand:hover {
        color: #8e3207 !important;
      }
      .navbar-toggler {
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
      }
      .navbar-toggler:focus {
        box-shadow: none !important;
        outline: none !important;
      }
      @media (max-width: 991px) {
        .header-nav {
          text-align: center;
        }
        .header-brand {
          padding-left: 1rem;
          font-size: 18px !important;
          white-space: nowrap;
        }
      }
    `}</style>
    <Navbar
      ref={navbarRef}
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
      }}
    >
      <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="fw-bold header-brand">
          Daniel Plascencia Segura
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header-nav">
            <Nav.Link as={Link} to="/cv" onClick={() => setExpanded(false)}>CV</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/creative" onClick={() => setExpanded(false)}>Creative</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}