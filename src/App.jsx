import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Social from './components/Social'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="text-gray-800 w-full min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Social />
      <Footer />
    </div>
  )
}

export default App
