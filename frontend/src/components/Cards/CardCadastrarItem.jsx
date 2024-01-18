import { useState } from 'react'
import InputPrimario from '../Input/InputPrimario'
import Select from '../Input/Select'

import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../services/firebaseConnection'

import { v4 as uuidV4 } from 'uuid'

const apiUrl = import.meta.env.VITE_APP_API_URL


const CardCadastrarItem = () => {

  const [produto,setProduto] = useState('')
  const [imagem,setImagem] = useState('')
  const [categoria,setCategoria] = useState('')
  const [disponivel,setDisponivel] = useState(true)
  const [preco,setPreco] = useState('')

  const [alert,setAlert] = useState(false)
  const [alertMessage,setAlertMessage] = useState('')



  function createItem(){
    let precoNumber = Number(preco)

    axios.post(`${apiUrl}/product`,
    {name: produto,
    image: imagem,
    category: categoria, 
    disponivel,
    price: precoNumber})
    .then(() => {
      setAlert(true)
      setAlertMessage('Item cadastrado com sucesso!')
    })
    .catch(error => {
      setAlert(true)
      setAlertMessage('Erro ao cadastrar item!')
      console.log(error)
    })}
    
    async function handleFile(e){
      if (e.target.files && e.target.files[0]) {
        const image = e.target.files[0]
        console.log(image)
  
        await handleUpload(image)
      }
    }
  
    async function handleUpload(image) {
  
      const uidImage = uuidV4()
  
      const uploadRef = ref(storage, `images/${uidImage}`)
  
      uploadBytes(uploadRef, image)
      .then((snapShop) => {
        getDownloadURL(snapShop.ref)
        .then(url => {
          setImagem(url)
        })
      })
    }

  return (
    <div className='max-w-[500px] flex flex-col gap-3'>
      <InputPrimario type={'text'} onChange={setProduto} label='Nome do Produto'/>
      <InputPrimario type={'number'} onChange={setPreco} label='Preço Produto'/>
      <Select setCategoria={setCategoria} categoria={categoria} />
      {/* <InputPrimario type={'text'} onChange={setImagem} label='Link da imagem'/> */}
      <input onChange={handleFile} type="file" accept="image/*" />
      <h1 className='text-center text-2xl text-gray-600 mt-3'>Estado do produto:</h1>
      <div className='flex justify-center mt-4 gap-2 text-white font-bold'>
        <button onClick={() => setDisponivel(true)} className={` ${disponivel ? 'bg-green-700' : 'bg-gray-500'} px-3 py-2 rounded-lg duration-300`}>Disponível</button>
        <button onClick={() => setDisponivel(false)} className={` ${disponivel ? 'bg-gray-500' : 'bg-red-700'} px-3 py-2 rounded-lg duration-300`}>Indisponivel</button>
      </div>
      <div className='mt-4'>
        <button onClick={createItem} className='w-full py-3 rounded-lg bg-blue-400 duration-300 hover:bg-blue-800 text-white font-semibold'>
          Cadastrar Item
        </button>
      </div>
      {alert && <div className='mt-4 bg-green-400 text-white font-semibold text-center rounded-lg py-2'>{alertMessage}</div>}
    </div>
  )
}

export default CardCadastrarItem
