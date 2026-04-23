import "../styles/home.css";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content" data-aos="fade-up">

          <h1 data-aos="fade-up" data-aos-delay="100">
            Strong Foundations <br />
            Start With Quality Materials
          </h1>

          <p data-aos="fade-up" data-aos-delay="200">
            We provide reliable crusher services and high-quality stone (khadi)
            for all your construction needs.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
            <a href="tel:+918087132879" className="btn primary">
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918087132879?text=Hello%20I%20want%20construction%20materials"
              className="btn secondary"
            >
              💬 WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services">
        <div className="container">

          <h2 className="section-title" data-aos="fade-up">Our Services</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            We provide reliable construction services and high-quality materials for every project.
          </p>

          <div className="services-grid">

            <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon">🏗️</div>
              <h3>Crusher Services</h3>
              <p>High-capacity stone crushing solutions for construction projects.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon">🪨</div>
              <h3>Construction Materials</h3>
              <p>Premium quality stones, sand, and aggregates for strong foundations.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon">🚚</div>
              <h3>Transport & Delivery</h3>
              <p>Fast and reliable delivery of materials directly to your site.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon">📦</div>
              <h3>Custom Orders</h3>
              <p>Bulk orders tailored to your construction requirements.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="500">
              <div className="icon">🚆</div>
              <h3>Railway Construction Works</h3>
              <p>Specialized in railway ballast supply and infrastructure development projects.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="600">
              <div className="icon">🏢</div>
              <h3>Civil Construction</h3>
              <p>Complete civil works including roads, buildings, and infrastructure projects.</p>
            </div>

          </div>
          <div className="view-btn-wrapper">
            <a href="/services" className="view-btn">
              View All Services →
            </a>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why">
        <div className="container">

          <h2 className="section-title" data-aos="fade-up">
            Why Choose Us
          </h2>

          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            We deliver quality, reliability, and trust in every project we handle.
          </p>

          <div className="why-grid">

            <div className="why-card" data-aos="fade-up" data-aos-delay="100">
              <div className="why-icon">✅</div>
              <h3>High Quality Materials</h3>
              <p>We provide premium-grade stones and construction materials.</p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="200">
              <div className="why-icon">⏱️</div>
              <h3>On-Time Delivery</h3>
              <p>We ensure timely delivery to keep your project on schedule.</p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="300">
              <div className="why-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Best market rates without compromising on quality.</p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="400">
              <div className="why-icon">🤝</div>
              <h3>Trusted Service</h3>
              <p>Trusted by contractors and builders for reliable service.</p>
            </div>

            {/* NEW 5th */}
            <div className="why-card" data-aos="fade-up" data-aos-delay="500">
              <div className="why-icon">🏭</div>
              <h3>High Production Capacity</h3>
              <p>Equipped with advanced crusher plants delivering 1000+ tons daily output.</p>
            </div>

            {/* NEW 6th */}
            <div className="why-card" data-aos="fade-up" data-aos-delay="600">
              <div className="why-icon">🚛</div>
              <h3>Strong Logistics Network</h3>
              <p>Own fleet of trucks and machinery ensures fast and reliable transportation.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="products">
        <div className="container">

          <h2 className="section-title" data-aos="fade-up">Our Products</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            We supply a wide range of high-quality construction materials.
          </p>

          <div className="products-grid">

            <div className="product-card" data-aos="zoom-in" data-aos-delay="100">
              <img src="/images/product1.jpg" alt="20mm Stone" />
              <h3>20mm Stone</h3>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="200">
              <img src="/images/product2.jpg" alt="40mm Stone" />
              <h3>40mm Stone</h3>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="300">
              <img src="/images/product3.jpg" alt="Crusher Dust" />
              <h3>Crusher Dust</h3>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="400">
              <img src="/images/product4.jpg" alt="Sand" />
              <h3>Sand</h3>
            </div>

          </div>

          <div className="center-btn" data-aos="fade-up" data-aos-delay="200">
            <a href="/products" className="view-btn">
              View All Products →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;