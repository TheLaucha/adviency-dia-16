import { useState, useEffect } from "react"
import "./App.css"
import GiftForm from "./components/GiftForm"
import GiftUl from "./components/GiftUl"
import Modal from "./components/Modal"
import Loader from "./components/Loader"
import { helpHttp } from "./helpers/helpHttp"

function App() {
  const [gifts, setGifts] = useState([])
  const [giftToEdit, setGiftToEdit] = useState(null)
  const [viewModal, setViewModal] = useState(false)
  const [loading, setLoading] = useState(false)

  let api = helpHttp()
  let url = "http://localhost:5000/gifts"

  useEffect(() => {
    setLoading(true)
    api.get(url).then((res) => {
      if (!res.err) {
        setGifts(res)
      } else {
        setGifts([])
      }

      setLoading(false)
    })
  }, [])

  const createGift = (form) => {
    if (!form.id) {
      form.id = Date.now()
    }

    let options = { body: form, headers: { "content-type": "application/json" } }

    api.post(url, options).then((res) => {
      if (!res.err) {
        console.log("create", res)
        setGifts([...gifts, res])
      } else {
        console.log("error", res)
      }
    })
  }

  const editGift = (form) => {
    let endpoint = `${url}/${form.id}`

    let options = { body: form, headers: { "content-type": "application/json" } }

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = gifts.map((el) => (el.id === form.id ? form : el))
        setGifts(newData)
      } else {
        console.log("error", res)
      }
    })
  }

  const deleteGift = (id) => {
    let endpoint = `${url}/${id}`
    let options = { headers: { "content-type": "application/json" } }

    api.del(endpoint, options).then((res) => {
      if (!res.err) {
        console.log(res)
      } else {
        console.log("error", res)
      }
    })

    setGifts([])
  }

  const handleModal = () => {
    setViewModal(!viewModal)
  }

  const deleteAll = () => {
    gifts.forEach((el) => {
      deleteGift(el.id)
    })
  }

  return (
    <div className='AppContainer'>
      <div className='App'>
        <div className='header-app'>
          <h1>Regalos: </h1>
          <button className='agregarRegalo' onClick={handleModal}>
            Agregar Regalo
          </button>
        </div>
        {viewModal && (
          <Modal handleModal={handleModal}>
            <GiftForm
              createGift={createGift}
              editGift={editGift}
              giftToEdit={giftToEdit}
              setGiftToEdit={setGiftToEdit}
              handleModal={handleModal}
            ></GiftForm>
          </Modal>
        )}
        {loading && <Loader></Loader>}
        {gifts.length > 0 ? (
          <GiftUl
            gifts={gifts}
            deleteAll={deleteAll}
            setGiftToEdit={setGiftToEdit}
            deleteGift={deleteGift}
            handleModal={handleModal}
          ></GiftUl>
        ) : (
          <p className='msgNoHayRegalos'>Todavia no hay regalos. Agrega algo!</p>
        )}
      </div>
    </div>
  )
}

export default App
