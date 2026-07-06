import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage";
import ContactPage from "./pages/Contactpage";
import AboutPage from "./pages/Aboutpage";
import Navbar from "./components/Navbar";
import SkillsPage from "./pages/Skillspage";
import ProjectPage from "./pages/Projectpage";
import Projects from "./components/Projects";
import ScrollToTop from "./utility/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
