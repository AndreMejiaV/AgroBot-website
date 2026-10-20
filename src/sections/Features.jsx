import ContentImage from '../components/ContentImage'
import DevelopmentStatus from '../components/DevelopmentStatus'
import SoilConcept from '../components/SoilConcept'
import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'

export default function Features() {
  return (
    <Section content={sections.features} tone="white">
      <ul className={styles.systems}>
        {sections.features.items.map((item, index) => <li key={item.title} data-reveal>
          <div className={styles.systemMeta}><span>0{index + 1}</span><DevelopmentStatus status={item.status} evidence={item.evidence} hidePending /></div>
          <h3>{item.title}</h3><p>{item.text}</p>
          {index === 0 && <div className={styles.systemDiagram}><SoilConcept /><span>{sections.features.diagramNote}</span></div>}
          <ContentImage image={item.image} />
        </li>)}
      </ul>
    </Section>
  )
}
