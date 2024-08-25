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

          <div className="social-ctr">
            <span>Connect with us</span>
            <div className="social">
              <a href="#"><i className="fi fi-brands-instagram"></i></a>
              <a href="#"><i className="fi fi-brands-facebook"></i></a>
              <a href="#"><i className="fi fi-brands-twitter"></i></a>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#" className="p-btn">Get Started</a>
            <a href="#" className="s-btn">Explore More</a>
          </div>

        </div>


      </div>

    </section>
  );
}

export default Hero;
