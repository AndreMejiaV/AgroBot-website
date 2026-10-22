import { useState } from 'react'
import styles from '../sections/Home.module.css'

export default function HeroBackdrop({ image }) {
  const src = image?.src?.trim() || import.meta.env.VITE_HERO_FIELD_CONTEXT
  return src ? <Backdrop key={src} src={src} /> : null
}

function Backdrop({ src }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return <div className={styles.background} aria-hidden="true">
    <img className={styles.backdrop} src={src} alt="" fetchPriority="high" decoding="async" onError={() => setFailed(true)} />
  </div>
}
