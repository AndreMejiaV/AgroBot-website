import Section from '../components/Section'
import DevelopmentStatus from '../components/DevelopmentStatus'
import { sections } from '../content/project'
import { hasUsefulValue, specificationGroups } from '../content/specifications'
import styles from './Sections.module.css'

export default function TechnicalSpecifications() {
  const visibleGroups = specificationGroups
    .map(group => ({ ...group, items: group.items.filter(item => hasUsefulValue(item.value)) }))
    .filter(group => group.items.length > 0)

  return (
    <Section content={sections.specifications}>
      {visibleGroups.length === 0 ? <p className="detail">Estamos preparando la documentación técnica de AgroBot.</p> : <>
      <p className={styles.legend}>Propuesta: objetivo de diseño. Implementada: documentada en un prototipo. Verificada: respaldada por pruebas. La implementación no implica validación.</p>
      <div className={styles.specGroups}>
        {visibleGroups.map(group => <div key={group.id}>
          <h3>{group.title}</h3>
          <dl className={styles.specifications}>
            {group.items.map(item => <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}<DevelopmentStatus status={item.status} evidence={item.evidence} hidePending /></dd>
            </div>)}
          </dl>
        </div>)}
      </div>
      </>}
    </Section>
  )
}
