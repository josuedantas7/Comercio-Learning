import React, { useEffect, useState } from 'react'
import CardItem from '../components/Cards/CardItem'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LoadingComponent from '../components/Loading/Loading'

const Categoria = () => {

    const { id } = useParams();

    const [dados,setDados] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    function getDados(){
        axios.get('https://comercialluna.onrender.com/product')
        .then(response => {
            setDados(response.data.products.filter(item => item.category === id))
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getDados()
    },[])

    console.log(dados)


  return (
    <div>
      <>
        <h1 className='text-center font-extrabold text-3xl my-8'>Lista de produtos da categoria {id}</h1>
        {!isLoading ? (
            <div className='flex justify-center gap-5 flex-wrap'>
            {dados.map((item) => (
                <CardItem
                id={item._id}
                key={item._id}
                disponivel={item.disponivel}
                produto={item.name}
                image={item.image}
                price={item.price}
                category={item.category}
                />
            ))}
        </div>
        ): (
            <div className='flex justify-center'><LoadingComponent/></div>
        )}
      </>
    </div>
  )
}

export default Categoria
