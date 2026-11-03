'use client'

import { useState, useEffect, useCallback } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])


  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <nav className="nav-wrapper">
      <div className="nav-inner">
        <div className="nav-left">
          <a className="nav-brand" href="#hero" onClick={closeMenu} aria-label="Nitin Choudhary home">
            <span>NC</span>
            <strong>Nitin Choudhary</strong>
          </a>
          <button
            className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          <li className="nav-close-item">
            <button className="nav-close-btn" onClick={closeMenu} aria-label="Close menu">
              <i className="fas fa-times"></i>
            </button>
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>

      </div>

      <div
        className={`nav-overlay${menuOpen ? ' nav-overlay--visible' : ''}`}
        onClick={closeMenu}
      />
    </nav>
  )
}
