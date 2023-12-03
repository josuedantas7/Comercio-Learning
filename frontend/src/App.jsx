import { Link } from "react-router-dom"
import CardItem from "./components/Cards/CardItem"
import { useEffect, useState } from "react"
import FiltroDisponiveis from "./components/Filtros/FiltroDisponiveis"

import PropTypes from 'prop-types'
import FiltroCategoria from "./components/Filtros/FiltroCategoria"

const App = ({data,setData}) => {

  useEffect(() => {
    setData(data)
  },[])
  
  return (
    <div className="flex flex-col mb-32">
      <h1 className="text-3xl font-extrabold my-4 text-gray-700 uppercase text-center">Itens Disponíveis</h1>
      <div className="flex justify-between">
        <div className="sm:pl-6 flex flex-col gap-12 pl-1">
          <FiltroDisponiveis data={data} setData={setData}/>
          <FiltroCategoria data={data} setData={setData}/>
        </div>
        <div className="w-full flex gap-3 justify-center flex-wrap">
          {data.map((item) => (
            <CardItem
            key={item.id}
            disponivel={item.disponivel}
            produto={item.produto}
            image={item.image}
            categoria={item.categoria}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default App

App.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired
}
