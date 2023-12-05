import React from 'react'
import CardCategorias from '../components/Cards/CardCategorias'

const Teste = () => {
  return (
    <div>
        <h1 className='font-extrabold text-center text-3xl mt-8'>Itens Disponíveis</h1>
        <div className='flex flex-wrap mt-12 gap-4 justify-center'>
            <CardCategorias categoria={'Alimentos'}/>
            <CardCategorias categoria={'Frios'}/>
            <CardCategorias categoria={'Bebidas'}/>
        </div>
    </div>
  )
}

export default Teste
