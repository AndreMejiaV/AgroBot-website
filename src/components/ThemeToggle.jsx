import useTheme from '../hooks/useTheme'
import styles from './Header.module.css'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const label = theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'
  return <button className={styles.themeToggle} type="button" onClick={toggle} aria-label={label} title={label}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {theme === 'light' ? <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" /> : <>
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </>}
    </svg>
  </button>
}
