import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="about">
          <h2>About</h2>
        </section>

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="timeline">
          <h2>Timeline</h2>
        </section>

        <section id="notes">
          <h2>Notes</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  )
}

export default App
