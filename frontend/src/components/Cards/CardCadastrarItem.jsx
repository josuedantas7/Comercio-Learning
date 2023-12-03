import React, { useEffect, useState } from 'react'
import InputPrimario from '../Input/InputPrimario'
import Select from '../Input/Select'

import PropTypes from 'prop-types'

const CardCadastrarItem = ({data,setData}) => {

  const [produto,setProduto] = useState('')
  const [imagem,setImagem] = useState('')
  const [categoria,setCategoria] = useState('')
  const [disponivel,setDisponivel] = useState('')

  function onSubmit(){
    setData([...data,{id: data.length + 1, produto: produto, image: imagem, categoria: categoria, disponivel: disponivel}])
    console.log(data)
  }

  return (
    <div className='max-w-[500px] flex flex-col gap-3'>
      <InputPrimario onChange={setProduto} label='Nome do Produto'/>
      <InputPrimario onChange={setImagem} label='Link da imagem'/>
      <Select setCategoria={setCategoria} categoria={categoria} />
      <h1 className='text-center text-2xl text-gray-600 mt-3'>Estado do produto:</h1>
      <div className='flex justify-center mt-4 gap-2 text-white font-bold'>
        <button onClick={() => setDisponivel(true)} className='bg-green-500 hover:bg-green-700 px-3 py-2 rounded-lg duration-300'>Disponível</button>
        <button onClick={() => setDisponivel(false)} className='bg-red-700 hover:bg-red-300 px-3 py-2 rounded-lg duration-300'>Indisponivel</button>
      </div>
      <div className='mt-4'>
        <button onClick={() => onSubmit()} className='w-full py-3 rounded-lg bg-blue-400 duration-300 hover:bg-blue-800 text-white font-semibold'>
          Cadastrar Item
        </button></div>
    </div>
  )
}

export default CardCadastrarItem

CardCadastrarItem.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired
}