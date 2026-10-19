import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'

export default function DevelopmentJourney() {
  return (
    <Section content={sections.journey} tone="white">
      <ol className={`${styles.columns} ${styles.journey}`}>
        {sections.journey.items.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p><span className={styles.stage}>{item.status}</span></li>)}
      </ol>
    </Section>
  )
}
