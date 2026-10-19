import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'

export default function TechnicalSpecifications() {
  return (
    <Section content={sections.specifications}>
      <dl className={styles.specifications}>
        {sections.specifications.items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </Section>
  )
}
