import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import { ModalProvider } from './contexts/ModalContext'
import './App.css'

function App() {
  return (
    <ModalProvider>
      <div className="text-gray-800 w-full min-h-screen">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  )
}

export default App
