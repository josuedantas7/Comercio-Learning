import React, { useEffect, useState } from 'react'
import CardItem from '../components/Cards/CardItem'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LoadingComponent from '../components/Loading/Loading'
import PrimaryTitle from '../components/Text/PrimaryTitle'

const Categoria = () => {

    const { id } = useParams();

    const [dados,setDados] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    function getDados(){
        axios.get(`https://comercialluna.onrender.com/category/${id}`)
        .then(response => {
            setDados(response.data.products)
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
    <div className='mb-32'>
      <>
        <PrimaryTitle botaoVoltar={true} title={`Lista de produtos da categoria ${id}`}/>
        {!isLoading ? (
            <div className='flex justify-center gap-5 flex-wrap'>
            {dados.map((item) => (
                <CardItem
                key={item._id}
                id={item._id}
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
