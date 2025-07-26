import React, { useState, useEffect } from 'react'
import RevealElement from './RevealElement'
import SkillBars from './SkillBars'
import '../styles/Projects.css' // Import the CSS file

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

  // Map skill category index to specific color classes
  const skillColorClasses = [
    { card: 'skill-category-card--blue', text: 'text-color--blue' },
    { card: 'skill-category-card--green', text: 'text-color--green' },
    { card: 'skill-category-card--purple', text: 'text-color--purple' }
  ]

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title-bg top-1/2 -translate-y-1/2">RESUME</h2> {/* Assuming section-title-bg is defined globally or elsewhere */}
      
      <div className="projects-content-wrapper">
        <RevealElement>
          <h3 className="section-heading">Мои Проекты</h3>
        </RevealElement>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <RevealElement 
              key={project.id}
              className="project-card"
            >
              {/* Декоративные элементы */}
              <div className="project-card-decoration-tr"></div>
              <div className="project-card-decoration-bl"></div>
              
              <div className="project-card-content">
                <div className="project-card-header">
                  <h4 className="project-card-title">{project.title}</h4>
                  <span className="project-card-tag">#{index + 1}</span>
                </div>
                <p className="project-card-description">{project.description}</p>
                
                <div className={`project-details ${expandedProjects[project.id] ? 'expanded' : ''}`}>
                  <div className="project-details-inner">
                    <p className="project-details-text">
                      {project.details}
                    </p>
                  </div>
                </div>
                
                <div className="project-card-actions">
                  <button
                    onClick={() => toggleProjectDetails(project.id)}
                    className="btn-toggle-details"
                  >
                    {expandedProjects[project.id] ? 'Скрыть подробности' : 'Показать подробности'}
                  </button>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-github"
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
          <h3 id="skills" className="section-heading">Технические Навыки</h3>
        </RevealElement>

        <div className="skill-categories-grid">
          {skillCategories.map((category, index) => {
            const { card: cardColorClass, text: textColorClass } = skillColorClasses[index]
            
            return (
              <RevealElement 
                key={index}
                className={`skill-category-card ${cardColorClass}`}
              >
                {/* Декоративные элементы */}
                <div className="skill-card-decoration-tr"></div>
                <div className="skill-card-decoration-bl"></div>
                
                <div className="skill-category-content">
                  <div className="skill-category-header">
                    <div className={`skill-category-dot ${textColorClass}`}></div>
                    <h4 className={`skill-category-title ${textColorClass}`}>{category.title}</h4>
                  </div>
                  
                  <ul className="skill-list">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-list-item">
                        <div className={`skill-item-dot ${textColorClass}`}></div>
                        <span className="skill-item-text">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealElement>
            )
          })}
        </div>

        <RevealElement>
          <h3 className="section-heading">Мои Навыки (Уровень)</h3>
        </RevealElement>

        <SkillBars />

        <RevealElement>
          <h3 className="section-heading">Мой Путь и Интересы</h3>
        </RevealElement>

        <RevealElement className="path-interests-card">
          <p className="path-interests-text">
            До того как я пришел во Frontend разработку, я был <span className="path-interests-highlight">junior 3D-разработчиком</span>.
            В течение 3 лет я активно занимался 3D-моделированием, освоив такие программы как <span className="path-interests-highlight">Blender, ZBrush, Substance 3D Painter и Unreal Engine 4</span>.
          </p>
          <p className="path-interests-text">
            Также у меня был 1 год опыта в сфере дизайна, где я пробовал себя в различных нишах, что дало мне широкое понимание визуальных коммуникаций и пользовательского опыта.
          </p>
          <p className="path-interests-text">
            Мой путь в разработку начался с Android-разработки. В течение 2 месяцев я изучал <span className="path-interests-highlight">Java, Kotlin, Android Studio и основы программирования</span>. 
            Именно тогда я понял, что мое истинное призвание — это Frontend-разработка, где я могу сочетать свои творческие навыки с логикой программирования для создания интуитивно понятных и красивых веб-приложений.
          </p>
        </RevealElement>
      </div>
    </section>
  )
}

export default Projects
