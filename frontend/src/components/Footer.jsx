import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

// https://wa.me//55XXXXXXXXXXX?text=Tenho%20interesse%20em%20comprar%20seu%20carro
const Footer = () => {
  return (
    <div className='w-full h-20 fixed bottom-0 z-40'>
        <footer className='flex flex-col justify-center items-center h-full bg-blue-500'>
            <div className='flex'>
                <a href='https://www.instagram.com/comercialluna/' target='_blank' rel='noreferrer'>
                    <FaInstagram className='text-white hover:text-blue-700 duration-300 text-3xl mr-4'/>
                </a>
                <a href='https://wa.me//94984261969?text=Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20produtos%20da%20sua%20loja%20' target='_blank' rel='noreferrer'>
                    <FaWhatsapp className='text-white hover:text-green-600 duration-300 text-3xl'/>
                </a>
            </div>
            <h1 className='text-white font-semibold'>Todos os direitos reservados © Comercial Luna</h1>
        </footer>
    </div>
  )
}

export default Footer
