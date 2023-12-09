import React from 'react'
import CardCategorias from '../components/Cards/CardCategorias'
import PrimaryTitle from '../components/Text/PrimaryTitle'
import BannerHome from '../components/Banner/BannerHome'

const Teste = () => {
  return (
    <div className='mb-32'>
        <BannerHome/>
        <h1 className='font-extrabold text-center text-3xl mt-8'><PrimaryTitle title={'Itens Disponíveis'} /></h1>
        <div className='flex flex-wrap mt-12 gap-4 justify-center'>
            <CardCategorias categoria={'Alimentos'}/>
            <CardCategorias categoria={'Frios'}/>
            <CardCategorias categoria={'Bebidas'}/>
        </div>
    </div>
  )
}

export default Teste
