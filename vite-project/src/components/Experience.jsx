import React from "react";

function Experience({ language }) {
  const content = {
    en: {
      title: "Experience",
      jobs: [
        {
          role: "Specialist in Geopositioning Support - TOPCON Positioning Systems",
          date: "December 2025 - Present",
          location: "France",
          description:
            "Providing technical support and expertise in geopositioning systems, GNSS technology, precision positioning solutions, and Machine Control workflows. Assisting clients with system integration, troubleshooting, and optimization for surveying and construction applications."
        },
        {
          role: "Technical Sales Consultant - CHCNAV | CHC Navigation",
          date: "February 2025 - July 2025",
          location: "France",
          description:
            "Technical and commercial support on survey, engineering, 3D scanning and marine solutions, including training, demos, and integration with client workflows. Represented CHCNAV at international trade shows and professional events."
        },
        {
          role: "Cartographer - SUEZ Circular Solutions",
          date: "September 2024 - November 2024",
          location: "St-Etienne, France",
          description:
            "Responsible for cartography and GIS data creation and updating of collection routes. Analyzed and updated GIS databases using the SYGETRACK platform. Implemented tools for route sizing using cartographic approaches."
        },
        {
          role: "GIS Analyst - SERFIM TIC",
          date: "July 2024 - August 2024",
          location: "Lyon, France",
          description:
            "Establishing GIS data platforms, identifying telecom & FTTH networks and planning fiber deployment using QGIS and NetGeo tools."
        },
        {
          role: "Cartographer / Draftsman - Groupement Berkine (Sonatrach OXY)",
          date: "May 2018 - January 2024",
          location: "Hassi Messaoud, Algeria",
          description:
            "Mapping oil & gas fields, facilities, pipelines and roads. Worked in collaboration with geophysicists and geologists for reservoir studies and decision support. Created sub-surface maps and structural maps using ArcGIS."
        },
        {
          role: "Seismic Land Surveyor 3D - ENAGEO / SONATRACH",
          date: "January 2015 - May 2018",
          location: "HMD, Ouargla, Algeria",
          description:
            "Managing survey crews, GPS-based seismic profiles, QC of topographic data and geodetic network observations for 3D seismic acquisition. Administered GIS databases with SQL and Python for spatial analysis."
        },
        {
          role: "Land Surveyor - ETRHB HADDAD",
          date: "July 2014 - January 2015",
          location: "Tiaret, Algeria",
          description:
            "Railway project RTT 240 km connecting 3 Wilaya (Relizane-Tiaret-Tissemsilt). Responsible for field survey data and QC, establishment of project axis, surveying and stakeout of points."
        },
        {
          role: "Senior Land Surveyor - Astaldi Inc.",
          date: "May 2014 - July 2014",
          location: "Algeria",
          description:
            "Stakeout of points, boundary title surveys. Prepared initial sketches of areas before excavation work. Computed area and volume calculations."
        }
      ]
    },
    fr: {
      title: "Experience",
      jobs: [
        {
          role: "Spécialiste Support Géopositionnement - TOPCON Positioning Systems",
          date: "Décembre 2025 - Aujourd'hui",
          location: "France",
          description:
            "Support technique et expertise sur les systèmes de géopositionnement, la technologie GNSS, les solutions de positionnement de précision et les workflows Machine Control. Accompagnement des clients pour l'intégration système, le dépannage et l'optimisation des workflows topographie/construction."
        },
        {
          role: "Consultant technico-commercial - CHCNAV | CHC Navigation",
          date: "Février 2025 - Juillet 2025",
          location: "France",
          description:
            "Support technique et commercial sur les solutions de topographie, d'ingénierie, de scan 3D et marines, avec formations, démonstrations et intégration chez les clients. Représentation de CHCNAV lors de salons internationaux et d'événements professionnels."
        },
        {
          role: "Cartographe - SUEZ Circular Solutions",
          date: "Septembre 2024 - Novembre 2024",
          location: "St-Etienne, France",
          description:
            "Responsable de la cartographie et de la création/mise à jour des données SIG pour les tournées de collecte. Analyse et mise à jour des bases via la plateforme SYGETRACK. Mise en place d'outils de dimensionnement des tournées."
        },
        {
          role: "Analyste SIG - SERFIM TIC",
          date: "Juillet 2024 - Août 2024",
          location: "Lyon, France",
          description:
            "Mise en place de plateformes de données SIG, identification des réseaux télécom & FTTH et planification du déploiement fibre avec QGIS et NetGéo."
        },
        {
          role: "Cartographe / Dessinateur - Groupement Berkine (Sonatrach OXY)",
          date: "Mai 2018 - Janvier 2024",
          location: "Hassi Messaoud, Algérie",
          description:
            "Cartographie des champs oil & gas, installations, pipelines et routes. Collaboration avec géophysiciens et géologues pour les études de réservoirs et l'aide à la décision. Production de cartes structurales et sous-surface avec ArcGIS."
        },
        {
          role: "Géomètre sismique 3D - ENAGEO / SONATRACH",
          date: "Janvier 2015 - Mai 2018",
          location: "HMD, Ouargla, Algérie",
          description:
            "Gestion des équipes terrain, profils sismiques GPS, contrôle qualité des données topographiques et observations géodésiques pour l'acquisition sismique 3D. Administration de bases SIG avec SQL et Python pour l'analyse spatiale."
        },
        {
          role: "Géomètre topographe - ETRHB HADDAD",
          date: "Juillet 2014 - Janvier 2015",
          location: "Tiaret, Algérie",
          description:
            "Projet ferroviaire RTT 240 km reliant 3 wilayas (Relizane-Tiaret-Tissemsilt). Responsable des données terrain et du contrôle qualité, implantation de l'axe projet, levés topographiques et piquetage."
        },
        {
          role: "Géomètre topographe senior - Astaldi Inc.",
          date: "Mai 2014 - Juillet 2014",
          location: "Algérie",
          description:
            "Implantation de points et relevés de limites foncières. Réalisation des esquisses initiales avant terrassement. Calcul des surfaces et volumes."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="section" id="experience">
      <h2>{t.title}</h2>
      <ul className="timeline">
        {t.jobs.map((job) => (
          <li key={`${job.role}-${job.date}`}>
            <div className="timeline__header">
              <h3>{job.role}</h3>
              <span className="timeline__date">{job.date}</span>
            </div>
            <p className="timeline__location">{job.location}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
