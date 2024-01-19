import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PrimaryTitle from '../components/Text/PrimaryTitle'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify';
import ToastMessage from '../components/ToastMessage/ToastMessage'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../services/firebaseConnection'
import { v4 as uuidV4 } from 'uuid'

const apiUrl = import.meta.env.VITE_APP_API_URL

const Product = () => {

    const { signed } = useContext(AuthContext)

    const {id} = useParams()

    const [dados,setDados] = useState([])

    const notify = () => toast(messageToast, {type: typeToast});

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [image,setImage] = useState('')
    const [disponivel,setDisponivel] = useState(true)

    const [toggleToast,setToggleToast] = useState(false)
    const [messageToast,setMessageToast] = useState('')
    const [typeToast,setTypeToast] = useState('')

    const [isEditing,setIsEditing] = useState(false)

    async function getDados(){
        await axios.get(`${apiUrl}/product/${id}`)
        .then(response => setDados(response.data.product))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getDados()
    },[])


    function editarItem(){
        axios.post(`${apiUrl}/product/${id}`,{
            name: name,
            price: price,
            category: category,
            image: image,
            disponivel: disponivel})
            .then(response => {
                setMessageToast('Item editado com sucesso!')
                setTypeToast('success')
                setToggleToast(true)
                setIsEditing(false)
            })
            .catch(err => {
                console.log(err)
                setMessageToast('Erro ao editar item!')
                setTypeToast('error')
                setToggleToast(true)
                setIsEditing(false)
            })
    }


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
            setImage(url)
          })
        })
      }


  return (
    <div className='mb-32'>
        <PrimaryTitle botaoVoltar={true} title='Descrição do item:'/>
        <div className='flex justify-center items-center max-[800px]:flex-col px-32 max-[1050px]:px-20 max-[460px]:px-1 max-[800px]:px-4'>
            <div className='mt-12 flex flex-col gap-3 max-[800px]:mx-12 max-[530px]:mx-4 max-[800px]:w-[80%] max-[460px]:w-[95%] w-1/2'>
                <div>
                    <h1 className='text-3xl max-[510px]:text-lg font-bold'>Nome do Produto: </h1>
                    {isEditing ? <input type='text' onChange={(e) => setName(e.target.value)} className='border-2 border-gray-300 rounded-md w-[300px] h-[40px] px-2' placeholder={dados.name}/> : <p className='text-gray-700 font-semibold text-sm'>{dados.name}</p>}
                </div>
                <div>
                    <h1 className='text-3xl max-[510px]:text-xl font-bold'>Preço do Produto:</h1>
                    {isEditing ? <input type='text' onChange={(e) => setPrice(e.target.value)} className='border-2 border-gray-300 rounded-md w-[300px] h-[40px] px-2' placeholder={dados.price}/> : <p className='text-gray-700 font-semibold text-sm'>{dados.price}</p>}
                </div>
                <div>
                    <h1 className='text-3xl max-[510px]:text-xl font-bold'>Categoria do produto:</h1>
                    {isEditing ? <input type='text' onChange={(e) => setCategory(e.target.value)} className='border-2 border-gray-300 rounded-md w-[300px] h-[40px] px-2' placeholder={dados.category}/> : <p className='text-gray-700 font-semibold text-sm'>{dados.category}</p>}
                </div>
                <div>
                    <h1 className='text-3xl max-[510px]:text-xl font-bold'>Imagem do produto:</h1>
                    {isEditing ? <input onChange={handleFile} type="file" accept="image/*" /> : <p className='text-gray-700 font-semibold text-sm'>{dados.image}</p>}
                </div>
                <div>
                    <h1 className='text-3xl max-[510px]:text-xl font-bold'>Disponibilidade do produto:</h1>
                    {isEditing ? (
                        <div className='text-white font-bold flex justify-center gap-5'>
                            <button onClick={() => setDisponivel(true)} className={` ${disponivel ? 'bg-green-700' : 'bg-gray-500'} px-3 py-2 rounded-lg duration-300`}>Disponivel</button> 
                            <button className={` ${disponivel ? 'bg-gray-500' : 'bg-red-700'} px-3 py-2 rounded-lg duration-300`} onClick={() => setDisponivel(false)}>Indisponivel</button>
                        </div>
                    ): <p className='text-gray-700 font-semibold text-sm'>{dados.disponivel ? 'Disponivel' : 'Indisponivel'}</p>}
                </div>
            </div>
            <div className='max-[800px]:flex max-[800px]:mt-12 justify-center w-1/2 max-[500px]:w-[80%]'>
                {isEditing ? <img src={dados.image} className='w-[300px] h-[300px] rounded-md'/> : <img src={dados.image} className='w-[300px] mx-auto h-[300px] rounded-md'/>}
            </div>
        </div>
        {signed && (
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
        {toggleToast && <ToastMessage notify={notify} message={messageToast}/>}
    </div>
  )
}

export default Product
