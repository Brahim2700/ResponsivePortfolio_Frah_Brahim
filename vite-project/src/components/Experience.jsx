import React from "react";

function Experience() {
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>
      <ul className="timeline">
        <li>
          <div className="timeline__header">
            <h3>Specialist in Geopositioning Support – TOPCON Positioning Systems</h3>
            <span className="timeline__date">December 2025 - Present</span>
          </div>
          <p className="timeline__location">France</p>
          <p>
            Providing technical support and expertise in geopositioning systems, GNSS technology, 
            and precision positioning solutions. Assisting clients with system integration, 
            troubleshooting, and optimizing workflows for surveying and construction applications.
          </p>
        </li>

        <li>
          <div className="timeline__header">
            <h3>Technical Sales Consultant – CHCNAV | CHC Navigation</h3>
            <span className="timeline__date">February 2025 - July 2025</span>
          </div>
          <p className="timeline__location">France</p>
          <p>
            Technical and commercial support on survey, engineering, 3D scanning and marine
            solutions, including training, demos, and integration with client workflows.
            Represented CHCNAV at international trade shows and professional events.
          </p>
        </li>

        <li>
          <div className="timeline__header">
            <h3>Cartographer – SUEZ Circular Solutions</h3>
            <span className="timeline__date">September 2024 - November 2024</span>
          </div>
          <p className="timeline__location">St-Etienne, France</p>
          <p>
            Responsible for cartography and GIS data creation and updating of collection routes. 
            Analyzed and updated GIS databases using the SYGETRACK platform. 
            Implemented tools for route sizing using cartographic approaches.
          </p>
        </li>

        <li>
          <div className="timeline__header">
            <h3>GIS Analyst – SERFIM TIC</h3>
            <span className="timeline__date">July 2024 - August 2024</span>
          </div>
          <p className="timeline__location">Lyon, France</p>
          <p>
            Establishing GIS data platforms, identifying telecom & FTTH networks and planning
            fiber deployment using QGIS and NetGéo tools.
          </p>
        </li>

        

        <li>
          <div className="timeline__header">
            <h3>Cartographer / Draftsman – Groupement Berkine (Sonatrach OXY)</h3>
            <span className="timeline__date">May 2018 - January 2024</span>
          </div>
          <p className="timeline__location">Hassi Messaoud, Algeria</p>
          <p>
            Mapping oil & gas fields, facilities, pipelines and roads. Worked in collaboration 
            with geophysicists and geologists for reservoir studies and decision support.
            Created sub-surface maps and structural maps using ArcGIS.
          </p>
        </li>

        <li>
          <div className="timeline__header">
            <h3>Seismic Land Surveyor 3D – ENAGEO / SONATRACH</h3>
            <span className="timeline__date">January 2015 - May 2018</span>
          </div>
          <p className="timeline__location">HMD, Ouargla, Algeria</p>
          <p>
            Managing survey crews, GPS-based seismic profiles, QC of topographic data and
            geodetic network observations for 3D seismic acquisition. Administered GIS databases 
            with SQL and Python for spatial analysis.
          </p>
        </li>

        <li>
          <div className="timeline__header">
            <h3>Land Surveyor – ETRHB HADDAD</h3>
            <span className="timeline__date">July 2014 - January 2015</span>
          </div>
          <p className="timeline__location">Tiaret, Algeria</p>
          <p>
            Railway project RTT 240 km connecting 3 Wilaya (Relizane-Tiaret-Tissemsilt).
            Responsible for field survey data and QC, establishment of project axis, 
            surveying and stakeout of points.
          </p>
        </li>

        <li>
          <div className="timeline__header">
            <h3>Senior Land Surveyor – Astaldi Inc.</h3>
            <span className="timeline__date">May 2014 - July 2014</span>
          </div>
          <p className="timeline__location">Algeria</p>
          <p>
            Stakeout of points, boundary title surveys. Prepared initial sketches of areas 
            before excavation work. Computed area and volume calculations.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Experience;
