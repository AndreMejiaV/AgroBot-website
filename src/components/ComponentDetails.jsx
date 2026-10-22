import { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import SiteLink from './SiteLink'
import { componentCategories, technologyContent as content } from '../content/components'
import styles from './ComponentDetails.module.css'

export default function ComponentDetails({ item, trigger, onClose }) {
  const panel = useRef(null)
  const closeButton = useRef(null)
  const category = componentCategories.find(category => category.id === item.category)

  useLayoutEffect(() => {
    const element = panel.current
    const smallScreen = window.matchMedia('(max-width: 1000px)')
    let mobile = null
    let unlock = null
    let frame

    function lockPage() {
      const body = document.body
      const root = document.documentElement
      const saved = { position: body.style.position, top: body.style.top, left: body.style.left, width: body.style.width, overflow: body.style.overflow, gutter: root.style.scrollbarGutter }
      const x = window.scrollX
      const y = window.scrollY
      const width = body.getBoundingClientRect().width
      root.style.scrollbarGutter = 'stable'
      Object.assign(body.style, { position: 'fixed', top: `${-y}px`, left: `${-x}px`, width: `${width}px`, overflow: 'hidden' })
      return () => {
        Object.assign(body.style, { position: saved.position, top: saved.top, left: saved.left, width: saved.width, overflow: saved.overflow })
        root.style.scrollbarGutter = saved.gutter
        window.scrollTo({ left: x, top: y, behavior: 'instant' })
      }
    }

    function positionPanel() {
      if (mobile) return
      const anchor = trigger.getBoundingClientRect()
      const navbar = document.querySelector('header')?.getBoundingClientRect()
      const topLimit = Math.max(12, (navbar?.bottom || 0) + 12)
      if (anchor.bottom <= topLimit || anchor.top >= window.innerHeight) {
        onClose()
        return
      }
      const width = Math.min(360, window.innerWidth - 32)
      element.style.width = `${width}px`
      element.style.maxHeight = `${Math.max(80, window.innerHeight - topLimit - 12)}px`
      const right = window.innerWidth - anchor.right - 28
      const left = anchor.left - 28
      const openRight = right >= width || right >= left
      const target = openRight ? anchor.right + 12 : anchor.left - width - 12
      element.dataset.side = openRight ? 'right' : 'left'
      element.style.left = `${Math.max(16, Math.min(target, window.innerWidth - width - 16))}px`
      element.style.top = `${Math.max(topLimit, Math.min(anchor.top, window.innerHeight - element.offsetHeight - 12))}px`
    }

    function configure() {
      if (mobile !== smallScreen.matches) {
        unlock?.()
        unlock = null
        if (element.open) element.close()
        mobile = smallScreen.matches
        element.dataset.mode = mobile ? 'sheet' : 'side'
        element.setAttribute('aria-modal', String(mobile))
        if (mobile) {
          element.style.removeProperty('left')
          element.style.removeProperty('top')
          element.style.removeProperty('width')
          element.style.removeProperty('max-height')
          unlock = lockPage()
          element.showModal()
        } else element.show()
        closeButton.current.focus({ preventScroll: true })
      }
      positionPanel()
    }

    function schedulePosition(event) {
      if (event?.type === 'scroll' && element.contains(event.target)) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(positionPanel)
    }

    function resize() {
      if (mobile) document.body.style.width = `${document.documentElement.clientWidth}px`
      configure()
    }

    function outside(event) {
      if (!element.contains(event.target) && !trigger.contains(event.target)) {
        if (!event.target.closest?.('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')) event.preventDefault()
        onClose()
      }
    }

    function keydown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
      if (mobile && event.key === 'Tab') {
        const controls = [...element.querySelectorAll('button:not(:disabled), a[href]')]
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }

    configure()
    const observer = new ResizeObserver(schedulePosition)
    observer.observe(element)
    observer.observe(trigger)
    document.addEventListener('pointerdown', outside, true)
    document.addEventListener('keydown', keydown)
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', schedulePosition, true)
    window.visualViewport?.addEventListener('resize', resize)
    smallScreen.addEventListener('change', configure)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('pointerdown', outside, true)
      document.removeEventListener('keydown', keydown)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', schedulePosition, true)
      window.visualViewport?.removeEventListener('resize', resize)
      smallScreen.removeEventListener('change', configure)
      if (element.open) element.close()
      unlock?.()
      if (trigger.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [trigger, onClose])

  return createPortal(<dialog ref={panel} id="component-details" className={styles.panel} aria-labelledby="component-details-title"
    onCancel={event => { event.preventDefault(); onClose() }} onPointerDown={event => {
      if (event.target !== event.currentTarget) return
      const rect = event.currentTarget.getBoundingClientRect()
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
        event.preventDefault()
        onClose()
      }
    }}>
    <header className={styles.header}>
      <div><h2 id="component-details-title">{item.name}</h2><p>{category?.label} · {item.quantity} {item.quantity === 1 ? 'unidad' : 'unidades'}</p></div>
      <button ref={closeButton} type="button" onClick={onClose} aria-label={content.closeDetailsLabel}>Cerrar <span aria-hidden="true">×</span></button>
    </header>
    <div className={styles.body} tabIndex={0} aria-label={content.detailsRegionLabel}>
      <section><h3>{content.functionLabel}</h3><p>{item.description}</p></section>
      {item.referenceNote && <section><h3>{content.referenceHeading}</h3><p>{item.referenceNote}</p></section>}
      {item.image && item.attribution && <section>
        <h3>{content.creditsHeading}</h3>
        {item.attribution.type === 'project' ? <>
          <p>{item.attribution.label}</p>
          <SiteLink href={item.attribution.source} onClick={onClose}>{item.attribution.sourceLabel} ↗</SiteLink>
        </> : <>
          <p>{content.referenceLabel} · {item.attribution.author}</p>
          <div className={styles.links}>
            <a href={item.attribution.source} target="_blank" rel="noreferrer">Fuente ↗</a>
            <a href={item.attribution.licenseUrl} target="_blank" rel="noreferrer">{item.attribution.license} ↗</a>
            <a href={item.attribution.original} target="_blank" rel="noreferrer">Original ↗</a>
          </div>
          <p className={styles.imageNote}>{content.imageUseNote}</p>
        </>}
      </section>}
    </div>
  </dialog>, document.body)
}
