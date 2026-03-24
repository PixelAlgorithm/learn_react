import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './cards.jsx'
import Cards from "./cards.jsx";

function App() {

  return(
      <div className ="card_encl">
  <Cards name={"rak"}/>
  <Cards name={"Prajwal"}/>
  <Cards name={"Mok"}/>
  </div>


      )

  }


export default App
