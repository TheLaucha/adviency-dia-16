import React from "react"
import GiftLi from "./GiftLi"
import "./GiftUl.css"

const GiftUl = ({ gifts, deleteAll, setGiftToEdit, deleteGift, handleModal }) => {
  return (
    <>
      <ul>
        {gifts.map((el) => (
          <GiftLi
            key={el.id}
            el={el}
            setGiftToEdit={setGiftToEdit}
            deleteGift={deleteGift}
            handleModal={handleModal}
          ></GiftLi>
        ))}
      </ul>
      <button onClick={() => deleteAll()} className='borrarTodo'>
        Borrar todo
      </button>
    </>
  )
}

export default GiftUl
