import { Link } from "react-router-dom";
import "./css/Header.css";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <span>
        <div className="logo"><Link to="/">NeuraPixel AI</Link></div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </span>
      <nav>
        <ul className={isMenuOpen ? 'open' : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/download">Download</Link>
          </li>
          <li>
            <Link to="/api-docs">API Docs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
