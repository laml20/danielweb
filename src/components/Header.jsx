import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import bkgd from "../media/home/background.png"; // Import the background image

export default function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${bkgd})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Daniel Plascencia Segura
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cv">CV</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/creative">Creative</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}