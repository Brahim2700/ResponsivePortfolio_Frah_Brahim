// About.jsx
import React from "react";

function About({ language }) {
  const content = {
    en: {
      title: "About",
      description:
        "Geomatics and civil engineer with a strong background in land surveying, GIS, and civil works, skilled in ArcGIS, QGIS, AutoCAD, GNSS, and 3D reality-capture surveying with machine-control expertise. Experienced in data analysis, mapping, and technical support for complex geospatial projects."
    },
    fr: {
      title: "À propos",
      description:
        "Ingénieur en géomatique et en génie civil avec une solide expérience en topographie, SIG et travaux publics, maîtrisant ArcGIS, QGIS, AutoCAD, le GNSS, les levés 3D de capture de la réalité et les solutions de machine control. Expérimenté en analyse de données, cartographie et support technique sur des projets géospatiaux complexes."
    }
  };

  const t = content[language];

  return (
    <section className="section section--center" id="about">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
    </section>
  );
}

export default About;
