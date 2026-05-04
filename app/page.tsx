import Cursor from '@/components/ui/Cursor'
import Nav from '@/components/ui/Nav'
import Particles from '@/components/ui/Particles'
import Hero from '@/components/sections/Hero'
import Parcours from '@/components/sections/Parcours'
import Projets from '@/components/sections/Projets'

export default function Home() {
  return (
    <>
      <Particles />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Parcours />
        <Projets />
      </main>
    </>
  )
}
