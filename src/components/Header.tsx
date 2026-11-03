export default function Header() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span /> A PORTFOLIO ADVENTURE <span className="eyebrow-number"> / 01</span></p>
          <p className="hero-intro">Hello, traveler. I&apos;m</p>
          <h1 className="hero-name">Nitin <em>Choudhary.</em></h1>
          <p className="hero-subtitle">
            <span className="hero-typed-text"></span>
            <span className="hero-cursor"></span>
          </p>
          <p className="hero-description">
            AI/ML Engineer and Full Stack Developer building production-grade Generative AI systems,
            GPU-optimized inference pipelines, and scalable applications used by real people.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Explore my quests <i className="fas fa-arrow-right" /></a>
            <a href="mailto:cnitin041@gmail.com?subject=Let%27s%20Connect" className="btn btn-secondary">Get in touch <i className="fas fa-arrow-up-right-from-square" /></a>
          </div>
          <div className="hero-contact">
            <a href="mailto:cnitin041@gmail.com"><i className="fas fa-envelope" /> cnitin041@gmail.com</a>
            <a href="tel:+918905597301"><i className="fas fa-phone" /> +91 89055-97301</a>
          </div>
        </div>
        <div className="hero-art" aria-label="An illustrated fantasy landscape with a portrait of Nitin Choudhary">
          <svg className="landscape" viewBox="0 0 620 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#243f61"/><stop offset=".58" stopColor="#a77d83"/><stop offset="1" stopColor="#efb78d"/></linearGradient>
              <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ffe8b7"/><stop offset="1" stopColor="#e8aa8e"/></linearGradient>
            </defs>
            <rect width="620" height="600" fill="url(#sky)"/>
            <circle cx="370" cy="220" r="100" fill="url(#sun)" opacity=".92"/>
            <g fill="#f7dfc8" opacity=".75"><circle cx="115" cy="103" r="2"/><circle cx="495" cy="95" r="2"/><circle cx="531" cy="195" r="1.5"/><circle cx="242" cy="67" r="1.5"/><path d="M163 161h16m-8-8v16M463 145h12m-6-6v12" stroke="#f7dfc8" strokeWidth="1"/></g>
            <path d="M0 344 75 264 131 315 210 211 298 326 352 270 432 340 500 244 620 342V600H0Z" fill="#78899a"/>
            <path d="m0 367 75-103 16 20 20 45 20-14 79-104 24 31 20 62 44 22 54-56 80 70 68-96 19 29 18 53 83 16v258H0Z" fill="#64798c" opacity=".8"/>
            <path d="M0 405 104 338 171 382 252 308 348 392 433 324 524 380 620 327V600H0Z" fill="#405e76"/>
            <path d="M0 455 92 390 177 430 285 360 376 432 467 374 544 410 620 383V600H0Z" fill="#304e65"/>
            <path d="M0 491c88-36 147-11 211-36 74-29 128-12 183 5 75 23 143-21 226-18v158H0Z" fill="#203f51"/>
            <path d="M0 539c97-35 176-21 248-37 90-20 160-8 223 9 56 15 102-5 149-11v100H0Z" fill="#172f3f"/>
            <g fill="#263d50" stroke="#d8b6a1" strokeWidth="1" strokeLinejoin="round"><path d="M319 344v-39h13v-24l7-11 7 11v24h11v-49l8-14 8 14v49h11v-24l7-11 7 11v24h12v39Z"/><path d="M313 344h104l-9 12h-84Z"/></g>
            <g stroke="#eecb9b" opacity=".7"><path d="M365 242v-20m0 1 11 4-11 4"/><path d="M326 327h4m13 0h4m16 0h4m16 0h4m13 0h4"/></g>
            <g fill="#d9b69f" opacity=".65"><path d="M65 477h80v2H65zM451 465h101v2H451zM119 507h63v2h-63z"/></g>
            <g fill="#132d3b"><path d="m38 533 13-45 13 45h-8v20H46v-20zm32 12 17-59 17 59H94v21H80v-21zm440 6 15-53 15 53h-9v17h-12v-17zm42-10 19-68 19 68h-12v28h-14v-28z"/></g>
          </svg>
          <div className="art-frame" aria-hidden="true" />
          <div className="art-caption"><span>THE WORLD IS FULL OF</span><strong>things to build.</strong></div>
          <div className="hero-image-wrapper">
            <div className="hero-image" role="img" aria-label="Portrait of Nitin Choudhary" style={{ backgroundImage: "url('/Nitin.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="portrait-caption"><span>THE PROTAGONIST</span><strong>Nitin Choudhary</strong><small>AI ENGINEER &amp; BUILDER</small></div>
          </div>
          <span className="art-coordinate">✦ &nbsp; THE ADVENTURE BEGINS &nbsp; ✦</span>
        </div>
      </div>
      <div className="hero-bottomline"><span>BASED IN INDIA</span><span>SCROLL TO CONTINUE THE STORY &nbsp; ↓</span><span>EST. WITH CURIOSITY</span></div>
    </section>
  )
}
