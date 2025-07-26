import React from 'react'
import { scrollToSection } from '../utils/scroll'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import firstPhotoHero from '../assets/first-photo-hero.jpg'
import '../styles/Hero.css'

const Hero = () => {
  // Используем хук для анимации при скролле
  const heroRef = useScrollAnimation()
  
  // Мои контакты
  const contacts = [
    { label: 'TG', value: '@Coffeonelovee', isLink: false },
    { label: 'GitHub', value: 'AlexArta', url: 'https://github.com/AlexArta' },
    { label: 'HH.ru', value: 'Мое резюме', url: 'https://hh.ru/resume/f4baada5ff0f1dc7330039ed1f595166693039' }
  ]

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* Background text "PORTFOLIO" */}
      <div className="hero-text-overlay -top-1/4 -left-1/4">PORTFOLIO</div>
      <div className="hero-text-overlay top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PORTFOLIO</div>
      <div className="hero-text-overlay bottom-0 right-0 translate-x-1/4 translate-y-1/4">PORTFOLIO</div>

      {/* Decorative elements */}
      <span className="hero-decoration hero-decoration-1"></span>
      <span className="hero-decoration hero-decoration-2" style={{animationDelay: '0.2s'}}></span>
      <span className="hero-decoration hero-decoration-square hero-decoration-3"></span>
      <span className="hero-decoration hero-decoration-4" style={{animationDelay: '0.4s'}}></span>
      <span className="hero-decoration hero-decoration-square hero-decoration-5" style={{animationDelay: '0.6s'}}></span>
      <span className="hero-decoration hero-decoration-6" style={{animationDelay: '0.8s'}}></span>
      <span className="hero-decoration hero-decoration-square hero-decoration-7" style={{animationDelay: '1s'}}></span>

      <div className="absolute inset-0 pattern-dots-1"></div>
      <div className="absolute inset-0 pattern-grid-1"></div>

      <div className="hero-content animate-on-scroll">
        <div className="hero-image-container">
          <img 
            src={firstPhotoHero} 
            alt="Александер - Frontend Developer" 
            className="hero-image"
          />
          {/* Decorative circles */}
          <span className="hero-image-dot-1"></span>
          <span className="hero-image-dot-2"></span>
        </div>
        
        <div className="hero-text-container">
          <h1 className="hero-text-main">
            <span className="block">PORTFOLIO</span>
            <span className="block hero-text-accent">PORTFOLIO</span>
          </h1>
          <div className="hero-contacts">
            {contacts.map((contact, index) => (
              <p key={index} className="hero-contact-item">
                {contact.label}: {' '}
                {contact.url ? (
                  <a 
                    href={contact.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hero-contact-link"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-accent">{contact.value}</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-down">
        <button 
          onClick={() => scrollToSection('about')}
          className="hero-scroll-button"
        >
          Scroll down
        </button>
        <svg 
          className="hero-scroll-icon scroll-down-arrow" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
