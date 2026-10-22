import { useCallback, useState } from 'react'
import ComponentDetails from '../components/ComponentDetails'
import usePageMotion from '../hooks/usePageMotion'
import SiteLink from '../components/SiteLink'
import { components, componentCategories, technologyContent as content } from '../content/components'
import styles from './TechnologyPage.module.css'

function ComponentPhoto({ item }) {
  const [failed, setFailed] = useState(false)
  return <div className={styles.media}>
    {item.image?.trim() && !failed
      ? <img src={item.image} alt={item.alt || `Referencia visual de ${item.name}`} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      : <div className={styles.pending}>{content.pendingLabel}</div>}
  </div>
}

function ComponentCard({ item, selected, onSelect }) {
  const category = componentCategories.find(category => category.id === item.category)
  return <article className={styles.card} data-selected={selected || undefined}>
    <button className={styles.cardTrigger} type="button" aria-haspopup="dialog" aria-expanded={selected}
      aria-controls={selected ? 'component-details' : undefined} onClick={event => onSelect(item, event.currentTarget)}
      aria-label={`${item.name}. Cantidad contemplada: ${item.quantity}. ${content.detailLabel}`}>
      <ComponentPhoto key={item.image} item={item} />
      <div className={styles.summary}>
        <div className={styles.meta}><span>{category?.label}</span><span className={styles.quantity}>{item.quantity} {item.quantity === 1 ? 'ud.' : 'uds.'}</span></div>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.action}>{content.detailLabel}<span aria-hidden="true">+</span></span>
      </div>
    </button>
  </article>
}

export default function TechnologyPage() {
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState(null)
  const closeDetails = useCallback(() => setSelected(null), [])
  usePageMotion()
  const visible = components.filter(item => category === 'all' || item.category === category)
  const filters = [{ id: 'all', label: content.allLabel }, ...componentCategories]
  return <div className={`container ${styles.page}`}>
    <header className={styles.heading} data-reveal>
      <p className="eyebrow">{content.eyebrow}</p>
      <h1>{content.title}</h1><p className={styles.intro}>{content.introduction}</p>
    </header>
    <p className={styles.note}>{content.note}</p>
    <div className={styles.filters} role="group" aria-label={content.filterLabel}>
      {filters.map(filter => <button key={filter.id} type="button" aria-pressed={category === filter.id} aria-controls="components-catalog" onClick={() => { closeDetails(); setCategory(filter.id) }}>
        {filter.label}<span aria-hidden="true">{filter.id === 'all' ? components.length : components.filter(item => item.category === filter.id).length}</span>
      </button>)}
    </div>
    <p className={styles.resultCount} role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'material contemplado' : 'materiales contemplados'} · {category === 'all' ? content.allLabel : componentCategories.find(item => item.id === category)?.label}</p>
    <div id="components-catalog" className={styles.grid}>
      {visible.map(item => <ComponentCard key={item.id} item={item} selected={selected?.item.id === item.id}
        onSelect={(item, trigger) => setSelected(current => current?.item.id === item.id ? null : { item, trigger })} />)}
    </div>
    <section className={styles.status} aria-labelledby="development-status-title" data-reveal>
      <h2 id="development-status-title">{content.statusTitle}</h2>
      <div><p>{content.statusText}</p><SiteLink href="/prototipos">{content.prototypesLink} ↗</SiteLink></div>
    </section>
    {selected && <ComponentDetails key={selected.item.id} item={selected.item} trigger={selected.trigger} onClose={closeDetails} />}
  </div>
}
