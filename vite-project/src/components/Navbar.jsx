// Navbar.jsx
import React from "react";

function Navbar({ language, onToggleLanguage }) {
  const labels = {
    en: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
      aria: "Switch language to French"
    },
    fr: {
      home: "Accueil",
      about: "A propos",
      experience: "Experience",
      skills: "Competences",
      education: "Formation",
      projects: "Projets",
      contact: "Contact",
      aria: "Passer la langue en anglais"
    }
  };

  const t = labels[language];

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <a href="#home">{t.home}</a>
        <a href="#about">{t.about}</a>
        <a href="#experience">{t.experience}</a>
        <a href="#skills">{t.skills}</a>
        <a href="#education">{t.education}</a>
        <a href="#projects">{t.projects}</a>
        <a href="#contact">{t.contact}</a>
      </div>

      <button
        type="button"
        className="language-toggle"
        onClick={onToggleLanguage}
        aria-label={t.aria}
      >
        <span className={language === "en" ? "is-active" : ""}>EN</span>
        <span>/</span>
        <span className={language === "fr" ? "is-active" : ""}>FR</span>
      </button>
    </nav>
  );
}

export default Navbar;
