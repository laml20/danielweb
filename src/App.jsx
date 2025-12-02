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
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        {/* Only this part changes when you switch routes */}
        <main className="content">
          <Routes>
            <Route path="/danielweb/" element={<Home />} />
            <Route path="/danielweb/resume" element={<Resume />} />
            <Route path="/danielweb/projects" element={<Projects />} />
            <Route path="/danielweb/projects/autonomous-sailboat-fleet" element={<Sailboat />} />
            <Route path="/danielweb/projects/automated-capsule-vending-machine" element={<Vending />} />
            <Route path="/danielweb/projects/vibrational-glove-for=parkinsons-disease" element={<Glove />} />
            <Route path="/danielweb/projects/handwriting-assistance-device" element={<HandAssist />} />
            <Route path="/danielweb/projects/sensory-feedback-for-smart-prosthetics" element={<Foot />} />
            <Route path="/danielweb/creative" element={<Creative />} />
            <Route path="/danielweb/about" element={<About />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
