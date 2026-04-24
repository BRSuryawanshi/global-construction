import { Link } from "react-router-dom";
import "../styles/components.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* ================= COMPANY INFO ================= */}
        <div className="footer-section">
          <h2>
            Global <span>Constructions</span>
          </h2>

          <p>
            Providing high-quality construction materials and crusher services.
            Trusted by contractors and builders across the region.
          </p>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/918087132879?text=Hi%20I%20am%20interested%20in%20your%20construction%20services"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>📞 +91 8087132879</p>
          <p>📍 Nashik, Maharashtra</p>
          <p>✉️ email@example.com</p>

          <a href="tel:+91 8087132879" className="footer-btn call">
            📞 Call Now
          </a>
        </div>

        {/* ================= MAP ================= */}
        <div className="footer-section">
          <h3>Our Location</h3>

          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="160"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom">
        <p>
          © 2026 <b>Global Constructions</b> | Built with quality & trust
        </p>

        <a href="#top" className="back-to-top">
          ↑ Top
        </a>
      </div>

    </footer>
  );
}

export default Footer;