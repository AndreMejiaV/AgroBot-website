import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'

export default function Features() {
  return (
    <Section content={sections.features} tone="white">
      <ul className={styles.columns}>
        {sections.features.items.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p></li>)}
      </ul>
    </Section>
  )
}
