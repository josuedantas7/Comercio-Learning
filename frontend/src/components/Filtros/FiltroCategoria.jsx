import React, { useState } from 'react'

import PropTypes from 'prop-types'

const FiltroCategoria = ({data,setData}) => {

  const [todos,setTodos] = useState(data)
  const [alimentos,setAlimentos] = useState(data.filter((item) => item.categoria === 'Alimentos'))
  const [bebidas,setBebidas] = useState(data.filter((item) => item.categoria === 'Bebidas'))
  const [limpeza,setLimpeza] = useState(data.filter((item) => item.categoria === 'Limpeza'))
  const [higiene,setHigiene] = useState(data.filter((item) => item.categoria === 'Higiene'))


  function filtrarAlimentos(){
      setData(alimentos)
  }

  function filtrarBebidas(){
      setData(bebidas)
  }

  function filtrarLimpeza(){
      setData(limpeza)
  }

  function filtrarHigiene(){
      setData(higiene)
  }

  function filtrarTodos(){
      setData(todos)
  }

  return (
    <div className='flex flex-col gap-2'>
        <h1 className='text-center text-lg mb-2 text-gray-600'>Filtro de Categoria</h1>
        <button className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold' onClick={() => filtrarTodos()}>Todos</button>
        <button className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold' onClick={() => filtrarAlimentos()}>Alimentos</button>
        <button className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold' onClick={() => filtrarBebidas()}>Bebidas</button>
        <button className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold' onClick={() => filtrarLimpeza()}>Limpeza</button>
        <button className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold' onClick={() => filtrarHigiene()}>Higiene</button>
    </div>
  )
}

export default FiltroCategoria


FiltroCategoria.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired
}
