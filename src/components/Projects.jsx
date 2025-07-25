import React, { useState, useEffect } from 'react'
import RevealElement from './RevealElement'
import SkillBars from './SkillBars'

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({})

  const projects = [
    {
      id: 'project1',
      title: 'Калькулятор на React',
      description: 'Простой калькулятор, разработанный с использованием React. Демонстрирует базовые операции и управление состоянием.',
      details: 'Этот проект был создан для практики работы с компонентами React, состоянием и обработкой событий. Он включает в себя базовые арифметические операции и простой пользовательский интерфейс.',
      github: 'https://github.com/AlexArta/Calculator_Reacts'
    },
    {
      id: 'project2',
      title: 'Приложение "Погода"',
      description: 'Приложение для отображения информации о погоде, использующее внешние API для получения данных. Реализован адаптивный дизайн.',
      details: 'Использованы Fetch API для запросов к погодному сервису. Проект демонстрирует асинхронную работу с данными и их отображение в динамическом интерфейсе.',
      github: 'https://github.com/AlexArta/Wheather-Info'
    },
    {
      id: 'project3',
      title: 'Первый проект с Sass/SCSS',
      description: 'Пример использования препроцессоров Sass/SCSS для более эффективного и модульного написания CSS.',
      details: 'Этот проект помог освоить переменные, миксины, вложенность и импорт в Sass/SCSS, что значительно упрощает масштабирование и поддержку стилей.',
      github: 'https://github.com/AlexArta/First_Sass-Scss'
    },
    {
      id: 'project4',
      title: 'Игра "Frog Clicker"',
      description: 'Простая кликер-игра, демонстрирующая базовые концепции JavaScript и манипуляции с DOM.',
      details: 'Разработка этой игры позволила углубить понимание работы с DOM, обработкой событий и базовой игровой логикой на чистом JavaScript.',
      github: 'https://github.com/AlexArta/Frog_Clicker'
    }
  ]

  const skillCategories = [
    {
      title: 'Программные Навыки',
      skills: [
        'Figma (базовые знания)',
        'Git & GitHub',
        'Webpack (базовые знания)',
        'VS Code'
      ]
    },
    {
      title: 'Навыки Кодирования',
      skills: [
        'HTML5',
        'CSS3 (Flexbox, Grid, Animations)',
        'JavaScript (ES6+, DOM Manipulation)',
        'React.js (Hooks, Context API)',
        'Tailwind CSS',
        'Sass/SCSS',
        'Responsive Design'
      ]
    },
    {
      title: 'Языки',
      skills: [
        'Русский (родной)',
        'Английский (средний)',
        'Испанский (базовый)'
      ]
    }
  ]

  const toggleProjectDetails = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  return (
    <section id="projects" className="relative py-8 md:py-16 px-4 md:px-8 bg-primary text-white w-full flex flex-col items-center overflow-hidden">
      <h2 className="section-title-bg top-1/2 -translate-y-1/2">RESUME</h2>
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <RevealElement>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12">Мои Проекты</h3>
        </RevealElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {projects.map((project, index) => (
            <RevealElement 
              key={project.id}
              className="relative bg-gradient-to-br from-primary-dark to-primary p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border border-accent/20 hover:border-accent/40 overflow-hidden"
            >
              {/* Декоративные элементы */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent/5 rounded-full transform -translate-x-6 translate-y-6"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl md:text-2xl font-semibold text-accent">{project.title}</h4>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">#{index + 1}</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className={`project-details ${expandedProjects[project.id] ? 'expanded' : ''}`}>
                  <div className="bg-black/20 p-3 rounded-lg mt-2">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.details}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <button
                    onClick={() => toggleProjectDetails(project.id)}
                    className="bg-accent/20 hover:bg-accent/30 text-accent px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium border border-accent/30 hover:border-accent/50"
                  >
                    {expandedProjects[project.id] ? 'Скрыть подробности' : 'Показать подробности'}
                  </button>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent-dark text-primary px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </RevealElement>
          ))}
        </div>

        <RevealElement>
          <h3 id="skills" className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12">Технические Навыки</h3>
        </RevealElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16 px-2 sm:px-0">
          {skillCategories.map((category, index) => {
            const colors = [
              'from-blue-500/20 to-blue-600/10 border-blue-400/30',
              'from-green-500/20 to-green-600/10 border-green-400/30', 
              'from-purple-500/20 to-purple-600/10 border-purple-400/30'
            ]
            const accentColors = ['text-blue-300', 'text-green-300', 'text-purple-300']
            
            return (
              <RevealElement 
                key={index}
                className={`relative bg-gradient-to-br ${colors[index]} backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-xl border transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full transform -translate-x-8 translate-y-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${accentColors[index]} bg-current`}></div>
                    <h4 className={`text-lg md:text-xl font-semibold ${accentColors[index]}`}>{category.title}</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-3 text-white/90 text-sm md:text-base">
                        <div className={`w-2 h-2 rounded-full ${accentColors[index]} bg-current flex-shrink-0`}></div>
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealElement>
            )
          })}
        </div>

        <RevealElement>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12">Мои Навыки (Уровень)</h3>
        </RevealElement>

        <SkillBars />

        <RevealElement>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12">Мой Путь и Интересы</h3>
        </RevealElement>

        <RevealElement className="bg-primary-dark p-4 md:p-8 rounded-xl shadow-lg">
          <p className="text-gray-300 text-lg mb-4">
            До того как я пришел во Frontend разработку, я был <span className="font-semibold text-accent">junior 3D-разработчиком</span>.
            В течение 3 лет я активно занимался 3D-моделированием, освоив такие программы как <span className="font-semibold text-accent">Blender, ZBrush, Substance 3D Painter и Unreal Engine 4</span>.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            Также у меня был 1 год опыта в сфере дизайна, где я пробовал себя в различных нишах, что дало мне широкое понимание визуальных коммуникаций и пользовательского опыта.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            Мой путь в разработку начался с Android-разработки. В течение 2 месяцев я изучал <span className="font-semibold text-accent">Java, Kotlin, Android Studio и основы программирования</span>. 
            Именно тогда я понял, что мое истинное призвание — это Frontend-разработка, где я могу сочетать свои творческие навыки с логикой программирования для создания интуитивно понятных и красивых веб-приложений.
          </p>
        </RevealElement>
      </div>
    </section>
  )
}

export default Projects
