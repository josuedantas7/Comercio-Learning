import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './App.jsx'
import Sobre from './pages/Sobre.jsx'
import CadastrarItem from './pages/CadastrarItem.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Login from './pages/Login.jsx'
import Product from './pages/Product.jsx';
import Teste from './pages/Teste.jsx';

const routing = () => {

  return (
    <Router>
      <ToastContainer/>
      <Header/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path='/cadastrar-item' element={<CadastrarItem />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/teste' element={<Teste />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default routing
