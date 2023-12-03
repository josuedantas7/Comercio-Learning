import React, { useState } from 'react'

import PropTypes from 'prop-types'

const FiltroDisponiveis = ({data,setData}) => {

    const [todos,setTodos] = useState(data)
    const [disponiveis,setDisponiveis] = useState(data.filter((item) => item.disponivel === true))
    const [indisponiveis,setIndisponiveis] = useState(data.filter((item) => item.disponivel === false))

    function filtrarDisponiveis(){
        setData(disponiveis)
    }

    function filtrarIndisponiveis(){
        setData(indisponiveis)
    }

    function filtrarTodos(){
        setData(todos)
    }

  return (
    <div className='w-[150px] mx-auto'>
        <h1 className='text-center text-lg mb-2 text-gray-600'>Filtros de estado</h1>
        <div className='flex flex-col gap-2'>
            <button onClick={() => filtrarTodos()} className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold'>Todos</button>
            <button onClick={() => filtrarDisponiveis()} className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold'>Disponíveis</button>
            <button onClick={() => filtrarIndisponiveis()} className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold'>Indisponíveis</button>
        </div>
    </div>
  )
}

export default FiltroDisponiveis

FiltroDisponiveis.propTypes = {
    data: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired
}