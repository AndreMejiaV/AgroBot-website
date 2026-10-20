import { useRef, useState } from 'react'
import SiteLink from '../components/SiteLink'
import ImageViewer from '../components/ImageViewer'
import { physicalModel, prototypePage as content, sketches } from '../content/prototypes'
import styles from './PrototypesPage.module.css'

function PrototypeImage({ item, onExpand }) {
  const [failed, setFailed] = useState(false)
  if (!item.image?.trim() || failed) return <p className={styles.pending}>{content.pendingImage}</p>
  return <button className={styles.imageButton} type="button" onClick={() => onExpand(item)} aria-label={`Ampliar ${item.title}`}>
    <img src={item.image} alt={item.alt || item.title} onError={() => setFailed(true)} />
    <span className={styles.expand}>Ampliar imagen <span aria-hidden="true">↗</span></span>
  </button>
}

function Thumbnail({ item }) {
  const [failed, setFailed] = useState(false)
  return item.image?.trim() && !failed
    ? <img src={item.image} alt="" onError={() => setFailed(true)} />
    : <span aria-hidden="true">{item.title}</span>
}

export default function PrototypesPage() {
  const [category, setCategory] = useState('2d')
  const [selectedView, setSelectedView] = useState(0)
  const [expanded, setExpanded] = useState(null)
  const tabs = useRef([])
  const views = physicalModel.views
  const current = views[selectedView] || views[0]
  const categories = [{ id: '2d', label: content.sketchesLabel }, { id: '3d', label: content.modelLabel }]

  function handleTabKey(event, index) {
    let next
    if (event.key === 'ArrowRight') next = (index + 1) % categories.length
    else if (event.key === 'ArrowLeft') next = (index + categories.length - 1) % categories.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = categories.length - 1
    else return
    event.preventDefault()
    setCategory(categories[next].id)
    tabs.current[next].focus()
  }

  return <div className={`container ${styles.page}`}>
    <SiteLink className={styles.back} href="/#home">← Volver a Inicio</SiteLink>
    <header className={styles.heading}>
      <p className="eyebrow">AgroBot / Desarrollo conceptual</p>
      <h1>{content.title}</h1>
      <p>{content.introduction}</p>
    </header>
    <div className={styles.tabs} role="tablist" aria-label="Tipo de prototipo">
      {categories.map((item, index) => <button key={item.id} ref={element => { tabs.current[index] = element }}
        id={`tab-${item.id}`} role="tab" type="button" aria-selected={category === item.id}
        aria-controls="prototype-panel" tabIndex={category === item.id ? 0 : -1}
        onClick={() => setCategory(item.id)} onKeyDown={event => handleTabKey(event, index)}>{item.label}</button>)}
    </div>
    <div key={category} id="prototype-panel" role="tabpanel" aria-labelledby={`tab-${category}`} tabIndex={0} className={styles.panel}>
      {category === '2d' ? <>
        <p className={styles.introduction}>{content.sketchesIntroduction}</p>
        <div className={styles.sketches}>
          {sketches.map(item => <article key={item.id}>
            <h2>{item.title}</h2>
            <PrototypeImage key={item.image || item.id} item={item} onExpand={setExpanded} />
            {item.description?.trim() && <p>{item.description}</p>}
          </article>)}
        </div>
      </> : <>
        <div className={styles.modelHeading}><h2>{physicalModel.title}</h2><p>{content.modelDescription}</p></div>
        {current && <div className={styles.model}>
          <figure className={styles.mainView} key={current.id}>
            <PrototypeImage key={current.image || current.id} item={current} onExpand={setExpanded} />
            <figcaption>{current.title}</figcaption>
          </figure>
          <div className={styles.perspectives} role="group" aria-label="Perspectivas de la misma maqueta">
            {views.map((item, index) => <button key={item.id} type="button" aria-pressed={selectedView === index}
              aria-label={`Mostrar ${item.title} de la maqueta`} onClick={() => setSelectedView(index)}>
              <Thumbnail key={item.image || item.id} item={item} />
              <span className={styles.thumbnailLabel}>{item.title}</span>
            </button>)}
          </div>
        </div>}
      </>}
    </div>
    {expanded && <ImageViewer image={expanded} onClose={() => setExpanded(null)} />}
  </div>
}
