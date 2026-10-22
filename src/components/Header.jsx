import { useEffect, useRef, useState } from 'react'
import { navigation, project } from '../content/project'
import styles from './Header.module.css'
import SiteLink from './SiteLink'
import ThemeToggle from './ThemeToggle'

export default function Header({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const header = useRef(null)
  const toggle = useRef(null)
  useEffect(() => {
    if (!menuOpen) return
    const outside = event => {
      if (!header.current?.contains(event.target)) setMenuOpen(false)
    }
    const escape = event => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      toggle.current?.focus()
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [menuOpen])
  return (
    <header ref={header} className={styles.header} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false)
    }}>
      <div className={`container ${styles.inner}`}>
        <SiteLink className={styles.brand} href="/" aria-label={`${project.name}, inicio`}>
          <svg className={styles.brandIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="9" />
            <ellipse cx="12" cy="12" rx="4" ry="9" />
            <path d="M3 12h18" />
          </svg>
          {project.name}
        </SiteLink>
        <button ref={toggle} className={styles.menuToggle} type="button" aria-expanded={menuOpen}
          aria-controls="main-navigation" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen(open => !open)}>Menú <span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
        <nav id="main-navigation" className={styles.nav} data-open={menuOpen || undefined} aria-label="Navegación principal">
          {navigation.map(({ path, label }) => <SiteLink key={path} href={path}
            aria-current={currentPath === path ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</SiteLink>)}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
