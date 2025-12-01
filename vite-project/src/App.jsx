import React from "react";
import "./App.css";
import BackToTop from './components/BackToTop';

// Import all sections as components.
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import FadeInSection from "./components/FadeInSection.jsx";

function App() {
  return (
    <div className="app">
      <Hero />
      <Navbar />

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Experience />
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>

      <FadeInSection>
        <Education />
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Frah Brahim · Geomatics &amp; Civil Engineer</p>
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;