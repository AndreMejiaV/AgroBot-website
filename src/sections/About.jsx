import Section from '../components/Section'
import { sections } from '../content/project'

export default function About() {
  return <Section content={sections.about}><p className="detail">{sections.about.detail}</p></Section>
}
