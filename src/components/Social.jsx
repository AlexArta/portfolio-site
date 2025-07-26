import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Social.css'

const Social = () => {
  const socialRef = useScrollAnimation()

  // Мои социальные сети и контакты
  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/Coffeonelovee',
      description: '@Coffeonelovee',
      cssClass: 'social-card-telegram',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AlexArta',
      description: 'AlexArta',
      cssClass: 'social-card-github',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'HH.ru',
      url: 'https://hh.ru/resume/f4baada5ff0f1dc7330039ed1f595166693039',
      description: 'Мое резюме',
      cssClass: 'social-card-hh',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.5 2C5.5 2 3 4.5 3 7.5S5.5 13 8.5 13s5.5-2.5 5.5-5.5S11.5 2 8.5 2zm0 9c-1.93 0-3.5-1.57-3.5-3.5S6.57 4 8.5 4 12 5.57 12 7.5 10.43 11 8.5 11zM15.5 11c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:alexarta.dev@gmail.com',
      description: 'alexarta.dev@gmail.com',
      cssClass: 'social-card-email',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="social" className="social-section" ref={socialRef}>
      {/* Background decorative elements */}
      <div className="social-background">
        <div className="social-bg-decoration-1"></div>
        <div className="social-bg-decoration-2"></div>
        <div className="social-bg-decoration-3"></div>
      </div>

      <div className="social-container">
        <div className="social-header animate-on-scroll">
          <h2 className="social-title">
            Давайте свяжемся!
          </h2>
          <p className="social-description">
            Готов к новым проектам и интересным предложениям. 
            Выберите удобный способ связи!
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((link, index) => (
            <div key={link.name} className="animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-card ${link.cssClass}`}
              >
                <div className="social-card-icon">
                  {link.icon}
                </div>
                <h3 className="social-card-title">{link.name}</h3>
                <p className="social-card-description">
                  {link.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Social
