import { Link } from "react-router-dom"
import CardItem from "./components/Cards/CardItem"
import { useEffect, useState } from "react"
import FiltroDisponiveis from "./components/Filtros/FiltroDisponiveis"

import PropTypes from 'prop-types'
import FiltroCategoria from "./components/Filtros/FiltroCategoria"
import axios from "axios"

const App = () => {

  const [dados,setDados] = useState([])
  
  function getDados(){
    axios.get('https://comercialluna.onrender.com/product')
    .then(response => setDados(response.data.products))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getDados()
  },[])
  
  return (
    <div className="flex flex-col mb-32">
      <h1 className="text-3xl font-extrabold my-4 text-gray-700 uppercase text-center">Itens Disponíveis</h1>
      <div className="flex">
        <div className="w-full flex gap-3 justify-center flex-wrap">
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
      </div>
    </div>
  )
}
export default App

App.propTypes = {
  dados: PropTypes.array,
  setDados: PropTypes.func
}
