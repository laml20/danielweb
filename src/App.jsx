import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import CurriculumVitae from "./pages/CurriculumVitae";
import Projects from "./pages/Projects";
import Creative from "./pages/Creative";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JournalDoodles from "./components/JournalDoodles";

// Project imports
import Sailboat from "./pages/projects/Sailboat";
import Vending from "./pages/projects/Vending";
import Foot from "./pages/projects/Foot";
import Glove from "./pages/projects/Glove";
import HandAssist from "./pages/projects/HandAssist";
import Roboduck from "./pages/projects/Roboduck";
import Prototyping from "./pages/projects/Prototyping";
import DCMotor from "./pages/projects/DCMotor";
import REV from "./pages/projects/REV";
import Workbooth from "./pages/projects/Workbooth";

// Style imports
import bkgd from "./media/home/background.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div
        style={{
          backgroundImage: `url(${bkgd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        <ScrollToTop />
        <JournalDoodles />
        <Header />
        <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CurriculumVitae />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/autonomous-sailboat-fleet" element={<Sailboat />} />
            <Route path="/projects/automated-capsule-vending-machine" element={<Vending />} />
            <Route path="/projects/vibrotactile-glove-for-parkinsons-disease" element={<Glove />} />
            <Route path="/projects/handwriting-assistive-device" element={<HandAssist />} />
            <Route path="/projects/sensory-feedback-for-smart-prosthetics" element={<Foot />} />
            <Route path="/projects/robo-duck" element={<Roboduck />} />
            <Route path="/projects/prototyping-fabrication" element={<Prototyping />} />
            <Route path="/projects/dc-motor" element={<DCMotor />} />
            <Route path="/projects/rev-aeroshell" element={<REV />} />
            <Route path="/projects/personal-work-booth" element={<Workbooth />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;