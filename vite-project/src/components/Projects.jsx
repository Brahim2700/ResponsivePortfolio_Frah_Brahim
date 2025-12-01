// Projects.jsx
import React from "react";

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <p className="projects__intro">
        Specialized web applications combining geomatics expertise with modern development. 
        More projects coming soon.
      </p>
      
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-tag">In Development</div>
          <h3>Survey Calculator Suite</h3>
          <p>
            Professional toolset for surveyors including coordinate system conversions 
            (Lambert93, WGS84, UTM), traverse calculations, area/volume computations, 
            and bearing/distance calculations.
          </p>
          <div className="project-tech">React • JavaScript • Geodesy • Surveying</div>
        </div>

        <div className="project-card">
          <div className="project-tag">In Development</div>
          <h3>Interactive WebGIS Dashboard</h3>
          <p>
            Web-based GIS platform for visualizing and analyzing spatial data with 
            interactive maps, layer management, data filtering, and real-time updates 
            for infrastructure projects.
          </p>
          <div className="project-tech">React • Leaflet • GeoJSON • MapBox</div>
        </div>

        <div className="project-card">
          <div className="project-tag">Planned</div>
          <h3>GNSS Data Processor</h3>
          <p>
            Advanced tool for processing and visualizing GNSS/GPS survey data. 
            Features include RINEX file support, satellite track visualization, 
            position accuracy analysis, and quality control metrics.
          </p>
          <div className="project-tech">React • Python • GNSS • Data Visualization</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
