import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddContact from './pages/AddContact'
import ContactList from './pages/ContactList'
const App = () => {
  return (
    <>
    <Routes>

      <Route path='/add-contact' element={<AddContact/>}/>
      <Route path="/" element={<ContactList/>} />

      
    </Routes>
    </>
  )
}

export default App

