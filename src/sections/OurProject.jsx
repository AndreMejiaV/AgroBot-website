import Section from '../components/Section'
import { sections } from '../content/project'

export default function OurProject() {
  return <Section content={sections.ourProject}><p className="detail">{sections.ourProject.detail}</p></Section>
}
