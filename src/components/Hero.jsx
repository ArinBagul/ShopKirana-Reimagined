import "../styles/Hero.css";
import heroImage from "../assets/videos/videorelay.webp";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-ctr-top">
        <div className="h-c1">
          <div className="hero-txt">
            <h1>Empowering</h1>
            <h1>Retailers with</h1>
            <h1>
              <span className="h-emph-txt">Technology</span>
            </h1>
            <h1>
              and <span className="h-emph-txt">Brands</span>
            </h1>
          </div>
        </div>
        <div className="h-c2">
          <div className="h-vid-ctr">
            <img src={heroImage} alt="Loading..." />
          </div>
        </div>
      </div>
      <div className="hero-ctr-bottom">
        <div className="ht-c1">
          <div className="social">
            <a href="#">
              <i className="fi fi-brands-instagram"></i>
            </a>
            <a href="#">
              <i className="fi fi-brands-facebook"></i>
            </a>
            <a href="#">
              <i className="fi fi-brands-twitter"></i>
            </a>
          </div>

          <div className="hero-cta">
            <a href="#" className="p-btn">
              Connect with us
            </a>
            <a href="#" className="s-btn">
              Explore more
            </a>
          </div>
        </div>
        <div className="ht-c2">
          <div className="ht-txt-ctr">
            <h1>Start your</h1>
            <h1>
              <em>Business</em> from
            </h1>
            <h1>Anywhere</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
