import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Features from './sections/Features'
import TechnicalSpecifications from './sections/TechnicalSpecifications'
import DevelopmentJourney from './sections/DevelopmentJourney'
import Sustainability from './sections/Sustainability'
import OurProject from './sections/OurProject'
import { project } from './content/project'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Home />
        <About />
        <Features />
        <TechnicalSpecifications />
        <DevelopmentJourney />
        <Sustainability />
        <OurProject />
      </main>
      <footer className="container footer"><p><strong>{project.name}</strong> · {project.context}</p><p>{project.footer}</p><a href="#home">Volver al inicio ↑</a></footer>
    </>
  )
}
