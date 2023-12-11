import React from 'react'

const Loading2 = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center gap-2'>
            <p className='text-3xl font-extrabold'>Carregando Itens</p>
            <img className='mt-4' src={'../src/components/Loading/Ellipsis-1s-200px.gif'} width={50} height={30} />
        </div>
    </div>
  )
}

export default Loading2
