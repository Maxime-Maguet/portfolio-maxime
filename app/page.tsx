import Cursor from '@/components/ui/Cursor'
import Nav from '@/components/ui/Nav'
import Particles from '@/components/ui/Particles'
import Hero from '@/components/sections/Hero'
import Parcours from '@/components/sections/Parcours'
import Projets from '@/components/sections/Projets'
import Stack from '@/components/sections/Stack'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

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
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
