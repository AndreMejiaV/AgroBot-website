import Section from '../components/Section'
import { sections } from '../content/project'
import styles from './Sections.module.css'

export default function About() {
  return <Section content={sections.about}>
    <div className={styles.aboutBody} data-reveal>
      <p className={styles.purpose}>{sections.about.detail}</p>
      <div><h3>{sections.about.processTitle}</h3>
        <ol className={styles.process}>{sections.about.process.map((step, index) => <li key={step.title}>
          <span aria-hidden="true">0{index + 1}</span><div><h4>{step.title}</h4><p>{step.text}</p></div>
        </li>)}</ol>
      </div>
    </div>
  </Section>
}
