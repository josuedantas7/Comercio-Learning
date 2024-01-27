import { useContext, useEffect, useState } from 'react'
import PrimaryTitle from '../components/Text/PrimaryTitle'
import axios from 'axios'
import CardItem from '../components/Cards/CardItem'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_APP_API_URL

const GerenciarProdutos = () => {

    const [allProducts,setAllProducts] = useState([])
    const { signed } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllProducts(){
            const response = await axios.get(`${apiUrl}/product`)
            setAllProducts(response.data.products)
        }
        getAllProducts()
    },[])

    useEffect(() => {
        if (!signed){
            navigate('/')
        }
    },[signed,navigate])

  return (
    <div>
        <PrimaryTitle botaoVoltar={true} title={'Gerenciar produtos'} />
        <div className='flex justify-center gap-5 flex-wrap mb-32'>
            {allProducts.map((item) => (
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
            )}
        </div>
    </div>
  )
}

export default GerenciarProdutos
