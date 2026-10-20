import { useEffect } from 'react'

// El contenido siempre es visible: solo se anima al entrar, nunca se oculta por CSS.
export default function usePageMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return
    const animations = new Map()
    const armed = new WeakSet()
    const elements = [...document.querySelectorAll('[data-reveal]')]
    elements.forEach(element => armed.add(element))
    // Rearmar solo tras salir de una zona más amplia que la ventana evita
    // repeticiones por pequeños cambios de intersección cerca de sus bordes.
    const exitObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) return
        armed.add(entry.target)
        animations.get(entry.target)?.cancel()
      })
    }, { rootMargin: '120px 0px', threshold: 0 })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || !armed.has(entry.target)) return
        armed.delete(entry.target)
        if (preference.matches) return
        animations.get(entry.target)?.cancel()
        const siblings = [...entry.target.parentElement.children].filter(element => element.hasAttribute('data-reveal'))
        const delay = Math.min(Math.max(0, siblings.indexOf(entry.target)), 3) * 90
        const animation = entry.target.animate(
          [{ opacity: .5, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 1200, delay, fill: 'backwards', easing: 'cubic-bezier(.22,.61,.36,1)' },
        )
        animations.set(entry.target, animation)
        const release = () => {
          if (animations.get(entry.target) === animation) animations.delete(entry.target)
        }
        animation.finished.then(release).catch(release)
      })
    }, { rootMargin: '-32px 0px', threshold: 0 })
    elements.forEach(element => {
      exitObserver.observe(element)
      observer.observe(element)
    })
    const stopMotion = () => {
      if (preference.matches) animations.forEach(animation => animation.cancel())
    }
    preference.addEventListener('change', stopMotion)
    return () => {
      observer.disconnect()
      exitObserver.disconnect()
      animations.forEach(animation => animation.cancel())
      preference.removeEventListener('change', stopMotion)
    }
  }, [])
}
