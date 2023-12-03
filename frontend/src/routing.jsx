import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './App.jsx'
import Sobre from './pages/Sobre.jsx'
import CadastrarItem from './pages/CadastrarItem.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import db from './db.json'

import { useState } from 'react'


const routing = () => {

  const [data,setData] = useState(db.data)

  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home data={data} setData={setData}/>} />
            <Route path="/home" element={<Home data={data} setData={setData} />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path='/cadastrar-item' element={<CadastrarItem data={data} setData={setData} />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default routing
