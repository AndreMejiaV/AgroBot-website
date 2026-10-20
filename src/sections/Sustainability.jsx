import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'

export default function Sustainability() {
  return <Section content={sections.sustainability} tone="dark">
    <div className={styles.sustainabilityBody} data-reveal>
      <div className={styles.sdg}><span>ODS</span><strong>15</strong><span>{sections.sustainability.goal}</span></div>
      <div><h3>{sections.sustainability.detailTitle}</h3><p>{sections.sustainability.detail}</p><p className={styles.environmentNote}>{sections.sustainability.caution}</p></div>
    </div>
  </Section>
}
