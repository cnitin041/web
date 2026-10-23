const certifications = [
  { name: 'Introduction to Generative AI', icon: 'fa-robot' },
  { name: 'Data Science and Machine Learning', icon: 'fa-chart-line' },
  { name: 'Python Certification (Grass)', icon: 'fa-code' },
  { name: 'AI Agent Builder (Credly)', icon: 'fa-wand-magic-sparkles' },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-header">
        <h2>Certifications</h2>
        <div className="section-line" />
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.name} className="cert-card">
            <div className="cert-icon">
              <i className={`fas ${cert.icon}`}></i>
            </div>
            <span>{cert.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
