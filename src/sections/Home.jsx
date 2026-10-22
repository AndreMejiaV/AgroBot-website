import HeroBackdrop from '../components/HeroBackdrop'
import SoilConcept from '../components/SoilConcept'
import { project, sections } from '../content/project'
import styles from './Home.module.css'

export default function Home() {
  const content = sections.home
  return (
    <section id={content.id} aria-labelledby="home-title" className={styles.home}>
      <HeroBackdrop image={content.image} />
      <div className="container">
        <div className={styles.meta}><p className="eyebrow">{project.context}</p><span className={styles.status}>{project.status}</span></div>
        <div className={styles.layout}>
          <div className={styles.intro} data-reveal>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 id="home-title">{content.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h1>
            <p className={styles.description}>{content.description}</p>
            <div className={styles.actions}>
              <a className={styles.link} href="#about">{content.cta} <span aria-hidden="true">↗</span></a>
              <a className={styles.secondary} href="#development-journey">{content.secondaryCta} <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className={styles.visual} data-reveal>
            <div className={styles.concept}>
              <p className={styles.visualLabel}>{content.visualTitle}</p>
              <SoilConcept />
              <p className={styles.visualNote}>{content.visualNote}</p>
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          <p className={styles.note}>{content.note}</p>
          <dl>{content.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </div>
        <p className={styles.contextNote}>
          {content.image?.src?.trim() ? content.projectImageNote : <>
            {content.contextImageNote} · <a href={content.contextImageSource}>Tim Mossholder / Unsplash</a>
          </>}
        </p>
      </div>
    </section>
  )
}
