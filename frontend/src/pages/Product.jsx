import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
    const {id} = useParams()

    const [dados,setDados] = useState([])

    async function getDados(){
        await axios.get(`http://localhost:3001/product/${id}`)
        .then(response => setDados(response.data.product))
        .catch(err => console.log(err))
    }

    console.log(dados)
    useEffect(() => {
        getDados()
    },[])


  return (
    <div>
        <h1 className='text-3xl text-center font-extrabold mt-8'>Editar Produto</h1>
        <div className='flex justify-evenly'>
            <div className='mt-12 flex flex-col gap-3'>
                <div>
                    <h1 className='text-3xl'>Nome do Produto: </h1>
                    <p className='text-gray-700 font-semibold'>{dados.name}</p>
                </div>
                <div>
                    <h1 className='text-3xl'>Preço do Produto:</h1>
                    <p className='text-gray-700 font-semibold'>{dados.price}</p>
                </div>
                <div>
                    <h1 className='text-3xl'>Categoria do produto:</h1>
                    <p className='text-gray-700 font-semibold'>{dados.category}</p>
                </div>
                <div>
                    <h1 className='text-3xl'>Link da imagem do produto:</h1>
                    <p className='text-gray-700 font-semibold flex flex-wrap w-[300px]'>{dados.image}</p>
                </div>
            </div>
            <div>
                <img src={dados.image} alt='Foto produto' className='w-[300px] h-[300px]'/>
            </div>
        </div>
    </div>
  )
}

export default Product
