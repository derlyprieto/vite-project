import React from 'react'

const NavBar = () => {

    let titulos = ['Home', 'Catalogo', 'About Us', 'Contatco']
  return (
    <>
            {titulos.map((titulo, index) => <p key={index}>{titulo}</p>)}
    </>
  )
}

export default NavBar