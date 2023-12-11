import React from 'react'
import Loading from './Eclipse-1s-200px.gif'

const LoadingComponent = () => {
  return (
    <div className='w-full flex justify-center'>
      <img src={Loading} className='w-[300px] h-[300px]'/>
    </div>
  )
}

export default LoadingComponent
