import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import SelectedWork from './components/sections/SelectedWork'
import Timeline from './components/sections/Timeline'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Timeline />
      </main>
      <Footer />
    </>
  )
}

export default App
