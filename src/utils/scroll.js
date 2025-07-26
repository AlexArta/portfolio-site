/**
 * Плавный скролл к элементу с учетом высоты хедера
 * @param {string} sectionId - ID секции, к которой нужно проскроллить
 */
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  const header = document.getElementById('header')
  
  if (!element || !header) return
  
  const headerHeight = header.offsetHeight
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const targetPosition = elementPosition - headerHeight
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}
