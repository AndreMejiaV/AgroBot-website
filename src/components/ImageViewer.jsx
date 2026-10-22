import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '../pages/PrototypesPage.module.css'

function SketchZoom({ image }) {
  const [zoom, setZoom] = useState(1)
  const [ratio, setRatio] = useState(4 / 3)
  const viewport = useRef(null)
  const canvas = useRef(null)
  const anchor = useRef(null)
  const drag = useRef(null)

  function changeZoom(value) {
    const area = viewport.current
    const content = canvas.current
    anchor.current = {
      x: (area.scrollLeft + area.clientWidth / 2) / content.offsetWidth,
      y: (area.scrollTop + area.clientHeight / 2) / content.offsetHeight,
    }
    setZoom(Math.min(3, Math.max(1, value)))
    // Las barras de desplazamiento limitan el área; restablecer recupera siempre el original completo.
    if (value <= 1) viewport.current?.scrollTo({ left: 0, top: 0, behavior: 'instant' })
  }

  useLayoutEffect(() => {
    if (!anchor.current) return
    let frame
    const started = performance.now()
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180
    const center = () => {
      if (!anchor.current) return
      const area = viewport.current
      area.scrollLeft = anchor.current.x * canvas.current.offsetWidth - area.clientWidth / 2
      area.scrollTop = anchor.current.y * canvas.current.offsetHeight - area.clientHeight / 2
      if (performance.now() - started < duration) frame = requestAnimationFrame(center)
      else anchor.current = null
    }
    frame = requestAnimationFrame(center)
    return () => cancelAnimationFrame(frame)
  }, [zoom])

  return <>
    <div className={styles.zoomControls} role="group" aria-label="Zoom del boceto">
      <button type="button" aria-label="Alejar boceto" onClick={() => changeZoom(zoom - .25)} disabled={zoom === 1}>−</button>
      <output aria-live="polite" aria-label="Nivel de zoom">{Math.round(zoom * 100)}%</output>
      <button type="button" aria-label="Acercar boceto" onClick={() => changeZoom(zoom + .25)} disabled={zoom === 3}>+</button>
      <button type="button" onClick={() => changeZoom(1)} disabled={zoom === 1}>Restablecer zoom</button>
    </div>
    <p className={styles.zoomHint}>Al ampliar, desplázate con el dedo, arrastra con el ratón o usa las barras. Con la imagen enfocada, las flechas desplazan el boceto.</p>
    <div ref={viewport} className={styles.zoomViewport} style={{ aspectRatio: ratio }} data-zoomed={zoom > 1 || undefined}
      role="region" aria-label="Área del boceto ampliado" tabIndex={zoom > 1 ? 0 : -1}
      onKeyDown={event => {
        const offsets = { ArrowLeft: [-60, 0], ArrowRight: [60, 0], ArrowUp: [0, -60], ArrowDown: [0, 60] }
        if (!offsets[event.key]) return
        anchor.current = null
        event.preventDefault()
        event.stopPropagation()
        viewport.current.scrollBy({ left: offsets[event.key][0], top: offsets[event.key][1], behavior: 'instant' })
      }} onPointerDown={event => {
        anchor.current = null
        if (zoom === 1 || event.pointerType !== 'mouse' || event.button !== 0) return
        drag.current = { x: event.clientX, y: event.clientY, left: event.currentTarget.scrollLeft, top: event.currentTarget.scrollTop }
        event.currentTarget.setPointerCapture(event.pointerId)
      }} onPointerMove={event => {
        if (!drag.current) return
        event.currentTarget.scrollLeft = drag.current.left + drag.current.x - event.clientX
        event.currentTarget.scrollTop = drag.current.top + drag.current.y - event.clientY
      }} onPointerUp={event => {
        drag.current = null
        if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
      }} onWheel={() => { anchor.current = null }} onLostPointerCapture={() => { drag.current = null }}>
      <div ref={canvas} className={styles.zoomCanvas} style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}>
        <img src={image.image} alt={image.alt || image.title} draggable="false" onLoad={event => setRatio(event.currentTarget.naturalWidth / event.currentTarget.naturalHeight)} />
      </div>
    </div>
  </>
}

export default function ImageViewer({ images, initialId, onSelect, onClose, returnFocusRef, enableZoom = false }) {
  const dialog = useRef(null)
  const trigger = useRef(null)
  const [index, setIndex] = useState(() => Math.max(0, images.findIndex(item => item.id === initialId)))
  const [closing, setClosing] = useState(false)
  const activeIndex = Math.min(index, images.length - 1)
  const image = images[activeIndex]

  function move(direction) {
    if (closing) return
    const next = (activeIndex + direction + images.length) % images.length
    setIndex(next)
    onSelect?.(images[next])
  }

  useEffect(() => {
    if (!closing) return
    const timer = setTimeout(onClose, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 140)
    return () => clearTimeout(timer)
  }, [closing, onClose])
  useEffect(() => {
    const element = dialog.current
    const returnFocusContainer = returnFocusRef?.current
    // Conservar el botón original también durante la doble comprobación de StrictMode.
    if (!trigger.current) trigger.current = document.activeElement
    const overflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
      if (trigger.current?.isConnected) trigger.current.focus()
      else returnFocusContainer?.querySelector('button')?.focus()
    }
  }, [returnFocusRef])

  return <dialog ref={dialog} className={styles.viewer} data-closing={closing || undefined}
    aria-labelledby="viewer-title" aria-describedby="viewer-instructions" onClose={onClose}
    onCancel={event => { event.preventDefault(); setClosing(true) }} onKeyDown={event => {
      if (event.key === 'Tab') {
        const controls = [...dialog.current.querySelectorAll('button:not(:disabled), a[href], [tabindex="0"]')]
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
        return
      }
      if (event.altKey || event.ctrlKey || event.metaKey) return
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault()
        move(event.key === 'ArrowLeft' ? -1 : 1)
      }
    }} onClick={event => {
    if (event.target === event.currentTarget) setClosing(true)
  }}>
    <div className={styles.viewerBar}>
      <h2 id="viewer-title">{image.title}</h2>
      <button type="button" onClick={() => setClosing(true)} autoFocus>Cerrar <span aria-hidden="true">×</span></button>
    </div>
    <p id="viewer-instructions" className={styles.viewerHint}>Usa las flechas para recorrer esta categoría y Escape para cerrar.</p>
    <div className={styles.viewerImage} key={image.id}>
      {enableZoom ? <SketchZoom image={image} /> : <img src={image.image} alt={image.alt || image.title} />}
    </div>
    <div className={styles.viewerNavigation} role="group" aria-label="Navegación de imágenes">
      <button type="button" aria-label="Imagen anterior" onClick={() => move(-1)} disabled={images.length < 2}>←</button>
      <p role="status" aria-live="polite">{activeIndex + 1} / {images.length}</p>
      <button type="button" aria-label="Imagen siguiente" onClick={() => move(1)} disabled={images.length < 2}>→</button>
    </div>
    {image.description?.trim() && <p className={styles.viewerDescription}>{image.description}</p>}
    <a href={image.image} target="_blank" rel="noreferrer">Abrir archivo original para ver las anotaciones ↗</a>
  </dialog>
}
