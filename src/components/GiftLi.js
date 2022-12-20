import React from "react"
import "./GiftLi.css"

const editIconUrl = "https://www.svgrepo.com/show/97460/edit.svg"

const trashIconUrl = "https://www.svgrepo.com/show/244039/delete-trash.svg"

const GiftLi = ({ el, setGiftToEdit, deleteGift, handleModal }) => {
  const { name, forWhom, url, amount, id } = el

  const handleEdit = () => {
    setGiftToEdit(el)
    handleModal()
  }

  const handleDelete = () => {
    deleteGift(id)
  }

  return (
    <li className='item'>
      <div className='dataContainer'>
        <figure className='imageDiv'>
          <img src={url} alt='gift icon'></img>
        </figure>
        <div className='giftName'>
          <p>{name}</p>
          <span>{forWhom}</span>
        </div>
        <p>
          <span className='amountX'>x</span>
          {amount}
        </p>
      </div>
      <div className='iconContainer'>
        <figure className='imageDiv'>
          <button onClick={handleEdit}>
            <img src={editIconUrl} alt='edit icon'></img>
          </button>

          <figcaption>Editar</figcaption>
        </figure>
        <figure className='imageDiv'>
          <button onClick={handleDelete}>
            <img src={trashIconUrl} alt='trash icon'></img>
          </button>
          <figcaption>Borrar</figcaption>
        </figure>
      </div>
    </li>
  )
}

export default GiftLi
