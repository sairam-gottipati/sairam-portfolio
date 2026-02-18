import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import ProfessionalExperience from "./components/experience/ProfessionalExperience";
import Contact from "./components/footer/Contact";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <ProfessionalExperience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;