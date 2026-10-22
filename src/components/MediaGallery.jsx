import { useRef, useState } from 'react'
import ImageViewer from './ImageViewer'
import styles from '../pages/PrototypesPage.module.css'

// El visor y las miniaturas existentes se reutilizan en ambas páginas.
export default function MediaGallery({ group, onExpand }) {
  const [selected, setSelected] = useState(group.views[0]?.id)
  const [expanded, setExpanded] = useState(null)
  const container = useRef(null)
  const views = group.views.filter(item => item.image?.trim())
  const current = views.find(item => item.id === selected) || views[0]
  if (!current) return null
  return <section className={styles.mediaGroup} aria-labelledby={`${group.id}-heading`}>
    <div className={styles.modelHeading}><h2 id={`${group.id}-heading`}>{group.title}</h2>{group.description && <p>{group.description}</p>}</div>
    <div ref={container} className={views.length > 1 ? styles.model : styles.singleMedia}>
      <figure className={styles.mainView} key={current.id}>
        <button type="button" className={styles.imageButton} aria-label={`Ampliar ${current.title}`} onClick={() => onExpand ? onExpand(current) : setExpanded(current.id)}>
          <img src={current.image} alt={current.alt || current.title} loading="lazy" />
          <span className={styles.expand}>Ampliar imagen <span aria-hidden="true">↗</span></span>
        </button>
        <figcaption><strong>{current.title}</strong>{current.description && <p>{current.description}</p>}</figcaption>
      </figure>
      {views.length > 1 && <div className={styles.perspectives} role="group" aria-label={`Perspectivas: ${group.title}`}>
        {views.map(item => <button key={item.id} type="button" aria-label={`Mostrar ${item.title}`} aria-pressed={current.id === item.id} onClick={() => setSelected(item.id)}>
          <img src={item.image} alt="" loading="lazy" /><span className={styles.thumbnailLabel}>{item.title}</span>
        </button>)}
      </div>}
    </div>
    {expanded && <ImageViewer images={views} initialId={expanded} returnFocusRef={container} enableZoom onSelect={item => setSelected(item.id)} onClose={() => setExpanded(null)} />}
  </section>
}
