import React, { useState } from 'react'
import { useModalContext } from '../contexts/ModalContext'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openModal } = useModalContext()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    const headerOffset = document.getElementById('header').offsetHeight
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    
    closeMobileMenu()
  }

  return (
    <header id="header" className="fixed top-0 left-0 w-full bg-primary p-4 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-accent rounded-full"></span>
          <span className="text-white text-lg font-semibold">Artamonov Alex</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-white text-lg font-medium">
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-accent transition-colors duration-300"
          >
            Обо мне
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="hover:text-accent transition-colors duration-300"
          >
            Работы
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="hover:text-accent transition-colors duration-300"
          >
            Навыки
          </button>
          <button 
            onClick={openModal}
            className="px-4 py-2 bg-accent rounded-lg hover:bg-accent-dark transition-colors duration-300"
          >
            Связаться
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="absolute top-full right-4 bg-primary p-4 rounded-lg shadow-lg md:hidden z-20 w-48 text-right">
          <button 
            onClick={() => scrollToSection('about')}
            className="block text-white py-2 hover:text-accent transition-colors duration-300 w-full text-right"
          >
            Обо мне
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="block text-white py-2 hover:text-accent transition-colors duration-300 w-full text-right"
          >
            Работы
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="block text-white py-2 hover:text-accent transition-colors duration-300 w-full text-right"
          >
            Навыки
          </button>
          <button 
            onClick={() => {
              openModal()
              closeMobileMenu()
            }}
            className="block w-full text-right text-white py-2 px-4 bg-accent rounded-lg hover:bg-accent-dark transition-colors duration-300 mt-2"
          >
            Связаться
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header
