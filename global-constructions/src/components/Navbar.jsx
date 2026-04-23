import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../../public/images/logo.png"; // add your logo here

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu on click (important for mobile)
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src={logo} alt="Global Constructions" />
          Global<span> Constructions</span>
        </Link>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={handleLinkClick} className={isActive("/") ? "active" : ""}>Home</Link>
          <Link to="/services" onClick={handleLinkClick} className={isActive("/services") ? "active" : ""}>Services</Link>
          <Link to="/products" onClick={handleLinkClick} className={isActive("/products") ? "active" : ""}>Products</Link>
          <Link to="/gallery" onClick={handleLinkClick} className={isActive("/gallery") ? "active" : ""}>Gallery</Link>
          <Link to="/about" onClick={handleLinkClick} className={isActive("/about") ? "active" : ""}>About Us</Link>
          <Link to="/contact" onClick={handleLinkClick} className={isActive("/contact") ? "active" : ""}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Navbar;