// Skills.jsx
import React from "react";

function Skills({ language }) {
  const content = {
    en: {
      title: "Skills",
      items: [
        {
          title: "GIS & Mapping",
          description: "ArcGIS, ArcGIS Pro, QGIS, Global Mapper, Geographic Calculator, MapInfo."
        },
        {
          title: "CAD/CAO & BIM",
          description: "AutoCAD, Civil 3D, COVADIS, REVIT."
        },
        {
          title: "Survey & GNSS",
          description:
            "Topcon, Trimble, Leica, CHCNav GNSS, total stations, levels, 3D scanners, UAV, bathymetry."
        },
        {
          title: "Programming & Data",
          description: "Python, MATLAB, PostgreSQL, SQL, geospatial data processing."
        },
        {
          title: "Sales & Business Development",
          description:
            "Technical sales, product demos, distributor network management, trade shows, client consulting."
        },
        {
          title: "Technical Support",
          description:
            "Pre/post-sales support, system integration, training, troubleshooting, remote assistance, R&D liaison."
        }
      ]
    },
    fr: {
      title: "Compétences",
      items: [
        {
          title: "SIG et Cartographie",
          description: "ArcGIS, ArcGIS Pro, QGIS, Global Mapper, Geographic Calculator, MapInfo."
        },
        {
          title: "CAO & BIM",
          description: "AutoCAD, Civil 3D, COVADIS, REVIT."
        },
        {
          title: "Topographie et GNSS",
          description:
            "Topcon, Trimble, Leica, CHCNav GNSS, stations totales, niveaux, scanners 3D, UAV, bathymétrie."
        },
        {
          title: "Programmation & Données",
          description: "Python, MATLAB, PostgreSQL, SQL, traitement de données géospatiales."
        },
        {
          title: "Vente et Développement Commercial",
          description:
            "Vente technique, démonstrations produit, gestion du réseau de distributeurs, salons professionnels et conseil client."
        },
        {
          title: "Support Technique",
          description:
            "Support avant/après-vente, intégration système, formation, dépannage, assistance à distance et liaison R&D."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="section" id="skills">
      <h2>{t.title}</h2>
      <div className="skills-grid">
        {t.items.map((item) => (
          <div key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
