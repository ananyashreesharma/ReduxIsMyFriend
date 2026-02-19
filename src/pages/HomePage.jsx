import { useEffect } from 'react'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import PlaygroundSection from '../components/PlaygroundSection'
import DeepDiveSection from '../components/DeepDiveSection'
import RTKSection from '../components/RTKSection'

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])

  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <PlaygroundSection />
      <DeepDiveSection />
      <RTKSection />
    </>
  )
}
