import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    const headerOffset = document.getElementById('header').offsetHeight
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <section 
      id="hero" 
      className="relative bg-primary h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-8 pt-20"
    >
      {/* Background text "PORTFOLIO" */}
      <div className="hero-text-overlay -top-1/4 -left-1/4">PORTFOLIO</div>
      <div className="hero-text-overlay top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PORTFOLIO</div>
      <div className="hero-text-overlay bottom-0 right-0 translate-x-1/4 translate-y-1/4">PORTFOLIO</div>

      {/* Decorative elements */}
      <span className="absolute top-[10%] left-[15%] w-12 h-12 bg-accent rounded-full opacity-30 animate-pulse animate-float"></span>
      <span className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-accent rounded-full opacity-40 animate-pulse animate-float" style={{animationDelay: '0.2s'}}></span>
      <span className="absolute top-[30%] left-[40%] w-24 h-24 bg-accent rounded-xl transform rotate-45 opacity-20 animate-rotate-3d"></span>
      <span className="absolute top-[5%] right-[5%] w-6 h-6 bg-accent rounded-full opacity-50 animate-float" style={{animationDelay: '0.4s'}}></span>
      <span className="absolute bottom-[5%] left-[5%] w-10 h-10 bg-accent rounded-xl transform rotate-12 opacity-30 animate-float" style={{animationDelay: '0.6s'}}></span>
      <span className="absolute top-[60%] left-[10%] w-16 h-16 bg-accent rounded-full opacity-25 animate-float" style={{animationDelay: '0.8s'}}></span>
      <span className="absolute bottom-[15%] right-[30%] w-14 h-14 bg-accent rounded-xl transform -rotate-30 opacity-35 animate-float" style={{animationDelay: '1s'}}></span>

      <div className="absolute inset-0 pattern-dots-1"></div>
      <div className="absolute inset-0 pattern-grid-1"></div>

      <div 
        ref={heroRef}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto reveal-element"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-12">
          {/* Замените src на актуальный путь к изображению */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600 text-sm">Profile Image</span>
          </div>
          {/* Decorative circles */}
          <span className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full"></span>
          <span className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full"></span>
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="hero-text-main">
            <span className="block">PORTFOLIO</span>
            <span className="block hero-text-accent">PORTFOLIO</span>
          </h1>
          <div className="mt-4 text-white text-lg md:text-xl font-medium">
            <p>TG: <span className="text-accent">@Cofthonelev</span></p>
            <p>
              GitHub: {' '}
              <a 
                href="https://github.com/AlexArta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                AlexArta
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <button 
          onClick={scrollToAbout}
          className="text-white text-sm font-medium mb-2"
        >
          Scroll down
        </button>
        <svg 
          className="w-6 h-6 text-white scroll-down-arrow" 
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
