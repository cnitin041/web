import Navigation from '@/components/Navigation'
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Animations from '@/components/Animations'

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <div className="container">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
      </div>
      <Footer />
      <ScrollToTop />
      <Animations />
    </>
  )
}
