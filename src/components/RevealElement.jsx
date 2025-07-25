import React, { useEffect, useRef } from 'react'

const RevealElement = ({ children, className = '', threshold = 0.1 }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { 
        root: null,
        rootMargin: '0px',
        threshold: threshold
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div 
      ref={elementRef} 
      className={`reveal-element ${className}`}
    >
      {children}
    </div>
  )
}

export default RevealElement
