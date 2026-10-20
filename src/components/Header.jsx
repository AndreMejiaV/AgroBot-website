import { useEffect, useState } from 'react'
import { navigation, project } from '../content/project'
import styles from './Header.module.css'
import SiteLink from './SiteLink'

export default function Header({ prototypesPage = false }) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    if (prototypesPage || !('IntersectionObserver' in window)) return
    const visible = new Set()
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target.id) : visible.delete(entry.target.id))
      const first = navigation.find(item => visible.has(item.id))
      if (first) setActive(first.id)
    }, { rootMargin: '-18% 0px -55% 0px' })
    document.querySelectorAll('main > section').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [prototypesPage])
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <SiteLink className={styles.brand} href="/#home" aria-label={`${project.name}, inicio`}>{project.name}<span>UTEC</span></SiteLink>
        <nav className={styles.nav} aria-label="Navegación principal">
          {navigation.map(({ id, label }) => <SiteLink key={id} href={`/#${id}`} aria-current={!prototypesPage && active === id ? 'location' : undefined} onClick={() => setActive(id)}>{label}</SiteLink>)}
          <SiteLink href="/prototipos" aria-current={prototypesPage ? 'page' : undefined}>Prototipos</SiteLink>
        </nav>
      </div>
    </header>
  )
}
