import ContentImage from '../components/ContentImage'
import DevelopmentStatus from '../components/DevelopmentStatus'
import SoilConcept from '../components/SoilConcept'
import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'
import SiteLink from '../components/SiteLink'

export default function Features({ summary = false, headingLevel = 2 }) {
  const content = summary ? { ...sections.features, title: sections.features.summaryTitle, description: sections.features.summaryDescription } : sections.features
  const items = summary ? content.items.slice(0, 3) : content.items
  return (
    <Section content={content} tone="white" headingLevel={headingLevel}>
      <ul className={summary ? styles.featureSummary : styles.systems}>
        {items.map((item, index) => <li key={item.title} data-reveal>
          <div className={styles.systemMeta}><span>0{index + 1}</span><DevelopmentStatus status={item.status} evidence={item.evidence} hidePending /></div>
          <h3>{item.title}</h3><p>{item.text}</p>
          {!summary && index === 0 && <div className={styles.systemDiagram}><SoilConcept /><span>{sections.features.diagramNote}</span></div>}
          {!summary && <ContentImage image={item.image} />}
        </li>)}
      </ul>
      {summary && <p className="detail"><SiteLink href="/tecnologia">{content.technologyLink} <span aria-hidden="true">↗</span></SiteLink></p>}
    </Section>
  )
}
