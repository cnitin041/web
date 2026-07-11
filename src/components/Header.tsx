export default function Header() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <div
            className="hero-image"
            style={{
              backgroundImage: "url('/Nitin.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="hero-image-placeholder" style={{ display: 'none' }}>
              NC
            </div>
          </div>
        </div>

        <h1 className="hero-name">Nitin Choudhary</h1>
        <p className="hero-subtitle">
          <span className="hero-typed-text"></span>
          <span className="hero-cursor"></span>
        </p>
        <p className="hero-description">
          Building production-grade Agentic AI systems and Full-Stack AI applications
          — from GPU-accelerated model serving to scalable end-to-end solutions.
        </p>

        <div className="hero-cta">
          <a href="mailto:cnitin041@gmail.com?subject=Let's%20Connect" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Get In Touch
          </a>
          <a href="#projects" className="btn btn-secondary">
            <i className="fas fa-code"></i> View My Work
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
