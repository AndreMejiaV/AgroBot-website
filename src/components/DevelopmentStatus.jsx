import { developmentStates } from '../content/project'

export default function DevelopmentStatus({ status, evidence, hidePending = false }) {
  const confirmed = status === 'proposed' || Boolean(evidence?.trim())
  const label = confirmed && developmentStates[status]
  if (!label && hidePending) return null
  return <small>{label || 'Pendiente de documentación'}{label && evidence && <> · {evidence}</>}</small>
}
