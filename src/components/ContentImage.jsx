import { useState } from 'react'
import styles from './ContentImage.module.css'

// La clave reinicia el estado si se cambia la ruta durante la edición.
export default function ContentImage({ image, ...props }) {
  const src = typeof image === 'string' ? image : image?.src
  return <ImageContent key={src || 'pending'} src={src} alt={image?.alt} {...props} />
}

function ImageContent({ src, alt, title, description, date, stage, pending = false, eager = false, className = '' }) {
  const [failed, setFailed] = useState(false)
  const available = Boolean(src?.trim()) && !failed
  if (!available && !pending) return null

  return (
    <figure className={`${styles.figure} ${className}`}>
      {available
        ? <img className={styles.image} src={src} alt={alt?.trim() || title || 'Imagen del proyecto AgroBot'} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
        : <div className={styles.pending}>Registro fotográfico pendiente</div>}
      {(title || description || date || stage) && <figcaption className={styles.caption}>
        {title && <h3>{title}</h3>}
        {(date || stage) && <p className={styles.meta}>{[date, stage].filter(Boolean).join(' · ')}</p>}
        {description && <p>{description}</p>}
      </figcaption>}
    </figure>
  )
}
