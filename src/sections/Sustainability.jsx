import Section from '../components/Section'
import { sections } from '../content/project'

export default function Sustainability() {
  return <Section content={sections.sustainability} tone="dark"><p className="detail">{sections.sustainability.detail}</p></Section>
}
