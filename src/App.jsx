import { useEffect } from 'react'
import Header from './components/Header'
import { navigation, project } from './content/project'
import { usePathname } from './navigation'
import SiteLink from './components/SiteLink'
import PrototypesPage from './pages/PrototypesPage'
import HomePage from './pages/HomePage'
import TechnologyPage from './pages/TechnologyPage'
import TeamPage from './pages/TeamPage'

const pageComponents = { '/': HomePage, '/prototipos': PrototypesPage, '/tecnologia': TechnologyPage, '/equipo': TeamPage }

export default function App() {
  const pathname = usePathname()
  const path = pathname.replace(/\/+$/, '') || '/'
  const route = navigation.find(item => item.path === path) || navigation[0]
  const Page = pageComponents[route.path]
  useEffect(() => {
    document.title = route.title
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1))
      if (target) target.scrollIntoView()
      else window.scrollTo({ top: 0, behavior: 'instant' })
      document.getElementById('main')?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, route.title])
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header key={route.path} currentPath={route.path} />
      <main id="main" tabIndex={-1}>
        <Page key={route.path} />
      </main>
      <footer className="container footer"><p><strong>{project.name}</strong> · {project.context}</p><p>{project.footer}</p><SiteLink href="/#home">Volver al inicio ↑</SiteLink></footer>
    </>
  )
}
