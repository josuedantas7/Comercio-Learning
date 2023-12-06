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

import { useState, useEffect } from 'react'

const Routing = () => {

  const [isAdmin, setIsAdmin] = useState(false);

  const getAdmin = () => {
    const storedUser = localStorage.getItem('user');
    const parsedUser = JSON.parse(storedUser);

    if (parsedUser && parsedUser.name === 'josue') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <Router>
      <ToastContainer/>
      <Header setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login getAdmin={getAdmin} setIsAdmin={setIsAdmin} />}/>
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
    </Router>
  )
}

export default Routing
