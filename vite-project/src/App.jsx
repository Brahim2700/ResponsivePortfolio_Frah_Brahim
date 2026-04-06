import React, { useEffect, useState } from "react";
import "./App.css";
import BackToTop from './components/BackToTop';
import { SpeedInsights } from "@vercel/speed-insights/react";

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
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage === "fr" || savedLanguage === "en") {
      return savedLanguage;
    }

    const browserLanguage = navigator.language?.toLowerCase() || "en";
    return browserLanguage.startsWith("fr") ? "fr" : "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "fr" : "en"));
  };

  const footerText =
    language === "fr"
      ? "Géomatique & Ingénieur Génie Civil"
      : "Geomatics & Civil Engineer";

  return (
    <div className="app">
      <Hero language={language} />
      <Navbar language={language} onToggleLanguage={toggleLanguage} />

      <FadeInSection>
        <About language={language} />
      </FadeInSection>

      <FadeInSection>
        <Experience language={language} />
      </FadeInSection>

      <FadeInSection>
        <Skills language={language} />
      </FadeInSection>

      <FadeInSection>
        <Education language={language} />
      </FadeInSection>

      <FadeInSection>
        <Projects language={language} />
      </FadeInSection>

      <FadeInSection>
        <Contact language={language} />
      </FadeInSection>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Frah Brahim · {footerText}
        </p>
      </footer>

      <BackToTop />
      <SpeedInsights />
    </div>
  );
}

export default App;