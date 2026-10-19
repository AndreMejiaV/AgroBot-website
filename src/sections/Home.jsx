import { project, sections } from '../content/project'
import styles from './Home.module.css'

export default function Home() {
  const content = sections.home
  return (
    <section id={content.id} aria-labelledby="home-title" className={styles.home}>
      <div className="container">
        <div className={styles.meta}><p className="eyebrow">{project.context}</p><span className={styles.status}>{project.status}</span></div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 id="home-title">{content.title}</h1>
        <p className={styles.description}>{content.description}</p>
        <a className={styles.link} href="#about">{content.cta} <span aria-hidden="true">↗</span></a>
        <p className={styles.note}>{content.note}</p>
        {content.image && <img className={styles.image} src={content.image.src} alt={content.image.alt} />}
      </div>
    </section>
  )
}
