const education = [
  {
    degree: 'B.Tech in AI & Data Science',
    institution: 'Arya College of Engineering & I.T',
    date: '2024',
    details: [
      'Completed with 8.78 CGPA',
      'Presented research paper on "Characteristics & Comparative Analysis of MongoDB" at national conference',
      'Specialized in Machine Learning, programming concepts, networking, and software engineering fundamentals',
      'Gained practical knowledge of Machine Learning via various projects and assignments',
    ],
  },
  {
    degree: 'Senior Secondary (PCM)',
    institution: "St. Anselm's Sr. Sec. School",
    date: '2020',
    details: [
      'Scored 75% in Physics, Chemistry & Mathematics',
      'Completed 5+ Python programming projects demonstrating proficiency in data structures & algorithms',
      'Practical experience in Physics and Chemistry concepts',
    ],
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-header">
        <h2>Education</h2>
        <div className="section-line" />
      </div>

      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.degree} className="education-card">
            <h3>{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-date">{edu.date}</p>
            <ul className="education-details">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
