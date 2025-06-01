import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddContact from './pages/AddContact'
import ContactList from './pages/ContactList'
import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/add-contact" element={<AddContact/>}/>
        <Route path="/" element={<ContactList/>} />
      </Routes>
    </Layout>
  )
}

export default App

