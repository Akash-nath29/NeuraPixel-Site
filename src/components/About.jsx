import "./css/About.css";
import Growth from "./assets/growth.png";
import Technology from "./assets/project-management.png";
import rohit from "./assets/rohit.jpg";
import abhinaba from "./assets/abhinaba.jpg";
import akash from "./assets/akash.jpg";
import anwesha from "./assets/anwesha.jpg";
import adrijo from "./assets/adrijo.jpg";
import kartika from "./assets/kartika.jpg";

function About() {
  return (
    <div className="about">
      <h1>Who we are</h1>
      <p>
        NeuraPixel AI is at the forefront of medical imaging technology,
        specializing in AI-powered MRI denoising.
      </p>
      <div className="content">
        <div className="mission">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              To enhance the quality of medical imaging, enabling more accurate
              diagnoses and improving patient care worldwide.
            </p>
          </div>
          <img src={Growth} alt="Growth" />
        </div>
        <div className="technology">
          <img src={Technology} alt="Technology" />
          <div className="technology-text">
            <h2>Our Technology</h2>
            <p>
              We use advanced denoising autoencoders to clean noisy MRI scans,
              providing clearer and more detailed images for medical
              professionals.
            </p>
          </div>
        </div>
        <div className="meet-team">
          <h2>Meet the Team</h2>
          <p>
            Our team is made up of AI researchers, medical imaging experts, and
            software engineers who are passionate about using technology to
            improve healthcare.
          </p>
          <div className="team-members">
            {/* Abhinaba Biswas */}
            <div className="card">
              <img src={abhinaba} />
              <div className="card__content">
                <p className="card__title">Abhinaba Biswas</p>
                <p className="card__description">
                  AIML Enthusiast, ML developer, Aspiring ML Engineer.
                </p>
              </div>
            </div>
            {/* Akash Nath */}
            <div className="card">
              <img src={akash} alt="Akash Nath" />
              <div className="card__content">
                <p className="card__title">Akash Nath</p>
                <p className="card__description">
                  I train Deep Neural Networks, Build Backend and Web
                  Applications.
                </p>
              </div>
            </div>
            {/* Rohit Debnath */}
            <div className="card">
              <img src={rohit} alt="Rohit Debnath" />
              <div className="card__content">
                <p className="card__title">Rohit Debnath</p>
                <p className="card__description">
                  React Native and Web Developer with high interest on Ai and Ml
                </p>
              </div>
            </div>
            {/* Adrijo Bhowmik */}
            <div className="card">
              <img src={adrijo} alt="Adrijo Bhowmik" />
              <div className="card__content">
                <p className="card__title">Adrijo Bhowmik</p>
                <p className="card__description">
                  Web developer and with a keen interest in AI/ML
                </p>
              </div>
            </div>
            {/* Anwesha Das */}
            <div className="card">
              <img src={anwesha} alt="Anwesha Das" />
              <div className="card__content">
                <p className="card__title">Anwesha Das</p>
                <p className="card__description">
                  App oriented illustrator , and High interest in app
                  development
                </p>
              </div>
            </div>
            {/* Kartika Singh */}
            <div className="card">
              <img src={kartika} alt="Kartika Singh" />
              <div className="card__content">
                <p className="card__title">Kartika Singh</p>
                <p className="card__description">
                  I train Deep Neural Networks, Build Backend and Web
                  Applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
