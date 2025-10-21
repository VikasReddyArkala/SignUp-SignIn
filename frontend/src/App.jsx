import { useState } from 'react'
import './App.css'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
