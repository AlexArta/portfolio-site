import React, { useEffect, useRef } from 'react'
import RevealElement from './RevealElement'

const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-8 md:py-16 px-4 md:px-8 bg-gray-50 w-full flex flex-col items-center overflow-hidden"
    >
      <h2 className="section-title-bg top-1/2 -translate-y-1/2">HELLO</h2>
      
      {/* Decorative elements */}
      <span className="absolute top-[5%] right-[10%] w-16 h-16 bg-accent rounded-xl transform rotate-12 opacity-30 animate-float" style={{animationDelay: '0.1s'}}></span>
      <span className="absolute bottom-[5%] left-[10%] w-10 h-10 bg-accent rounded-full opacity-20 animate-float" style={{animationDelay: '0.3s'}}></span>
      <span className="absolute top-[30%] left-[5%] w-8 h-8 bg-accent rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.2s'}}></span>
      <span className="absolute bottom-[30%] right-[5%] w-12 h-12 bg-accent rounded-xl transform rotate-6 opacity-25 animate-float" style={{animationDelay: '0.5s'}}></span>
      <span className="absolute top-[70%] left-[20%] w-14 h-14 bg-accent rounded-full opacity-30 animate-float" style={{animationDelay: '0.7s'}}></span>
      <span className="absolute top-[15%] right-[30%] w-9 h-9 bg-accent rounded-xl transform -rotate-20 opacity-20 animate-float" style={{animationDelay: '0.9s'}}></span>
      
      <div className="absolute inset-0 pattern-triangle-1"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 pt-12">
        <RevealElement className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            HELLO,<br />I'M ALEX!
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Я стремлюсь занять позицию Junior Frontend Developer, где смогу применить свои навыки в проектах. 
            Весь мой фокус сосредоточен на профессиональном освоении и создании современных веб-приложений.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Мой путь в разработке начался с глубокого изучения основ HTML, CSS и JavaScript, а затем перешел к освоению 
            современных фреймворков, таких как React. Я постоянно совершенствую свои навыки, слежу за новыми тенденциями 
            и готов к новым вызовам.
          </p>

          {/* Contact Information */}
          <RevealElement className="relative bg-gradient-to-r from-accent/10 to-accent/5 p-4 mb-6 text-left rounded-xl border border-accent/20 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full transform translate-x-8 -translate-y-8"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h4 className="text-xl font-semibold text-accent">Контакты</h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Email: scorpionsasa65@gmail.com
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Телефон: +7 (XXX) XXX-XX-XX
                </p>
              </div>
            </div>
          </RevealElement>

        </RevealElement>

        <RevealElement className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-xl mt-8 lg:mt-0">
          {/* Replace with actual photo path */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-xl">
            <span className="text-gray-600 text-sm">Alex Photo</span>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl transform rotate-12 -z-10"></div>
        </RevealElement>
      </div>
    </section>
  )
}

export default About
