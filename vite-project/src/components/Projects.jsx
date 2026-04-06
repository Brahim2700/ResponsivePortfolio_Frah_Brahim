// Projects.jsx
import React from "react";

function Projects({ language }) {
  const content = {
    en: {
      title: "Projects",
      intro:
        "Specialized web applications combining geomatics expertise with modern development. More projects coming soon.",
      cards: [
        {
          tag: "Live",
          title: "Survey Calculator Suite",
          description:
            "Professional toolset for surveyors including coordinate system conversions (Lambert93, WGS84, UTM), traverse calculations, area/volume computations, and bearing/distance calculations.",
          tech: "React • JavaScript • Geodesy • Surveying",
          link: "https://survey-calculator-suite.vercel.app/"
        },
        {
          tag: "Live",
          title: "Interactive WebGIS Dashboard",
          description:
            "Web-based GIS platform for visualizing and analyzing spatial data with interactive maps, layer management, data filtering, and real-time updates for infrastructure projects.",
          tech: "React • Leaflet • GeoJSON • MapBox",
          link: "https://gis-dash.vercel.app/"
        },
        {
          tag: "Live",
          title: "GNSS Data Processor",
          description:
            "Advanced tool for processing and visualizing GNSS/GPS survey data. Features include RINEX file support, satellite track visualization, position accuracy analysis, and quality control metrics.",
          tech: "React • Python • GNSS • Data Visualization",
          link: "https://gnss-data-processor.vercel.app/"
        }
      ]
    },
    fr: {
      title: "Projets",
      intro:
        "Applications web spécialisées combinant expertise en géomatique et développement moderne. D'autres projets arrivent bientôt.",
      cards: [
        {
          tag: "En ligne",
          title: "Survey Calculator Suite",
          description:
            "Suite d'outils professionnelle pour topographes incluant les conversions de systèmes de coordonnées (Lambert93, WGS84, UTM), les calculs de polygonales, de surfaces/volumes et de gisements/distances.",
          tech: "React • JavaScript • Géodésie • Topographie",
          link: "https://survey-calculator-suite.vercel.app/"
        },
        {
          tag: "En ligne",
          title: "Tableau de Bord WebGIS Interactif",
          description:
            "Plateforme SIG web pour visualiser et analyser des données spatiales avec cartes interactives, gestion de couches, filtres de données et mises à jour en temps réel pour les projets d'infrastructure.",
          tech: "React • Leaflet • GeoJSON • MapBox",
          link: "https://gis-dash.vercel.app/"
        },
        {
          tag: "En ligne",
          title: "Processeur de Données GNSS",
          description:
            "Outil avancé pour traiter et visualiser les données de levés GNSS/GPS. Fonctionnalités: support des fichiers RINEX, visualisation des trajectoires satellites, analyse de précision et indicateurs de contrôle qualité.",
          tech: "React • Python • GNSS • Data Visualization",
          link: "https://gnss-data-processor.vercel.app/"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="section" id="projects">
      <h2>{t.title}</h2>
      <p className="projects__intro">{t.intro}</p>
      
      <div className="projects-grid">
        {t.cards.map((card) => {
          if (card.link) {
            return (
              <a
                key={card.title}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card project-card--link"
              >
                <div className="project-tag">{card.tag}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="project-tech">{card.tech}</div>
              </a>
            );
          }

          return (
            <div className="project-card" key={card.title}>
              <div className="project-tag">{card.tag}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="project-tech">{card.tech}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
