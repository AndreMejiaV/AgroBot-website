import ContentImage from '../components/ContentImage'
import { prototypes } from '../content/prototypes'
import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'

export default function DevelopmentJourney() {
  return (
    <Section content={sections.journey} tone="white">
      <ol className={`${styles.columns} ${styles.journey}`}>
        {sections.journey.items.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p><span className={styles.stage}>{item.status}</span></li>)}
      </ol>
      <div className={styles.galleryHeading}>
        <h3 id="prototypes-title">{sections.journey.galleryTitle}</h3>
        <p>{sections.journey.galleryDescription}</p>
      </div>
      <div className={styles.gallery} role="group" aria-labelledby="prototypes-title">
        {prototypes.map(item => <ContentImage key={item.id} image={item.image} alt={item.alt} title={item.title} description={item.description} date={item.date} stage={item.stage} pending />)}
      </div>
    </Section>
  )
}
