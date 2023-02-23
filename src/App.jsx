import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ClassComponent } from './components/ClassComponent'
import Card from './components/Card'
import FuncComponent from './components/FuncComponent'

function App() {

  let integrantes = [ 'Derly', 'Yesid', 'Johan', 'Karina']

  return (
    <>
      <ClassComponent/>
      <FuncComponent/>
      <Card name={"Derly"}/>
      <Card name={"Yesid"}/>
      <Card name={"Johan"}/>
      <Card name={"Karina"}/>
    </>
  )
}

export default App
