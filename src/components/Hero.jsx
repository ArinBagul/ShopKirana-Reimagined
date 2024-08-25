import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero">
      
      <div className="hero-bg-ctr">

        <div className="hero-heading">
          <h1>Empowering Retailers with</h1>
          <div className="head-cards">
            <span className="head-card-red">Technology</span>
            <span className="head-card-white">and</span>
            <span className="head-card-red brand-card">Brands</span>
          </div>
        </div>

        <div className="hero-cta-ctr">

          <div className="hero-social-ctr">
            <span>Connect with us</span>
            <div className="hero-social">
              <a href="https://www.instagram.com/kisankirana"><i className="bi bi-instagram" /></a>
              <a href="https://in.linkedin.com/company/shopkirana"><i className="bi bi-facebook" /></a>
              <a href="https://www.facebook.com/ShopKirana-110233949323823/"><i className="bi bi-linkedin" /></a>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact-section" className="p-btn">Get Started</a>
            <a href="#impact" className="s-btn">Explore More</a>
          </div>

        </div>


      </div>

    </section>
  );
}

export default Hero;
