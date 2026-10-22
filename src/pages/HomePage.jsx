import Home from '../sections/Home'
import About from '../sections/About'
import Features from '../sections/Features'
import DevelopmentJourney from '../sections/DevelopmentJourney'
import Sustainability from '../sections/Sustainability'
import usePageMotion from '../hooks/usePageMotion'

export default function HomePage() {
  usePageMotion()
  return <>
    <Home />
    <About />
    <Features summary />
    <DevelopmentJourney />
    <Sustainability />
  </>
}
