// Education.jsx
import React from "react";

function Education() {
  return (
    <section className="section" id="education">
      <h2>Education</h2>
      
      <div className="education-grid">
        <div className="education-card">
          <div className="education-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
          </div>
          <h3>Master's Degree in Civil Engineering</h3>
          <p className="education-institution">Abdelhamid Ibn Badis University of Mostaganem</p>
          <p className="education-location">Algeria</p>
          <p className="education-details">Specialization: Civil Engineering Structures, Roads & Bridges</p>
          <p className="education-details">Cadre européen des certifications professionnelles (enic-naric): RNCP7.</p>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
          </div>
          <h3>Bachelor's Degree in Civil Engineering</h3>
          <p className="education-institution">Abdelhamid Ibn Badis University of Mostaganem</p>
          <p className="education-location">Algeria</p>
          <p className="education-details">Structural analysis, geotechnical engineering, and construction management</p>
          <p className="education-details">Cadre européen des certifications professionnelles (enic-naric): RNCP6.</p>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
          </div>
          <h3>Senior Technician in Geodetic Science and Topographic Survey Works</h3>
          <p className="education-institution">Algerian Space Agency (ASAL) - National Centre of Space Techniques</p>
          <p className="education-location">Algeria</p>
          <p className="education-details">Program covering land surveying, geodesy, photogrammetry, cartography, cadastre, GIS, and spatial positioning systems (GNSS).</p>
          <p className="education-details">Cadre européen des certifications professionnelles (enic-naric): RNCP5.</p>
        </div>
      </div>        


      {/* Professional Certifications */}
      <div className="certifications">
        <h3 className="certifications-title">Professional Certifications</h3>
        <div className="certifications-grid">
          
          {/* BIM Certification */}
          <a href="https://www.linkedin.com/learning/certificates/f7fdcfc95db7e7817aeb80888b7c35f5a4b0a3e81dd1847852ee83d09ef801d6" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🏗️</span>
            <span className="cert-title">BIM Fundamentals</span>
            <span className="cert-issuer">LinkedIn Learning • 2022</span>
          </a>

          {/* UML Database Modeling */}
          <a href="https://www.linkedin.com/learning/certificates/8a1852be28e98bc7a393a9f6104901f351b3d7ea564e5921f18c73124555deb1" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">💾</span>
            <span className="cert-title">UML Database Modeling</span>
            <span className="cert-issuer">LinkedIn Learning • 2022</span>
          </a>

          {/* Coordinate Systems & Projections */}
          <a href="https://www.geo.university/certificates/hzcsivngsg" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🌍</span>
            <span className="cert-title">Coordinate Systems & Projections</span>
            <span className="cert-issuer">GIS University • 2022</span>
          </a>

          {/* IELTS */}
          <a href="https://www.udemy.com/certificate/UC-d9f58819-9f30-4679-b23b-906459deffcc/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🎓</span>
            <span className="cert-title">IELTS Band 7+ Guide</span>
            <span className="cert-issuer">Udemy • 2021</span>
          </a>

          {/* IOSH Managing Safely */}
          <a href="#" 
             className="cert-link-badge cert-no-link">
            <span className="cert-icon">🛡️</span>
            <span className="cert-title">IOSH Managing Safely HSE</span>
            <span className="cert-issuer">IOSH • 2020 • ID: 728850</span>
          </a>

          {/* IOSH Working Safely */}
          <a href="#" 
             className="cert-link-badge cert-no-link">
            <span className="cert-icon">⚠️</span>
            <span className="cert-title">IOSH Working Safely HSE</span>
            <span className="cert-issuer">IOSH • 2020 • ID: WS616300</span>
          </a>

          {/* ArcGIS Essential Training */}
          <a href="https://www.linkedin.com/learning/certificates/e86d31a75d3d94e27b43a994f62c17304a274ff55e69f2d91a28966c807ea73a?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🗺️</span>
            <span className="cert-title">ArcGIS Essential Training</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* ArcGIS Pro */}
          <a href="https://www.linkedin.com/learning/certificates/8f465c9e4ee8ba12507652588a0cd74b1912f68748819b8e61b828460bcd3b97?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🌐</span>
            <span className="cert-title">ArcGIS Pro Essential Training</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* CorelDRAW */}
          <a href="https://www.linkedin.com/learning/certificates/a7d6cc48bc3219d1543897bdd08f28c3edad263efcd3a68f6031486d403723a9?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🎨</span>
            <span className="cert-title">CorelDRAW Essential Training</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* GIS on the Web */}
          <a href="https://www.linkedin.com/learning/certificates/138f3abdbee8391afbc3e468405715699d623527ea660149f426a7d7453097e8?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🌐</span>
            <span className="cert-title">GIS on the Web</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* Learning ArcGIS */}
          <a href="https://www.linkedin.com/learning/certificates/5179605c909bd76705f2921b7a55d2b984c41dac490feb01fe643a47d3691774?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">📊</span>
            <span className="cert-title">Learning ArcGIS</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* MapGuide Open Source */}
          <a href="https://www.linkedin.com/learning/certificates/a3a4098814999fa9bbbea24d768af193bb421d548cc4bbb079a58308de4ea55e?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🗂️</span>
            <span className="cert-title">MapGuide Open Source</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* Learning QGIS */}
          <a href="https://www.linkedin.com/learning/certificates/10b8ff5ef082b68178fcd4150853860434c64fd0430c3612808a6f4fb67fab0e?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🔧</span>
            <span className="cert-title">Learning QGIS</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* Master GIS for Data Science */}
          <a href="https://www.linkedin.com/learning/certificates/a00d72bcc9959bd60f73fbaa4c9e0d590a7a39c0976d063ad8243127adeb194a?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">📈</span>
            <span className="cert-title">Master GIS for Data Science</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* Real-World GIS */}
          <a href="https://www.linkedin.com/learning/certificates/e27ddb77c70f3a11a3b892d70b5ceab431d5e59b521865cefae92daf0cceb70c?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">🌎</span>
            <span className="cert-title">Real-World GIS</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

          {/* Power Map in Excel */}
          <a href="https://www.linkedin.com/learning/certificates/a7677d24325f9da3a85ed31f495b57ec17da012a33782d6518778876dd935ab8?trk=backfilled_certificate" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cert-link-badge">
            <span className="cert-icon">📊</span>
            <span className="cert-title">Geospatial Data with Power Map</span>
            <span className="cert-issuer">LinkedIn Learning • 2019</span>
          </a>

        </div>
      </div>

          {/* Safety & Training */}
      <div className="certifications">
        <h3 className="certifications-title">Safety & Other Training</h3>
        <div className="certifications-list">
          <span className="cert-badge">IOSH Managing Safely HSE</span>
          <span className="cert-badge">IOSH Working Safely HSE</span>
          <span className="cert-badge">Advanced First Aid Training</span>
          <span className="cert-badge">Basic First Aid Training</span>
          <span className="cert-badge">Defensive Driving Licence</span>
          <span className="cert-badge">Driving Licence Cat-B</span>
        </div>
      </div>




      {/* Languages subsection */}
      <div className="languages">
        <h3 className="languages-title">Languages</h3>
        <div className="languages-grid">          
          <div className="language-item">
            <span className="language-name">French</span>
            <span className="language-level">Full Professional</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">Full Professional</span>
          </div>
          <div className="language-item">
            <span className="language-name">Arabic</span>
            <span className="language-level">Native</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
