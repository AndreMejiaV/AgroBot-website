import { useSyncExternalStore } from 'react'

const getTheme = () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
const notify = () => window.dispatchEvent(new Event('agrobot-theme-change'))

function subscribe(callback) {
  const storageChanged = event => {
    if (event.key !== 'agrobot-theme' && event.key !== null) return
    document.documentElement.dataset.theme = event.newValue === 'dark' ? 'dark' : 'light'
    notify()
  }
  window.addEventListener('agrobot-theme-change', callback)
  window.addEventListener('storage', storageChanged)
  return () => {
    window.removeEventListener('agrobot-theme-change', callback)
    window.removeEventListener('storage', storageChanged)
  }
}

export default function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme)
  const toggle = () => {
    const next = getTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { window.localStorage.setItem('agrobot-theme', next) } catch { /* Sigue funcionando sin almacenamiento. */ }
    notify()
  }
  return { theme, toggle }
}
