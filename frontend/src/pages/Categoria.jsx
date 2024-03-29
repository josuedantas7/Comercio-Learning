import { useContext, useEffect, useState } from 'react'
import CardItem from '../components/Cards/CardItem'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LoadingComponent from '../components/Loading/Loading'
import PrimaryTitle from '../components/Text/PrimaryTitle'
import { AuthContext } from '../context/AuthContext'

const apiUrl = import.meta.env.VITE_APP_API_URL

const Categoria = () => {

    const { id } = useParams();

    const { signed } = useContext(AuthContext)

    const [dados,setDados] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)


    useEffect(() => {
        function getDados(){
            axios.get(`${apiUrl}/category/${id}`)
            .then(response => {
                setDados(response.data.products)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
        }
        getDados()
    },[id])

    useEffect(() => {
        if (signed){
            setAdmin(true)
        }
    },[signed])

  return (
    <div className='mb-32'>
      <>
        <PrimaryTitle botaoVoltar={true} title={`Lista de produtos da categoria ${id}`}/>
        {!isLoading ? (
            <div className='flex justify-center gap-5 flex-wrap'>
            {dados.map((item) => (
                !admin ? item.disponivel && (
                <CardItem
                key={item._id}
                id={item._id}
                disponivel={item.disponivel}
                produto={item.name}
                image={item.image}
                price={item.price}
                category={item.category}
                />
            ) : (
                <CardItem
                key={item._id}
                id={item._id}
                disponivel={item.disponivel}
                produto={item.name}
                image={item.image}
                price={item.price}
                category={item.category}
                />
            )
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
