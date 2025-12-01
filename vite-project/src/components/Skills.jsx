// Skills.jsx
import React from "react";

function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div>
          <h4>GIS &amp; Mapping</h4>
          <p>ArcGIS, ArcGIS Pro, QGIS, Global Mapper, Geographic Calculator, MapInfo.</p>
        </div>
        <div>
          <h4>CAD/CAO &amp; BIM</h4>
          <p>AutoCAD, Civil 3D, COVADIS, REVIT.</p>
        </div>
        <div>
          <h4>Survey &amp; GNSS</h4>
          <p>
            Topcon, Trimble, Leica, CHCNav GNSS, total stations, levels, 3D scanners, UAV, bathymetry.
          </p>
        </div>
        <div>
          <h4>Programming &amp; Data</h4>
          <p>Python, MATLAB, PostgreSQL, SQL, geospatial data processing.</p>
        </div>
        <div>
          <h4>Sales &amp; Business Development</h4>
          <p>Technical sales, product demos, distributor network management, trade shows, client consulting.</p>
        </div>
        <div>
          <h4>Technical Support</h4>
          <p>Pre/post-sales support, system integration, training, troubleshooting, remote assistance, R&amp;D liaison.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
