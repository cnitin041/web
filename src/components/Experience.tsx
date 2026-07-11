const experiences = [
  {
    title: 'Agentic AI Engineer & Web Developer',
    company: 'DriftPoint Technologies Pvt. Ltd.',
    date: 'Jan 2025 - Present',
    badge: 'Current',
    metric: '3x Inference Speed',
    points: [
      'Architected production-grade Flask AI backend for multi-model inference serving — text generation, analysis, image processing, and recommendation endpoints — forming the serving layer for agentic AI workflows',
      'Deployed models on NVIDIA L4 GPU with CUDA-optimized pipelines achieving 3x inference speed improvement; configured Gunicorn with model preloading for zero cold-start latency',
      'Fine-tuned transformer models improving domain accuracy by 45%, enabling more reliable agent tool-use and downstream task performance',
      'Built CI/CD pipelines and integrated AI-driven workflow automation using n8n, Zapier, and Make.com to orchestrate multi-step agent tasks',
      'Developed secure REST APIs with JWT authentication and RBAC, supporting 1000+ concurrent requests for AI-powered applications',
    ],
  },
  {
    title: 'Web Developer & CRM Manager',
    company: 'DR. Digitalz Pvt. Ltd., Jaipur',
    date: 'Jun 2024 - Dec 2024',
    badge: 'Promotion',
    metric: '90% Traffic Boost',
    points: [
      'Developed custom CRM modules and automated ERP data processing, reducing manual work by 60% and improving workflow efficiency by 40%',
      'Improved organic traffic by 90% through backend optimization and technical SEO',
      'Designed scalable backend architecture reducing development time by 30%',
      'Managed cross-functional coordination between development and marketing teams',
    ],
  },
  {
    title: 'AI-Powered Freelance Developer',
    company: 'Cross-Platform & Automation',
    date: 'May 2023 - Feb 2024',
    badge: '10K+ Downloads',
    metric: '75% Engagement',
    points: [
      'Built full-stack cross-platform medical application (Flutter + Node.js) serving 3,000+ active users with secure authentication and role-based access',
      'Designed AI-driven workflow automation & orchestration systems using n8n, Zapier, and Make.com, integrating third-party APIs for intelligent data synchronization',
      'Developed and deployed web/mobile applications reaching 10,000+ total downloads with 5-star rating',
      'Increased user engagement by 75% through UI/UX improvements and backend optimization',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <h2>Work Experience</h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.title + exp.company} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-card-header">
                <h3>{exp.title}</h3>
                {exp.badge && <span className="timeline-badge">{exp.badge}</span>}
              </div>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-date">{exp.date} {exp.metric ? `· ${exp.metric}` : ''}</p>
              <ul className="timeline-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
