import { useSyncExternalStore } from 'react'

const subscribe = callback => {
  window.addEventListener('popstate', callback)
  return () => window.removeEventListener('popstate', callback)
}

export function usePathname() {
  return useSyncExternalStore(subscribe, () => window.location.pathname)
}

export function navigate(href) {
  const url = new URL(href, window.location.href)
  const samePage = url.pathname === window.location.pathname
  if (url.href === window.location.href) {
    window.scrollTo({ top: 0 })
    return
  }
  window.history.pushState(null, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
  if (samePage) {
    const target = document.getElementById(url.hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0 })
  }
}
