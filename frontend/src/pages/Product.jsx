import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PrimaryTitle from '../components/Text/PrimaryTitle'

const Product = ({isAdmin}) => {
    const {id} = useParams()

    const [dados,setDados] = useState([])

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [image,setImage] = useState('')
    const [disponivel,setDisponivel] = useState(true)
    const [alert,setAlert] = useState(false)
    const [alertMessage,setAlertMessage] = useState('')

    const [isEditing,setIsEditing] = useState(false)

    async function getDados(){
        await axios.get(`https://comercialluna.onrender.com/product/${id}`)
        .then(response => setDados(response.data.product))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getDados()
    },[])


    function editarItem(){
        axios.post(`https://comercialluna.onrender.com/product/${id}`,{
            name: name,
            price: price,
            category: category,
            image: image,
            disponivel: disponivel})
            .then(response => {
                console.log(response)
                setIsEditing(false)
                setAlert(true)
                setAlertMessage('Item editado com sucesso!')
            })
            .catch(err => {
                console.log(err)
                setAlert(true)
                setAlertMessage('Erro ao editar item!')
                setIsEditing(false)
            })
    }


  return (
    <div>
        <PrimaryTitle botaoVoltar={true} title='Descrição do item:'/>
        <div className='flex justify-evenly'>
            <div className='mt-12 flex flex-col gap-3'>
                <div>
                    <h1 className='text-3xl'>Nome do Produto: </h1>
                    {isEditing ? <input type='text' onChange={(e) => setName(e.target.value)} className='border-2 border-gray-300 rounded-md w-[300px] h-[40px] px-2' placeholder={dados.name}/> : <p className='text-gray-700 font-semibold'>{dados.name}</p>}
                </div>
                <div>
                    <h1 className='text-3xl'>Preço do Produto:</h1>
                    {isEditing ? <input type='text' onChange={(e) => setPrice(e.target.value)} className='border-2 border-gray-300 rounded-md w-[300px] h-[40px] px-2' placeholder={dados.price}/> : <p className='text-gray-700 font-semibold'>{dados.price}</p>}
                </div>
                <div>
                    <h1 className='text-3xl'>Categoria do produto:</h1>
                    {isEditing ? <input type='text' onChange={(e) => setCategory(e.target.value)} className='border-2 border-gray-300 rounded-md w-[300px] h-[40px] px-2' placeholder={dados.category}/> : <p className='text-gray-700 font-semibold'>{dados.category}</p>}
                </div>
                <div>
                    <h1 className='text-3xl'>Link da imagem do produto:</h1>
                    {isEditing ? <input type='text' onChange={(e) => setImage(e.target.value)} className='border-2 border-gray-300 rounded-md w-[300px] h-[40px] px-2' placeholder={dados.image}/> : <p className='text-gray-700 font-semibold'>{dados.image}</p>}
                </div>
                <div>
                    <h1 className='text-3xl'>Disponibilidade do produto:</h1>
                    {isEditing ? (
                        <div className='text-white font-bold flex justify-center gap-5'>
                            <button onClick={() => setDisponivel(true)} className={` ${disponivel ? 'bg-green-700' : 'bg-gray-500'} px-3 py-2 rounded-lg duration-300`}>Disponivel</button> 
                            <button className={` ${disponivel ? 'bg-gray-500' : 'bg-red-700'} px-3 py-2 rounded-lg duration-300`} onClick={() => setDisponivel(false)}>Indisponivel</button>
                        </div>
                    ): <p className='text-gray-700 font-semibold'>{dados.disponivel ? 'Disponivel' : 'Indisponivel'}</p>}
                </div>
            </div>
            <div>
                {isEditing ? <img src={dados.image} className='w-[300px] h-[300px] rounded-md'/> : <img src={dados.image} className='w-[300px] h-[300px] rounded-md'/>}
            </div>
        </div>
        {isAdmin && (
            <div className='flex gap-3'>
                {!isEditing && (
                    <button onClick={() => setIsEditing(true)} className='text-center mx-auto py-3 mt-8 rounded-lg w-[200px] bg-green-500 text-white font-bold hover:bg-green-900'>Editar item</button>
                )}
                {isEditing && (
                    <button onClick={() => {
                        setIsEditing(false)
                        getDados()
                    }} className='text-center mx-auto py-3 mt-8 rounded-lg w-[200px] bg-red-500 text-white font-bold hover:bg-green-900'>Cancelar</button>
                )}
                {isEditing && (
                    <button onClick={() => {
                        editarItem()
                        getDados()
                    }} className='text-center mx-auto py-3 mt-8 rounded-lg w-[200px] bg-blue-500 text-white font-bold hover:bg-green-900'>Salvar</button>
                )}
            </div>
        )}
        {alert && (
            <div className='flex justify-center mt-8'>
                <p className='text-white font-bold bg-green-500 py-2 px-3 rounded-md'>{alertMessage}</p>
            </div>
        )}
    </div>
  )
}

export default Product
