import React from "react"
import "./Modal.css"

const Modal = ({ children, handleModal }) => {
  return (
    <div className='overlay'>
      <div className='modalContent'>
        <header className='modalHeader'>
          <h3>Agregar regalo</h3>
        </header>
        {children}
        <button onClick={handleModal} className='closeButton'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-x'
            viewBox='0 0 16 16'
          >
            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Modal
