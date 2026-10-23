export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line" />
      </div>

      <p className="about-text">
        Full Stack AI Engineer focused on taking AI products from prototype to production. My work spans
        multi-model inference, GPU performance, secure backend systems, and workflow automation—from
        voice agents and RAG applications to cross-platform products serving thousands of users.
      </p>

      <div className="stats-bar" style={{ margin: '40px auto 0' }}>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="stat-number" data-target="3" data-suffix="×">
            0
          </div>
          <div className="stat-label">Faster inference</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="stat-number" data-target="45" data-suffix="%">
            0
          </div>
          <div className="stat-label">Higher domain accuracy</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="stat-number" data-target="3" data-suffix="k+">
            0
          </div>
          <div className="stat-label">Medical app users</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-certificate"></i>
          </div>
          <div className="stat-number" data-target="1" data-suffix="k+">
            0
          </div>
          <div className="stat-label">Concurrent requests</div>
        </div>
      </div>
    </section>
  )
}
