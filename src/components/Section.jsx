import styles from './Section.module.css'

export default function Section({ content, children, tone = 'light' }) {
  return (
    <section id={content.id} aria-labelledby={`${content.id}-title`} className={`${styles.section} ${styles[tone]}`}>
      <div className="container">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-title`}>{content.title}</h2>
        <p className={styles.description}>{content.description}</p>
        {children}
        {content.image && <img className={styles.image} src={content.image.src} alt={content.image.alt} loading="lazy" />}
      </div>
    </section>
  )
}
