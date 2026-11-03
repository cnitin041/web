'use client'

import { useEffect, useRef, useState } from 'react'

const thoughts = [
  "Hello, traveler! I'm Fable, your little companion for this adventure.",
  "Curious about what Nitin builds? The projects are full of interesting quests.",
  "A good adventure takes curiosity, a little courage, and plenty of coffee.",
  "Take your time exploring. Every great story has more than one chapter."
]

function FamiliarMark() {
  return (
    <svg className="familiar-mark" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M13 27 8 7l18 12c4-2 9-2 13 0L57 7l-6 22c3 4 4 8 2 13-3 8-11 13-21 13S14 50 11 42c-2-5-1-11 2-15Z" fill="#c7784f" />
      <path d="m13 15 11 7-8 3-1 6-2-6-3-2Zm38 0-11 7 8 3 1 6 2-6 3-2Z" fill="#f1c99d" />
      <path d="M18 34c3-2 7-2 10 0m8 0c3-2 7-2 10 0" fill="none" stroke="#453630" strokeLinecap="round" strokeWidth="2.4" />
      <path d="M24 42c3-4 13-4 16 0-2 5-5 7-8 7s-6-2-8-7Z" fill="#f4dfbd" />
      <path d="M29 41h6l-3 3Z" fill="#553b35" />
      <path d="M32 44v2m0 0c-2 2-4 2-6 1m6-1c2 2 4 2 6 1" fill="none" stroke="#765044" strokeLinecap="round" strokeWidth="1.4" />
      <path d="m48 7 2-5 2 5 5 2-5 2-2 5-2-5-5-2Z" fill="#edc887" />
    </svg>
  )
}

export default function FamiliarChat() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [thought, setThought] = useState(0)
  const familiarRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const updateVisibility = () => {
      const pastHero = hero.getBoundingClientRect().bottom <= 0
      setVisible(pastHero)
      if (!pastHero) setOpen(false)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        familiarRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  if (!visible) return null

  const greet = () => {
    if (open) setThought((current) => (current + 1) % thoughts.length)
    else setOpen(true)
  }

  return (
    <div className="familiar">
      {open && (
        <div className="familiar-thought" id="familiar-thought">
          <button className="familiar-thought-close" type="button" onClick={() => setOpen(false)} aria-label="Close Fable's note">×</button>
          <span className="familiar-thought-name">FABLE THE FAMILIAR <span aria-hidden="true">✦</span></span>
          <p aria-live="polite">{thoughts[thought]}</p>
          <small>Tap Fable for another thought</small>
        </div>
      )}
      <button
        ref={familiarRef}
        type="button"
        className="familiar-button"
        onClick={greet}
        aria-expanded={open}
        aria-controls={open ? 'familiar-thought' : undefined}
        aria-label={open ? 'Hear another thought from Fable' : 'Meet Fable the Familiar'}
        title={open ? 'Another thought from Fable' : 'Meet Fable the Familiar'}
      >
        <FamiliarMark />
        <span className="familiar-spark" aria-hidden="true">✦</span>
      </button>
    </div>
  )
}
