import { useEffect } from 'react'
import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Features from './sections/Features'
import TechnicalSpecifications from './sections/TechnicalSpecifications'
import DevelopmentJourney from './sections/DevelopmentJourney'
import Sustainability from './sections/Sustainability'
import OurProject from './sections/OurProject'
import { project } from './content/project'
import usePageMotion from './hooks/usePageMotion'
import { usePathname } from './navigation'
import SiteLink from './components/SiteLink'
import PrototypesPage from './pages/PrototypesPage'

export default function App() {
  const pathname = usePathname()
  const prototypesPage = pathname.replace(/\/$/, '') === '/prototipos'
  useEffect(() => {
    document.title = prototypesPage ? 'Prototipos | AgroBot' : 'AgroBot | Robótica agrícola'
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1))
      if (target) target.scrollIntoView()
      else window.scrollTo({ top: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, prototypesPage])
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header key={prototypesPage ? 'prototypes' : 'home'} prototypesPage={prototypesPage} />
      <main id="main" tabIndex={-1}>
        {prototypesPage ? <PrototypesPage /> : <HomePage />}
      </main>
      <footer className="container footer"><p><strong>{project.name}</strong> · {project.context}</p><p>{project.footer}</p><SiteLink href="/#home">Volver al inicio ↑</SiteLink></footer>
    </>
  )
}

function HomePage() {
  usePageMotion()
  return <>
        <Home />
        <About />
        <Features />
        <TechnicalSpecifications />
        <DevelopmentJourney />
        <Sustainability />
        <OurProject />
  </>
}
