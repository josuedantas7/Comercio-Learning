import { useState } from 'react'
import InputPrimario from '../Input/InputPrimario'
import Select from '../Input/Select'

import axios from 'axios'


const CardCadastrarItem = () => {

  const [produto,setProduto] = useState('')
  const [imagem,setImagem] = useState('')
  const [categoria,setCategoria] = useState('')
  const [disponivel,setDisponivel] = useState(true)
  const [preco,setPreco] = useState('')

  function createItem(){
    let precoNumber = Number(preco)

    axios.post('https://comercialluna.onrender.com/product',
    {name: produto,
    image: imagem,
    category: categoria, 
    disponivel,
    price: precoNumber})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })}

  return (
    <div className='max-w-[500px] flex flex-col gap-3'>
      <InputPrimario type={'text'} onChange={setProduto} label='Nome do Produto'/>
      <InputPrimario type={'text'} onChange={setImagem} label='Link da imagem'/>
      <InputPrimario type={'number'} onChange={setPreco} label='Preço Produto'/>
      <Select setCategoria={setCategoria} categoria={categoria} />
      <h1 className='text-center text-2xl text-gray-600 mt-3'>Estado do produto:</h1>
      <div className='flex justify-center mt-4 gap-2 text-white font-bold'>
        <button onClick={() => setDisponivel(true)} className={` ${disponivel ? 'bg-green-700' : 'bg-gray-500'} px-3 py-2 rounded-lg duration-300`}>Disponível</button>
        <button onClick={() => setDisponivel(false)} className={` ${disponivel ? 'bg-gray-500' : 'bg-red-700'} px-3 py-2 rounded-lg duration-300`}>Indisponivel</button>
      </div>
      <div className='mt-4'>
        <button onClick={createItem} className='w-full py-3 rounded-lg bg-blue-400 duration-300 hover:bg-blue-800 text-white font-semibold'>
          Cadastrar Item
        </button></div>
    </div>
  )
}

export default CardCadastrarItem
