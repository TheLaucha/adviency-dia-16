import React, { useState, useEffect } from "react"
import "./GiftForm.css"

const initialForm = {
  name: "",
  forWhom: "",
  url: "",
  amount: 1,
  id: null,
}

const randomGifts = ["Remera Goku", "Camiseta de Futbol", "Mouse Gamer"]

const defaultIconUrl = "https://www.svgrepo.com/show/13853/gift.svg"

const GiftForm = ({ createGift, editGift, giftToEdit, setGiftToEdit, handleModal }) => {
  const [form, setForm] = useState(initialForm)
  const [random, setRandom] = useState(null)

  useEffect(() => {
    setForm({ ...form, [form.name]: random })
  }, [random])

  useEffect(() => {
    if (giftToEdit) {
      setForm(giftToEdit)
    } else {
      setForm(initialForm)
    }
  }, [giftToEdit])

  const handleSubmit = (e) => {
    e.preventDefault()

    form.name = e.target.name.value

    if (!form.name) {
      alert("faltan datos")
      return
    }

    if (!form.forWhom) {
      form.forWhom = "Alguien"
    }

    if (!form.url) {
      form.url = defaultIconUrl
    }

    if (!form.id) {
      console.log("crear")
      createGift(form)
    } else {
      console.log("editar")
      editGift(form)
    }

    handleReset()
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleReset = () => {
    setForm(initialForm)
    setGiftToEdit(null)
    handleModal()
  }

  const handleClick = () => {
    console.log("click")
    let getRandom = Math.floor(Math.random() * (randomGifts.length - 0) + 0)
    let newGift = randomGifts[getRandom]
    setRandom(newGift)
  }

  return (
    <>
      <form className='Form' onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type='text'
          name='name'
          placeholder='Medias'
          value={form.name}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick} type='button'>
          Random Gift
        </button>
        <input
          type='text'
          name='forWhom'
          placeholder='Para:'
          value={form.forWhom}
          onChange={handleChange}
        ></input>
        <input
          type='text'
          name='url'
          placeholder='http://image'
          value={form.url}
          onChange={handleChange}
        ></input>
        <input type='number' name='amount' value={form.amount} onChange={handleChange}></input>
        <button type='reset' className='cancelarBtn'>
          Cancelar
        </button>
        <button type='submit' className='agregarBtn'>
          Agregar
        </button>
      </form>
    </>
  )
}

export default GiftForm
