import About from '../components/About'
import Contacto from '../components/Contacto'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import Portfolio from '../components/Portfolio'

export default function Home () {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Contacto />
    </Layout>
  )
}
