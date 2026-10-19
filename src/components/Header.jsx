import { navigation, project } from '../content/project'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#home" aria-label={`${project.name}, inicio`}>{project.name}<span>UTEC</span></a>
        <nav className={styles.nav} aria-label="Navegación principal">
          {navigation.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}
