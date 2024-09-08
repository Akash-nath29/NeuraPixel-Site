import { Link } from "react-router-dom";
import "./css/Home.css";

function Home() {
  return (
    <div className="home">
      <span>
        <h1>NeuraPixel AI</h1>
        <p>Advanced AI-powered MRI denoising tool</p>
        <div className="cta-buttons">
          <Link to="/download" className="cta-button">
            Download App
          </Link>
          <Link to="/api-docs" className="cta-button">
            API Documentation
          </Link>
        </div>
      </span>
    </div>
  );
}

export default Home;
