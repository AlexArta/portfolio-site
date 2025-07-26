import { useEffect, useRef } from 'react'

/**
 * Хук для анимации элементов при скролле
 * Добавляет класс 'active' элементам с классом 'animate-on-scroll' когда они появляются
 */
export function useScrollAnimation() {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    // Находим все элементы для анимации
    const elements = container.querySelectorAll('.animate-on-scroll')
    
    // Создаем наблюдатель
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { 
      threshold: 0.1 // Запускаем анимацию когда видно 10% элемента
    })
    
    // Начинаем наблюдать за элементами
    elements.forEach(element => observer.observe(element))
    
    // Очищаем наблюдатель при размонтировании
    return () => observer.disconnect()
  }, [])
  
  return containerRef
}
