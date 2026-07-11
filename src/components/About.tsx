export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line" />
      </div>

      <p className="about-text">
        Agentic AI and Full-Stack AI Engineer specializing in production-grade AI
        systems — from GPU-optimized model serving and multi-agent orchestration to
        scalable full-stack applications. Experienced in designing Flask-based AI
        backends deployed on NVIDIA L4 GPUs with CUDA-optimized inference pipelines,
        building RESTful APIs for multi-model serving, and automating workflows with
        AI-driven orchestration. Passionate about bridging the gap between cutting-edge
        AI research and production-ready systems that deliver real user impact.
      </p>

      <div className="stats-bar" style={{ margin: '40px auto 0' }}>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="stat-number" data-target="3">
            0
          </div>
          <div className="stat-label">Years Experience</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="stat-number" data-target="15">
            0
          </div>
          <div className="stat-label">Projects</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="stat-number" data-target="35">
            0
          </div>
          <div className="stat-label">Skills</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-certificate"></i>
          </div>
          <div className="stat-number" data-target="4">
            0
          </div>
          <div className="stat-label">Certifications</div>
        </div>
      </div>
    </section>
  )
}
