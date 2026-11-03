'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'

type ChatMessage = {
  id: number
  role: 'familiar' | 'visitor'
  text: string
}

const greeting = "Hello, traveler! I'm Fable. Ask me about Nitin's work, skills, projects, or studies, and I'll point you to the right chapter."

function replyTo(question: string) {
  const message = question.toLowerCase()

  if (/\b(hi|hello|hey|good morning|good afternoon)\b/.test(message)) {
    return "Well met! What would you like to explore: Nitin's projects, experience, skills, or education?"
  }
  if (/\b(project|built|build|app|apps|portfolio)\b/.test(message)) {
    return "The quest log has a few highlights: an AI voice memo app, a lightweight RAG chat service, an automated SEO content tool, and a medical app used by 3,000+ people. Which one sounds interesting?"
  }
  if (/\b(experience|work|career|job|company|driftpoint|digitalz)\b/.test(message)) {
    return "Nitin is a Full Stack AI Engineer at DriftPoint Technologies, where he builds AI agents, voice systems, and GPU-optimized inference. Before that, he worked on CRM and ERP systems at DR. Digitalz and shipped freelance apps with 10,000+ downloads."
  }
  if (/\b(skill|technology|tech stack|tools|language|framework)\b/.test(message)) {
    return "His toolkit spans Python and Node.js, LangChain and LangGraph, RAG and LLMs, Flask APIs, CUDA/GPU tuning, databases, and Flutter. The Skills chapter has the full inventory."
  }
  if (/\b(education|degree|college|study|studied|university)\b/.test(message)) {
    return "Nitin earned a B.Tech in AI & Data Science from Arya College of Engineering & I.T in 2024, graduating with an 8.78 CGPA. He also presented a research paper on MongoDB at a national conference."
  }
  if (/\b(contact|email|hire|reach|connect)\b/.test(message)) {
    return "Ready to start a new quest together? You can reach Nitin at cnitin041@gmail.com, or use the Get in touch link in the hero."
  }
  if (/\b(inference|gpu|cuda|accuracy|performance|metric|result|impact)\b/.test(message)) {
    return "A few milestones from the journey: 3× faster inference, 45% higher domain accuracy, and support for 1,000+ concurrent requests. You'll find more details in the experience chapter."
  }
  if (/\b(who|about|nitin|him|background)\b/.test(message)) {
    return "Nitin is a Full Stack AI Engineer focused on taking AI products from prototype to production—from voice agents and RAG apps to secure backends and cross-platform products. What part of his journey should we explore?"
  }

  return "That chapter isn't in my map just yet. I can help with Nitin's projects, experience, skills, education, or contact details—what catches your eye?"
}

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
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, role: 'familiar', text: greeting },
  ])
  const familiarRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const nextMessageId = useRef(1)

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
    inputRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        familiarRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, open])

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const question = input.trim()
    if (!question) return

    setMessages((current) => [
      ...current,
      { id: nextMessageId.current++, role: 'visitor', text: question },
      { id: nextMessageId.current++, role: 'familiar', text: replyTo(question) },
    ])
    setInput('')
  }

  if (!visible) return null

  return (
    <div className="familiar">
      {open && (
        <section className="familiar-panel" id="familiar-panel" role="dialog" aria-labelledby="familiar-title" aria-modal="false">
          <header className="familiar-panel-header">
            <div className="familiar-panel-avatar"><FamiliarMark /></div>
            <div className="familiar-panel-heading">
              <span>YOUR PORTFOLIO GUIDE</span>
              <h2 id="familiar-title">Fable the Familiar</h2>
            </div>
            <button className="familiar-panel-close" type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </header>
          <div className="familiar-messages" aria-live="polite" aria-relevant="additions text">
            {messages.map((message) => (
              <div key={message.id} className={`familiar-message familiar-message--${message.role}`}>
                {message.role === 'familiar' && <span className="familiar-message-author">FABLE</span>}
                <p>{message.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="familiar-composer" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
              maxLength={280}
              placeholder="Ask about Nitin's journey..."
              aria-label="Message Fable"
            />
            <button type="submit" disabled={!input.trim()} aria-label="Send message">
              <i className="fas fa-arrow-up" aria-hidden="true" />
            </button>
          </form>
          <p className="familiar-footnote">A friendly guide to Nitin&apos;s portfolio</p>
        </section>
      )}
      <button
        ref={familiarRef}
        type="button"
        className="familiar-button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="familiar-panel"
        aria-label={open ? 'Close Fable chat' : 'Chat with Fable'}
        title={open ? 'Close Fable chat' : 'Chat with Fable'}
      >
        {open ? <i className="fas fa-times familiar-toggle-icon" aria-hidden="true" /> : <FamiliarMark />}
        {!open && <span className="familiar-spark" aria-hidden="true">✦</span>}
      </button>
    </div>
  )
}
