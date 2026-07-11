export default function Footer() {
  return (
    <footer>
      <h2>Let&apos;s Connect</h2>
      <div className="social-links">
        <a
          href="https://github.com/cnitin041"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nitin-choudhary-6318bb223"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:cnitin041@gmail.com" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Nitin Choudhary.
      </p>
    </footer>
  )
}
