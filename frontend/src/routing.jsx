import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './App.jsx'
import Sobre from './pages/Sobre.jsx'
import CadastrarItem from './pages/CadastrarItem.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Login from './pages/Login.jsx'
import Product from './pages/Product.jsx';
import Teste from './pages/Teste.jsx';
import Categoria from './pages/Categoria.jsx';
import Editaritem from './pages/Editaritem.jsx';

import { AuthProvider } from './assets/context/AuthContext.jsx';

const Routing = () => {

  return (
    <Router>
      <ToastContainer/>
      <AuthProvider>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login  />}/>
              <Route path="/home" element={<Home/>} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path='/cadastrar-item' element={<CadastrarItem />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/teste' element={<Teste />} />
              <Route path='/categoria/:id' element={<Categoria />} />
              <Route path='/editar-item' element={<Editaritem />} />
              <Route path='*' element={<ErrorPage />} />
          </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  )
}

export default Routing
