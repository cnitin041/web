'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  'Agentic AI Engineer',
  'Full-Stack AI Developer',
  'GenAI Engineer',
  'Automation Architect',
  'Problem Solver',
]

export default function Animations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ─── Hero entrance ─── */
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-image-wrapper', {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })
        .from('.hero-name', { opacity: 0, y: 30, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.hero-typed-text', { opacity: 0, duration: 0.4 }, '-=0.3')
        .from('.hero-description', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
        .from('.hero-cta .btn', { opacity: 0, y: 20, stagger: 0.15, duration: 0.5 }, '-=0.2')

      /* ─── Typewriter ─── */
      let roleIndex = 0
      let charIndex = 0
      let isDeleting = false
      const typedEl = document.querySelector('.hero-typed-text')

      const type = () => {
        if (!typedEl) return
        const currentRole = roles[roleIndex]

        if (!isDeleting) {
          typedEl.textContent = currentRole.substring(0, charIndex + 1)
          charIndex++
          if (charIndex === currentRole.length) {
            isDeleting = true
            setTimeout(type, 2000)
            return
          }
        } else {
          typedEl.textContent = currentRole.substring(0, charIndex - 1)
          charIndex--
          if (charIndex === 0) {
            isDeleting = false
            roleIndex = (roleIndex + 1) % roles.length
            setTimeout(type, 400)
            return
          }
        }
        setTimeout(type, isDeleting ? 40 : 80)
      }
      setTimeout(type, 1800)

      /* ─── Count-up animation ─── */
      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10)
        el.textContent = '0'
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + '+'
          },
          scrollTrigger: {
            trigger: el.closest('.stats-bar'),
            start: 'top 85%',
          },
        })
      })

      /* ─── Section reveals ─── */
      gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        })
      })

      /* ─── Section header reveals ─── */
      gsap.utils.toArray<HTMLElement>('.section-header').forEach((header) => {
        gsap.from(header, {
          opacity: 0,
          x: -30,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
          },
        })
      })

      /* ─── Skill category cards ─── */
      gsap.utils.toArray<HTMLElement>('.skill-category').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })

      /* ─── Timeline items ─── */
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: -40,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        })
      })

      /* ─── Project cards ─── */
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        })
      })

      /* ─── Education cards ─── */
      gsap.utils.toArray<HTMLElement>('.education-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })

      /* ─── Cert cards ─── */
      gsap.utils.toArray<HTMLElement>('.cert-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          ease: 'power2.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        })
      })

      /* ─── Skill tag float animation ─── */
      gsap.utils.toArray<HTMLElement>('.skill-tag').forEach((tag, i) => {
        gsap.to(tag, {
          y: -3,
          duration: 2 + (i % 3),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.05,
        })
      })

      /* ─── Timeline card hover effect ─── */
      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.01, duration: 0.3, ease: 'power2.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' })
        })
      })
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return null
}
