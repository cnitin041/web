const skillCategories = [
  {
    title: 'Agentic AI',
    icon: 'fa-robot',
    skills: [
      'Multi-Agent Architectures',
      'LLM Serving & Orchestration',
      'Tool-Use & Function Calling',
      'RAG Pipeline Development',
      'AI Agent Backend Design',
      'Prompt Engineering',
    ],
  },
  {
    title: 'AI/ML Engineering',
    icon: 'fa-brain',
    skills: [
      'Transformers (T5)',
      'NLP & Generative AI',
      'Fine-Tuning & Domain Adaptation',
      'Recommendation Systems',
      'Multi-Model Inference Serving',
      'Model Lifecycle Management',
    ],
  },
  {
    title: 'Full-Stack Backend',
    icon: 'fa-server',
    skills: ['Node.js / Express.js', 'Flask / Gunicorn', 'REST & GraphQL APIs', 'MVC Architecture', 'JWT / OAuth / RBAC'],
  },
  {
    title: 'GPU & Performance',
    icon: 'fa-microchip',
    skills: ['NVIDIA L4 / CUDA', 'GPU Memory Optimization', 'Inference Pipeline Tuning', 'Concurrent Request Handling'],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: 'fa-cloud',
    skills: ['Linux Servers', 'CI/CD Pipelines', 'Docker / Deployment Automation', 'Process Management'],
  },
  {
    title: 'Databases & Vector Stores',
    icon: 'fa-database',
    skills: ['MongoDB', 'MySQL', 'Vector Databases', 'Data Modeling'],
  },
  {
    title: 'Automation & Workflows',
    icon: 'fa-gears',
    skills: ['n8n', 'Make.com', 'Zapier', 'AI-Driven Workflow Orchestration'],
  },
  {
    title: 'Frontend & Mobile',
    icon: 'fa-mobile-alt',
    skills: ['Flutter', 'React', 'Responsive Web', 'WordPress'],
  },
  {
    title: 'Languages',
    icon: 'fa-code',
    skills: ['Python', 'JavaScript (Node.js)', 'C++', 'PHP', 'SQL'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <h2>Skills & Expertise</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-category">
            <h3>
              <i className={`fas ${cat.icon}`}></i> {cat.title}
            </h3>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
