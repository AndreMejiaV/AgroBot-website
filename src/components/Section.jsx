import ContentImage from './ContentImage'
import styles from './Section.module.css'

export default function Section({ content, children, tone = 'light', headingLevel = 2 }) {
  const Heading = headingLevel === 1 ? 'h1' : 'h2'
  return (
    <section id={content.id} aria-labelledby={`${content.id}-title`} className={`${styles.section} ${styles[tone]}`}>
      <div className="container">
        <div className={styles.heading} data-reveal>
          <div><p className="eyebrow">{content.eyebrow}</p><Heading id={`${content.id}-title`}>{content.title}</Heading></div>
          <p className={styles.description}>{content.description}</p>
        </div>
        {children}
        <ContentImage image={content.image} />
      </div>
    </section>
  )
}
