import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Creative from "./pages/Creative";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sailboat from "./projects/Sailboat";
import Vending from "./projects/Vending";
import Foot from "./projects/Foot";
import Glove from "./projects/Glove";
import HandAssist from "./projects/HandAssist";
import bkgd from "./media/home/background.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router basename="/danielweb">
      <div
        className="app"
        style={{
          backgroundImage: `url(${bkgd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/autonomous-sailboat-fleet" element={<Sailboat />} />
            <Route path="/projects/automated-capsule-vending-machine" element={<Vending />} />
            <Route path="/projects/vibrational-glove-for=parkinsons-disease" element={<Glove />} />
            <Route path="/projects/handwriting-assistance-device" element={<HandAssist />} />
            <Route path="/projects/sensory-feedback-for-smart-prosthetics" element={<Foot />} />
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