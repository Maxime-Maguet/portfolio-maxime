import Cursor from '@/components/ui/Cursor'
import Nav from '@/components/ui/Nav'
import Particles from '@/components/ui/Particles'
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Particles />
      <Cursor />
      <Nav />
      <main>
        <Hero />
      </main>
    </>
  )
}
