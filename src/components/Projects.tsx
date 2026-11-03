const projects = [
  {
    title: 'Listen — AI Voice Memo',
    icon: 'fa-microphone-lines',
    description:
      'Turns voice recordings into clear, structured memos using GCP Speech-to-Text and AI. An n8n orchestration layer evaluates details, timestamps, and priority to book calendar events or send targeted emails.',
    tags: ['GCP Speech-to-Text', 'AI', 'n8n', 'Workflow Automation'],
  },
  {
    title: 'Lightweight RAG Chat Service',
    icon: 'fa-comments',
    description:
      'A knowledge-grounded chat service that builds a searchable knowledge base from uploaded text or web pages. Uses persistent conversation memory and scoped access keys to isolate vector stores by data source.',
    tags: ['RAG', 'Vector Databases', 'Web Scraping', 'API Security'],
  },
  {
    title: 'Content Manager & SEO Blog Generator',
    icon: 'fa-newspaper',
    description:
      'Automates keyword-based news research and blog drafting with Make and FastAPI. Generated articles enter an admin review queue for one-click approval before publishing.',
    tags: ['FastAPI', 'Make', 'Content Automation', 'SEO'],
  },
  {
    title: 'Cross-Platform Medical Application',
    icon: 'fa-heart-pulse',
    description:
      'Full-stack medical platform built with Flutter and Node.js, serving more than 3,000 active users across Android and iOS with secure authentication, role-based access, and a scalable multi-platform API.',
    tags: ['Flutter', 'Node.js', 'JWT', 'RBAC'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="chapter-label"><span>05</span> THE QUEST LOG</p>
      <div className="section-header">
        <h2>Quests conquered<span>.</span></h2>
        <div className="section-line" />
      </div>

      <p className="section-subtitle">Selected projects, built for the real world</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card">
            <div className="project-image">
              <span className="quest-number">QUEST 0{index + 1}</span>
              <span className="project-image-text"><i className={`fas ${project.icon}`} aria-hidden="true" /></span>
              <span className="quest-star" aria-hidden="true">✦</span>
            </div>
            <div className="project-card-body">
              <span className="quest-status"><i className="fas fa-check" /> QUEST COMPLETE</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
