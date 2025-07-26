import React, { useEffect, useRef, useState } from 'react'
import '../styles/SkillBars.css' // Import the CSS file

const SkillBars = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  const containerRef = useRef(null)

  const skillsData = [
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 70 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Git", level: 65 },
    { name: "Figma", level: 55 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isAnimated) {
            setIsAnimated(true)
            // Анимируем полосы навыков
            setTimeout(() => {
              const skillBars = entry.target.querySelectorAll('.skill-bar-fill')
              skillBars.forEach((bar) => {
                const level = bar.getAttribute('data-level')
                if (level) {
                  bar.style.width = `${level}%`
                  bar.classList.add('active')
                }
              })
            }, 300)
          }
        })
      },
      { 
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isAnimated])

  // Define color classes based on index
  const cardColors = [
    'skill-card--accent', // This will map to the default accent gradient
    'skill-card--blue',
    'skill-card--green',
    'skill-card--purple',
    'skill-card--red',
    'skill-card--indigo'
  ]
  const fillColors = [
    'skill-bar-fill--accent',
    'skill-bar-fill--blue',
    'skill-bar-fill--green',
    'skill-bar-fill--purple',
    'skill-bar-fill--red',
    'skill-bar-fill--indigo'
  ]
  
  return (
    <div 
      ref={containerRef}
      className="skill-bars-container"
    >
      {skillsData.map((skill, index) => {
        const cardColorClass = cardColors[index % cardColors.length];
        const fillColorClass = fillColors[index % fillColors.length];

        return (
          <div 
            key={index}
            className={`skill-card ${cardColorClass}`}
          >
            {/* Декоративные элементы */}
            <div className="skill-card-decoration-tr"></div>
            <div className="skill-card-decoration-bl"></div>
            
            <div className="skill-card-content">
              <div className="skill-header">
                <div className="skill-name-group">
                  <div className="skill-dot"></div>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-level-tag">{skill.level}%</span>
              </div>
              
              <div className="skill-bar-container">
                <div 
                  className={`skill-bar-fill ${fillColorClass}`}
                  data-level={skill.level}
                  style={{ width: '0%' }} // Initial width set to 0 for animation
                ></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SkillBars