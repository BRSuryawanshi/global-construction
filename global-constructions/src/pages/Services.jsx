import "../styles/services.css";

function Services() {
  return (
    <section className="services-page">

      {/* ================= HERO ================= */}
      <div className="services-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>
            Delivering all types of civil construction works with high-quality materials,
            modern machinery, and reliable execution across multiple regions.
          </p>
        </div>
      </div>

      <div className="container">

        {/* ================= SERVICES GRID ================= */}
        <section className="services-grid-section">

          <h2>What We Offer</h2>

          <div className="services-grid">

            <div className="service-card">
              <h3>🏗️ Civil Works</h3>
              <p>
                We undertake all types of civil construction works including infrastructure,
                government, and large-scale projects.
              </p>
            </div>

            <div className="service-card">
              <h3>🚆 Railway Works</h3>
              <p>
                Specialized in railway ballast depot operations and railway construction works.
              </p>
            </div>

            <div className="service-card">
              <h3>🪨 Stone Crusher Plants</h3>
              <p>
                High-capacity crusher plants with daily production exceeding 1000+ tons per plant.
              </p>
            </div>

            <div className="service-card">
              <h3>🧱 Material Manufacturing</h3>
              <p>
                Production and supply of high-quality construction materials for strong foundations.
              </p>
            </div>

            <div className="service-card">
              <h3>🚚 Transport & Logistics</h3>
              <p>
                Efficient transportation network ensuring fast and reliable delivery to project sites.
              </p>
            </div>

            <div className="service-card">
              <h3>📦 Bulk & Custom Orders</h3>
              <p>
                We handle bulk orders and customized requirements for RMC plants and project works.
              </p>
            </div>

          </div>
        </section>

        {/* ================= MATERIALS ================= */}
        <section className="materials">

          <h2>Materials We Supply</h2>

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
              <img src="/images/gallery1.jpg" alt="" />
            </div>
            <div className="detail-text">
              <h2>High Production Capacity</h2>
              <p>
                Our crusher plants are equipped with modern machinery capable of producing
                over <strong>1000+ tons per day per plant</strong>, ensuring continuous
                supply for large-scale construction projects.
              </p>
            </div>
          </div>

          <div className="detail reverse">
            <div className="detail-img">
              <img src="/images/gallery2.jpg" alt="" />
            </div>
            <div className="detail-text">
              <h2>Transport & Delivery</h2>
              <p>
                With a fleet of dumpers, tippers, and loaders, we provide fast,
                safe, and reliable delivery directly to your construction site.
              </p>
            </div>
          </div>

        </section>

        {/* ================= WHY US ================= */}
        <section className="why-services">

          <h2>Why Choose Our Services</h2>

          <div className="why-grid">
            <div>✔ High Production Capacity</div>
            <div>✔ Modern Machinery & Equipment</div>
            <div>✔ Reliable Transport Network</div>
            <div>✔ Trusted for Project Works</div>
            <div>✔ Quality First Approach</div>
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

          <h2>Pricing</h2>

          <p>
            Pricing depends on location, transportation, and applicable royalties.
            Contact us for a customized quote based on your project requirements.
          </p>

        </section>

        {/* ================= CTA ================= */}
        <section className="services-cta">

          <h2>Need Reliable Construction Services?</h2>

          <div className="cta-buttons">
            <a href="tel:+918087132879" className="btn">
              Call Now
            </a>

            <a
              href="https://wa.me/918087132879"
              className="btn outline"
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