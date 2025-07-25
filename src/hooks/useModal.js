import { useState, useCallback } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggleModal = useCallback(() => {
    if (isOpen) {
      closeModal()
    } else {
      openModal()
    }
  }, [isOpen, openModal, closeModal])

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  }
}
