import OurProject from '../sections/OurProject'
import usePageMotion from '../hooks/usePageMotion'

export default function TeamPage() {
  usePageMotion()
  return <OurProject headingLevel={1} />
}
