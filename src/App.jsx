import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'
import TechStack from './components/layout/TechStack'
import AnnouncementBar from './components/layout/AnnouncementBar'

export default function App() {
  return (
    <>
      <Navbar />
      <AnnouncementBar/>
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <TechStack />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}