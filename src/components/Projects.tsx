const projectColors: Record<string, string> = {
  'Production AI Inference Backend': 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
  'Agentic AI Workflow Orchestrator': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  'Cross-Platform Medical Application': 'linear-gradient(135deg, #f093fb, #f5576c)',
  'Workflow Automation & Orchestration': 'linear-gradient(135deg, #4facfe, #00f2fe)',
  'AI-First CRM': 'linear-gradient(135deg, #141e30, #243b55, #30606e)',
  'Task Reporting System': 'linear-gradient(135deg, #fa709a, #fee140)',
}

const projects = [
  {
    title: 'Production AI Inference Backend',
    description:
      'Flask-based multi-model serving system deployed on NVIDIA L4 GPU with Gunicorn, built as the inference layer for agentic AI workflows. Supports text generation, analysis, image processing, and recommendation endpoints with CUDA-optimized pipelines.',
    tags: ['Python', 'Flask', 'Gunicorn', 'CUDA', 'NVIDIA L4'],
  },
  {
    title: 'Agentic AI Workflow Orchestrator',
    description:
      'Multi-step AI agent orchestration system integrating n8n, Zapier, and Make.com with intelligent scheduling. Automates data pipelines, triggers model inference chains, and coordinates tool-use across distributed services.',
    tags: ['n8n', 'Python', 'REST APIs', 'Workflow Automation'],
  },
  {
    title: 'Cross-Platform Medical Application',
    description:
      'Full-stack Flutter + Node.js platform serving 3,000+ active users on Android and iOS. Features secure JWT authentication, role-based access, and AI-assisted content delivery.',
    tags: ['Flutter', 'Node.js', 'JWT', 'RBAC'],
  },
  {
    title: 'Workflow Automation & Orchestration',
    description:
      'Automated operational pipelines using n8n, Zapier, and Make.com, integrating third-party APIs for intelligent data synchronization, notifications, and reducing manual intervention.',
    tags: ['n8n', 'Zapier', 'Make.com', 'API Integration'],
  },
  {
    title: 'AI-First CRM',
    description:
      'Intelligent CRM that manages the full client journey from lead intake to project delivery and payment clearance. Learns from admin and sub-admin actions via behavioral pattern recognition, progressively requesting permission to automate repetitive workflows. Maintains a comprehensive system-wide audit log that doubles as a knowledge base for a master agent to coordinate and delegate tasks to specialized worker agents.',
    tags: ['Python', 'Flask', 'Machine Learning', 'Agentic AI', 'Audit Logs'],
  },
  {
    title: 'Task Reporting System',
    description:
      'Custom task reporting platform increasing report creation speed by 70% and streamlining team workflows.',
    tags: ['React', 'Node.js'],
    link: 'https://listen.parnex.in/',
  },
]

function getImagePath(title: string) {
  return `/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg`
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div
              className="project-image"
              style={{ background: projectColors[project.title] }}
            >
              <span className="project-image-text">{project.title}</span>
            </div>
            <div className="project-card-body">
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <i className="fas fa-arrow-right"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
