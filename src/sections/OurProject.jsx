import Section from '../components/Section'
import { sections } from '../content/project'
import { team, teamContent } from '../content/team'
import TeamAvatar from '../components/TeamAvatar'
import styles from './Sections.module.css'

export default function OurProject({ headingLevel = 2 }) {
  return <Section content={sections.ourProject} headingLevel={headingLevel}>
    <p className="detail">{sections.ourProject.detail}</p>
    {team.length > 0 && <div className={styles.teamSection}>
      <h3 id="team-title">{teamContent.title}</h3>
      <ul className={styles.team} aria-labelledby="team-title">
        {team.map(member => <li key={member.id} data-reveal>
          <TeamAvatar image={member.image} alt={member.alt} profileType={member.profileType} />
          <div>
            <h4>{member.name}</h4>
            {member.degree?.trim() && <p>{member.degree}</p>}
            {member.role?.trim() && <p>{member.role}</p>}
            {member.email?.trim() && <a href={`mailto:${member.email.trim()}`}>{member.email.trim()}</a>}
            {/^https?:\/\//i.test(member.professionalUrl || '') && <a href={member.professionalUrl} aria-label={`Perfil profesional de ${member.name}`}>Perfil profesional</a>}
          </div>
        </li>)}
      </ul>
    </div>}
  </Section>
}
