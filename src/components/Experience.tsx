const experiences = [
  {
    title: 'Full Stack AI Engineer',
    company: 'DriftPoint Technologies Pvt. Ltd.',
    date: 'Dec 2024 - Present',
    badge: 'Current',
    metric: '3× inference speed',
    points: [
      'Built W3Agent for email classification and context-aware outreach, with a custom lead pipeline and analytics dashboard.',
      'Developed WarrantyHub to automate warranty registration and order verification across multiple Amazon seller accounts.',
      'Designed an AI voice agent for inbound and outbound calls, combining speech-to-text, LLMs, and text-to-speech to qualify leads, answer FAQs, and schedule appointments.',
      'Deployed a Flask multi-model backend on NVIDIA L4; tuned Gunicorn workers, model preloading, GPU memory, and CUDA for concurrent text, image, and recommendation workloads.',
      'Improved domain accuracy by 45% through transformer fine-tuning and built secure Node.js APIs with JWT authentication for 1,000+ concurrent requests.',
      'Automated WhatsApp and email support with AI responses and sentiment analysis; built CI/CD pipelines for testing and deployment.',
    ],
  },
  {
    title: 'Web Developer and CRM Manager',
    company: 'DR. Digitalz Pvt. Ltd.',
    date: 'Jun 2024 - Dec 2024',
    badge: undefined,
    metric: '40% workflow improvement',
    points: [
      'Engineered custom CRM modules, improving organizational workflow efficiency by 40%.',
      'Automated ERP data processing, reducing manual administrative work by 60%.',
      'Improved organic traffic by 90% through technical SEO and backend performance tuning.',
      'Built scalable MVC backend modules that reduced development time by 30% and integrated MongoDB and MySQL for CRM and ERP data.',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Independent',
    date: 'May 2023 - Feb 2024',
    badge: undefined,
    metric: '10,000+ app downloads',
    points: [
      'Built and launched web and mobile applications reaching more than 10,000 downloads.',
      'Improved user engagement by 75% through UI and performance enhancements.',
      'Implemented secure authentication and optimized backend APIs for production-ready applications.',
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
