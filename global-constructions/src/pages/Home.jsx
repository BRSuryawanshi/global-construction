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
            Global Construction provides reliable crusher services, stone supply,
            and high-quality construction materials for roads, buildings, and infrastructure projects.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
            <a href="tel:+918087132879" className="btn primary">
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918087132879?text=Hi%20I%20visited%20your%20Global%20Construction%20website%20and%20I%20want%20a%20quote%20for%20crusher%20services%20and%20construction%20materials."
              target="_blank"
              rel="noreferrer"
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

          <h2 className="section-title" data-aos="fade-up">
            Construction Services & Materials
          </h2>

          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            We provide crusher plant services, stone supply, and construction materials for all types of construction projects.
          </p>

          <div className="services-grid">

            <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon">🏗️</div>
              <h3>Crusher Services</h3>
              <p>High-capacity stone crushing solutions for roads, buildings, and infrastructure projects.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon">🪨</div>
              <h3>Construction Materials</h3>
              <p>Premium quality stones, sand, aggregates, and building materials for strong foundations.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon">🚚</div>
              <h3>Transport & Delivery</h3>
              <p>Fast and reliable delivery of construction materials directly to your site.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon">📦</div>
              <h3>Custom Orders</h3>
              <p>Bulk orders tailored to your construction and infrastructure requirements.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="500">
              <div className="icon">🚆</div>
              <h3>Railway Construction Works</h3>
              <p>Specialized in railway ballast supply and large-scale infrastructure development projects.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="600">
              <div className="icon">🏢</div>
              <h3>Civil Construction</h3>
              <p>Complete civil construction including roads, buildings, and infrastructure projects.</p>
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
            Why Choose Global Construction
          </h2>

          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Trusted construction company delivering quality materials, timely service, and reliable solutions.
          </p>

          <div className="why-grid">

            <div className="why-card" data-aos="fade-up" data-aos-delay="100">
              <div className="why-icon">✅</div>
              <h3>High Quality Materials</h3>
              <p>We provide premium-grade stones and construction materials for all projects.</p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="200">
              <div className="why-icon">⏱️</div>
              <h3>On-Time Delivery</h3>
              <p>We ensure timely delivery to keep your construction projects on schedule.</p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="300">
              <div className="why-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Best market rates without compromising on quality and service.</p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="400">
              <div className="why-icon">🤝</div>
              <h3>Trusted Service</h3>
              <p>Trusted by contractors, builders, and infrastructure companies.</p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="500">
              <div className="why-icon">🏭</div>
              <h3>High Production Capacity</h3>
              <p>Advanced crusher plants delivering high-volume production daily.</p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="600">
              <div className="why-icon">🚛</div>
              <h3>Strong Logistics Network</h3>
              <p>Own fleet ensures fast and reliable transportation of materials.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="products">
        <div className="container">

          <h2 className="section-title" data-aos="fade-up">
            Construction Materials & Products
          </h2>

          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            We supply a wide range of high-quality construction materials including stones, sand, and aggregates.
          </p>

          <div className="products-grid">

            <div className="product-card" data-aos="zoom-in" data-aos-delay="100">
              <img src="/images/product1.jpg" alt="20mm stone used in construction and road projects" />
              <h3>20mm Stone</h3>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="200">
              <img src="/images/product2.jpg" alt="40mm stone for heavy construction work" />
              <h3>40mm Stone</h3>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="300">
              <img src="/images/product3.jpg" alt="crusher dust for building and construction use" />
              <h3>Crusher Dust</h3>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="400">
              <img src="/images/product4.jpg" alt="sand for construction and building materials" />
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