'use client'

import { useEffect, useRef, useState } from 'react'

const familiarSize = 62

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

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max))
}

function getFamiliarPosition(x: number, y: number) {
  const maxY = Math.max(80, window.innerHeight - familiarSize - 12)
  const top = clamp(y, 80, maxY)
  let maxX = window.innerWidth - familiarSize - 12

  if (top > window.innerHeight - 210) {
    maxX = Math.min(maxX, window.innerWidth - familiarSize - 100)
  }

  return {
    x: clamp(x, 12, maxX),
    y: top,
  }
}

function randomFamiliarPosition() {
  const maxX = Math.max(12, window.innerWidth - familiarSize - 12)
  const maxY = Math.max(80, window.innerHeight - familiarSize - 12)
  return getFamiliarPosition(
    12 + Math.random() * Math.max(0, maxX - 12),
    80 + Math.random() * Math.max(0, maxY - 80),
  )
}

export default function FamiliarChat() {
  const [open, setOpen] = useState(false)
  const [following, setFollowing] = useState(false)
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const familiarRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const chatButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setPosition(getFamiliarPosition(window.innerWidth - 100, window.innerHeight - 190))
    const handleResize = () => {
      setPosition((current) => current ? getFamiliarPosition(current.x, current.y) : current)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (following || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const interval = window.setInterval(() => setPosition(randomFamiliarPosition()), 3400)
    return () => window.clearInterval(interval)
  }, [following])

  useEffect(() => {
    if (!following) return
    const handlePointerMove = (event: PointerEvent) => {
      setPosition(getFamiliarPosition(event.clientX + 24, event.clientY + 22))
    }
    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [following])

  useEffect(() => {
    if (!open) return

    closeRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        chatButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const closeChat = () => {
    setOpen(false)
    chatButtonRef.current?.focus()
  }

  return (
    <div className="familiar-chat">
      <button
        ref={familiarRef}
        type="button"
        className={`familiar-roamer${following ? ' familiar-roamer--following' : ''}`}
        style={position ? { left: position.x, top: position.y } : undefined}
        onClick={() => setFollowing((value) => !value)}
        aria-label={following ? 'Stop Fable from following the pointer' : 'Make Fable follow the pointer'}
        aria-pressed={following}
        title={following ? 'Following your pointer — click to let Fable roam' : 'Click to have Fable follow your pointer'}
      >
        <FamiliarMark />
        <span className="familiar-roamer-spark" aria-hidden="true">✦</span>
      </button>

      <div className="familiar-controls">
        <section
          className="familiar-panel"
          id="familiar-chat-panel"
          role="dialog"
          aria-labelledby="familiar-chat-title"
          hidden={!open}
        >
          <div className="familiar-panel-header">
            <div className="familiar-panel-portrait"><FamiliarMark /></div>
            <div className="familiar-panel-heading">
              <span>YOUR RESUME GUIDE</span>
              <h2 id="familiar-chat-title">Fable the Familiar</h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              className="familiar-close"
              onClick={closeChat}
              aria-label="Close chat"
            >
              <i className="fas fa-times" aria-hidden="true" />
            </button>
          </div>

          <div className="familiar-panel-content">
            <div className="familiar-message-row">
              <div className="familiar-message-avatar"><FamiliarMark /></div>
              <div className="familiar-message">
                <span className="familiar-message-author">FABLE <span>✦</span></span>
                <p>Greetings, traveler. Soon I&apos;ll help you explore Nitin&apos;s skills, experience, education, and projects.</p>
              </div>
            </div>

            <div className="familiar-coming-soon">
              <span className="coming-soon-star">✦</span>
              <div>
                <strong>Coming soon</strong>
                <p>I&apos;m gathering the story scrolls. Ask me anything about Nitin&apos;s journey when I&apos;m ready.</p>
              </div>
            </div>

            <div className="familiar-topics" aria-label="Topics this assistant will cover">
              <span>About</span>
              <span>Skills</span>
              <span>Experience</span>
              <span>Projects</span>
              <span>Education</span>
            </div>
          </div>

          <div className="familiar-composer">
            <input type="text" placeholder="Chat will be available soon" disabled aria-label="Chat input, coming soon" />
            <button type="button" disabled aria-label="Send message">
              <i className="fas fa-arrow-up" aria-hidden="true" />
            </button>
          </div>
          <p className="familiar-footnote">A little guide to Nitin&apos;s professional adventure</p>
        </section>

        <button
          ref={chatButtonRef}
          type="button"
          className={`familiar-chat-button${open ? ' familiar-chat-button--open' : ''}`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="familiar-chat-panel"
          aria-label={open ? 'Close Fable chat' : 'Open Fable chat'}
          title={open ? 'Close Fable chat' : 'Chat with Fable'}
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-comment-dots'}`} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
