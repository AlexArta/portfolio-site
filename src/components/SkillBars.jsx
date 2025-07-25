import React, { useEffect, useRef, useState } from 'react'

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

  return (
    <div 
      ref={containerRef}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-16 px-2 md:px-0"
    >
      {skillsData.map((skill, index) => {
        const colors = [
          'from-accent/20 to-accent/10 border-accent/30',
          'from-blue-500/20 to-blue-600/10 border-blue-400/30',
          'from-green-500/20 to-green-600/10 border-green-400/30',
          'from-purple-500/20 to-purple-600/10 border-purple-400/30',
          'from-red-500/20 to-red-600/10 border-red-400/30',
          'from-indigo-500/20 to-indigo-600/10 border-indigo-400/30'
        ]
        const fillColors = [
          'bg-gradient-to-r from-accent to-accent-dark',
          'bg-gradient-to-r from-blue-500 to-blue-600',
          'bg-gradient-to-r from-green-500 to-green-600',
          'bg-gradient-to-r from-purple-500 to-purple-600',
          'bg-gradient-to-r from-red-500 to-red-600',
          'bg-gradient-to-r from-indigo-500 to-indigo-600'
        ]
        
        return (
          <div 
            key={index}
            className={`relative bg-gradient-to-br ${colors[index % colors.length]} p-3 md:p-4 rounded-lg md:rounded-xl shadow-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 overflow-hidden`}
          >
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full transform translate-x-6 -translate-y-6"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/5 rounded-full transform -translate-x-4 translate-y-4"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/80"></div>
                  <span className="font-semibold text-white text-sm md:text-base">{skill.name}</span>
                </div>
                <span className="text-xs md:text-sm text-white/90 bg-white/20 px-2 py-1 rounded-full font-medium">{skill.level}%</span>
              </div>
              
              <div className="skill-bar-container bg-white/20 rounded-full overflow-hidden">
                <div 
                  className={`skill-bar-fill h-full ${fillColors[index % fillColors.length]} rounded-full shadow-lg transition-all duration-1000 ease-out`}
                  data-level={skill.level}
                  style={{ width: '0%' }}
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
