import React, { useState } from 'react'
import { scrollToSection } from '../utils/scroll'
import '../styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Переключаем мобильное меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Закрываем меню и скроллим к секции
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header id="header" className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="header-logo-dot"></span>
          <span className="header-logo-text">Artamonov Alex</span>
        </div>
        
        <nav className="header-nav">
          <button 
            onClick={() => handleNavClick('about')} 
            className="header-nav-button"
          >
            Обо мне
          </button>
          <button 
            onClick={() => handleNavClick('projects')} 
            className="header-nav-button"
          >
            Работы
          </button>
          <button 
            onClick={() => handleNavClick('skills')} 
            className="header-nav-button"
          >
            Навыки
          </button>
          <button 
            onClick={() => handleNavClick('social')}
            className="header-contact-button"
          >
            Связаться
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="header-mobile-button"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="header-mobile-menu">
          <button 
            onClick={() => handleNavClick('about')}
            className="header-mobile-nav-button"
          >
            Обо мне
          </button>
          <button 
            onClick={() => handleNavClick('projects')}
            className="header-mobile-nav-button"
          >
            Работы
          </button>
          <button 
            onClick={() => handleNavClick('skills')}
            className="header-mobile-nav-button"
          >
            Навыки
          </button>
          <button 
            onClick={() => handleNavClick('social')}
            className="header-mobile-contact-button"
          >
            Связаться
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header
