export default function Header() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span /> Generative AI · Full-stack engineering</p>
          <h1 className="hero-name">Nitin Choudhary</h1>
          <p className="hero-subtitle">
            <span className="hero-typed-text"></span>
            <span className="hero-cursor"></span>
          </p>
          <p className="hero-description">
            AI/ML Engineer and Full Stack Developer building production-grade Generative AI systems,
            GPU-optimized inference pipelines, and scalable applications used by real people.
          </p>
          <div className="hero-contact">
            <a href="mailto:cnitin041@gmail.com"><i className="fas fa-envelope" /> cnitin041@gmail.com</a>
            <a href="tel:+918905597301"><i className="fas fa-phone" /> +91 89055-97301</a>
          </div>
          <div className="hero-cta">
            <a href="mailto:cnitin041@gmail.com?subject=Let%27s%20Connect" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Selected Work <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div
            className="hero-image"
            role="img"
            aria-label="Portrait of Nitin Choudhary"
            style={{
              backgroundImage: "url('/Nitin.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="hero-image-note"><span /> AI systems, built for production</div>
        </div>
      </div>
      <div className="hero-bottomline"><span>Based in India</span><span>AI engineering · Full-stack development · Automation</span></div>
    </section>
  )
}
