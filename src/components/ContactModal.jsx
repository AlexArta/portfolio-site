import React from 'react'
import { useModalContext } from '../contexts/ModalContext'

const ContactModal = () => {
  const { isOpen, closeModal } = useModalContext()

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Форма будет отправлена через Formspree
    // После отправки можно закрыть модальное окно
    // closeModal()
  }

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-content reveal-element">
        <button 
          className="modal-close-button" 
          onClick={closeModal}
        >
          &times;
        </button>
        
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-6 md:mb-8">
          Свяжитесь со мной
        </h3>
        
        <form 
          action="https://formspree.io/f/xgvezjqo" 
          method="POST" 
          className="contact-form space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label 
              htmlFor="companyName" 
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Название компании
            </label>
            <input 
              type="text" 
              id="companyName" 
              name="Название компании" 
              required 
            />
          </div>
          
          <div>
            <label 
              htmlFor="jobOffer" 
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Основное предложение о работе
            </label>
            <textarea 
              id="jobOffer" 
              name="Основное предложение о работе" 
              rows={5} 
              required
            />
          </div>
          
          <div>
            <label 
              htmlFor="salary" 
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Предлагаемая заработная плата
            </label>
            <input 
              type="text" 
              id="salary" 
              name="Заработная плата" 
            />
          </div>
          
          <div className="text-center">
            <button type="submit">
              Отправить сообщение
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
