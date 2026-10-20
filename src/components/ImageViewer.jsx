import { useEffect, useRef } from 'react'
import styles from '../pages/PrototypesPage.module.css'

export default function ImageViewer({ image, onClose }) {
  const dialog = useRef(null)
  const trigger = useRef(null)
  useEffect(() => {
    const element = dialog.current
    // Conservar el botón original también durante la doble comprobación de StrictMode.
    if (!trigger.current) trigger.current = document.activeElement
    const overflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
      trigger.current?.focus()
    }
  }, [])

  return <dialog ref={dialog} className={styles.viewer} aria-labelledby="viewer-title" onClose={onClose} onClick={event => {
    if (event.target === event.currentTarget) onClose()
  }}>
    <div className={styles.viewerBar}>
      <h2 id="viewer-title">{image.title}</h2>
      <button type="button" onClick={onClose} autoFocus>Cerrar <span aria-hidden="true">×</span></button>
    </div>
    <img src={image.image} alt={image.alt || image.title} />
    <a href={image.image} target="_blank" rel="noreferrer">Abrir archivo original para ver las anotaciones ↗</a>
  </dialog>
}
