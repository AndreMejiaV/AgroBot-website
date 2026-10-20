import ContentImage from '../components/ContentImage'
import { prototypes } from '../content/prototypes'
import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'
import SiteLink from '../components/SiteLink'

export default function DevelopmentJourney() {
  const documentedPrototypes = prototypes.filter(item => item.published === true)
  return (
    <Section content={sections.journey} tone="white">
      <ol className={styles.timeline}>
        {sections.journey.items.map((item, index) => <li key={item.title} data-future={item.future || undefined} data-reveal>
          <div className={styles.timelineMarker} aria-hidden="true">0{index + 1}</div>
          <div className={styles.timelineContent}><span className={styles.stage}>{item.status}</span><h3>{item.title}</h3><p>{item.text}</p></div>
        </li>)}
      </ol>
      <div className={styles.galleryHeading}>
        <h3 id="prototypes-title">{sections.journey.galleryTitle}</h3>
        <p>{documentedPrototypes.length ? sections.journey.galleryDescription : sections.journey.galleryPending}</p>
      </div>
      <div className={styles.gallery} role="group" aria-labelledby="prototypes-title">
        {documentedPrototypes.map(item => <div key={item.id} data-reveal><ContentImage image={item.image} alt={item.alt} title={item.title} description={item.description} date={item.date} stage={item.stage} pending /></div>)}
      </div>
      <p className="detail"><SiteLink href="/prototipos">{sections.journey.prototypesLink} <span aria-hidden="true">↗</span></SiteLink></p>
    </Section>
  )
}
