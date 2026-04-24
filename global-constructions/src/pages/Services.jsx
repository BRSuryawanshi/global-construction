import "../styles/services.css";

function Services() {
  return (
    <section className="services-page">

      {/* ================= HERO ================= */}
      <div className="services-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Construction Services & Crusher Solutions</h1>
          <p>
            Delivering civil construction works, crusher plant services, and high-quality construction materials
            with modern machinery and reliable execution across multiple locations.
          </p>
        </div>
      </div>

      <div className="container">

        {/* ================= SERVICES GRID ================= */}
        <section className="services-grid-section">

          <h2>Our Construction & Crusher Services</h2>

          <div className="services-grid">

            <div className="service-card">
              <h3>🏗️ Civil Works</h3>
              <p>
                We undertake all types of civil construction works including infrastructure,
                government, and large-scale building projects.
              </p>
            </div>

            <div className="service-card">
              <h3>🚆 Railway Works</h3>
              <p>
                Specialized in railway ballast supply, depot operations, and railway infrastructure construction.
              </p>
            </div>

            <div className="service-card">
              <h3>🪨 Stone Crusher Plants</h3>
              <p>
                High-capacity crusher plants producing 1000+ tons daily for roads, buildings, and infrastructure projects.
              </p>
            </div>

            <div className="service-card">
              <h3>🧱 Material Manufacturing</h3>
              <p>
                Production and supply of high-quality construction materials including aggregates, sand, and stone.
              </p>
            </div>

            <div className="service-card">
              <h3>🚚 Transport & Logistics</h3>
              <p>
                Strong transportation network ensuring fast, safe, and reliable delivery to construction sites.
              </p>
            </div>

            <div className="service-card">
              <h3>📦 Bulk & Custom Orders</h3>
              <p>
                Bulk supply and customized solutions for RMC plants, contractors, and large infrastructure projects.
              </p>
            </div>

          </div>
        </section>

        {/* ================= MATERIALS ================= */}
        <section className="materials">

          <h2>Construction Materials We Supply</h2>

          <div className="materials-grid">
            <div>06mm Stone Metal</div>
            <div>10mm Stone Metal</div>
            <div>20mm Stone Metal</div>
            <div>40mm Stone Metal</div>
            <div>60mm Stone Metal</div>
            <div>Railway Ballast</div>
            <div>GSB (Granular Sub Base)</div>
            <div>Artificial Sand</div>
            <div>Engineering Wash Sand</div>
          </div>

        </section>

        {/* ================= DETAILS ================= */}
        <section className="service-details">

          <div className="detail">
            <div className="detail-img">
              <img src="/images/gallery1.jpg" alt="high capacity crusher plant producing construction materials" />
            </div>
            <div className="detail-text">
              <h2>High Production Capacity</h2>
              <p>
                Our crusher plants are equipped with modern machinery capable of producing
                over <strong>1000+ tons per day per plant</strong>, ensuring continuous
                supply for large-scale construction and infrastructure projects.
              </p>
            </div>
          </div>

          <div className="detail reverse">
            <div className="detail-img">
              <img src="/images/gallery2.jpg" alt="construction material transport trucks and logistics" />
            </div>
            <div className="detail-text">
              <h2>Transport & Delivery</h2>
              <p>
                With a fleet of dumpers, tippers, and loaders, we provide fast,
                safe, and reliable delivery of construction materials directly to your site.
              </p>
            </div>
          </div>

        </section>

        {/* ================= WHY US ================= */}
        <section className="why-services">

          <h2>Why Choose Our Construction Services</h2>

          <div className="why-grid">
            <div>✔ High Production Capacity</div>
            <div>✔ Modern Machinery & Equipment</div>
            <div>✔ Reliable Transport Network</div>
            <div>✔ Trusted for Infrastructure Projects</div>
            <div>✔ Quality Construction Materials</div>
            <div>✔ Competitive Pricing</div>
          </div>

        </section>

        {/* ================= AREAS ================= */}
        <section className="areas">

          <h2>Areas We Serve</h2>

          <div className="areas-grid">
            <div className="area-card">📍 Nashik</div>
            <div className="area-card">📍 Malegaon</div>
            <div className="area-card">📍 Dhule</div>
            <div className="area-card">📍 Shirpur</div>
            <div className="area-card">📍 Thane</div>
            <div className="area-card">📍 Jalgaon</div>
          </div>

        </section>

        {/* ================= PRICING ================= */}
        <section className="pricing-note">

          <h2>Pricing & Quotes</h2>

          <p>
            Pricing depends on location, transportation, and applicable royalties.
            Contact us for a customized quote for construction materials and crusher services.
          </p>

        </section>

        {/* ================= CTA ================= */}
        <section className="services-cta">

          <h2>Need Construction Materials or Crusher Services?</h2>

          <div className="cta-buttons">
            <a href="tel:+918087132879" className="btn">
              Call Now
            </a>

            <a
              href="https://wa.me/918087132879?text=Hi%20I%20visited%20your%20website%20and%20I%20need%20a%20quote%20for%20construction%20materials%20or%20crusher%20services."
              className="btn outline"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

        </section>

      </div>
    </section>
  );
}

export default Services;