import ContentImage from './ContentImage'
import styles from './Section.module.css'

export default function Section({ content, children, tone = 'light' }) {
  return (
    <section id={content.id} aria-labelledby={`${content.id}-title`} className={`${styles.section} ${styles[tone]}`}>
      <div className="container">
        <div className={styles.heading} data-reveal>
          <div><p className="eyebrow">{content.eyebrow}</p><h2 id={`${content.id}-title`}>{content.title}</h2></div>
          <p className={styles.description}>{content.description}</p>
        </div>
        {children}
        <ContentImage image={content.image} />
      </div>
    </section>
  )
}
