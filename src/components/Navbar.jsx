import "../styles/navbar.css";
import logo from "../assets/images/catalogs.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/Career">Careers</Link></li>
      </ul>
      <div>
      <Link to="/contact" className="contact-btn">
        Contact Us
      </Link>
    </div>
    </nav>
  );
}

export default Navbar;