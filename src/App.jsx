import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import { Route, Routes } from 'react-router-dom'
import MenuPage from './Components/MenuPage/MenuPage'

function App() {


  return (
    <>
      <Navbar/>      
      <Routes>
        <Route path='/' element={<Landing/>}/>
       <Route path='/menu' element={<MenuPage/>}/>
      </Routes>
    </>
  )
}

export default App
