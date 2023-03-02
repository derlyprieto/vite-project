import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        edad: '',
        color: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 2) {
            setShow(true)
            setErr(false)
        }else setErr(true)
    }

  return (
    <>  
        <form onSubmit={handleSubmit}>
            <label>Nombre Completo</label>
            <input type="text" onChange={(event) => setUser({...user, nombre: event.target.value})}/>
            <label>Edad</label>
            <input type="number" onChange={(event) => setUser({...user, edad: event.target.value})}/>
            <label>Color Favorito</label>
            <input type="text" onChange={(event) => setUser({...user, color: event.target.value})}/>
            <button>Registrar</button>
        </form>

        {
            show
            ? 
            <>
                <h4>Welcome!!</h4>
                <h4>Nombre completo: {user.nombre}</h4>
                <h4>Edad: {user.edad}</h4>
                <h4>Color Favorito: {user.color}</h4>
            </>
            :
            null
        }

    </>
  )
}

export default Form