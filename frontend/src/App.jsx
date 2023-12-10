import axios from 'axios'
import BannerHome from './components/Banner/BannerHome'
import CardCategorias from './components/Cards/CardCategorias'
import PrimaryTitle from './components/Text/PrimaryTitle'
import { useEffect, useState } from 'react'

const App = () => {

  const [categorys,setCategorys] = useState([])

  function getCategorys(){
    axios.get('https://comercialluna.onrender.com/category').then(response => {
      console.log(response.data)
      setCategorys(response.data.categories)
    })
  }

  useEffect(() => {
    getCategorys()
  },[])

  return (
    <div>
        <BannerHome/>
          <PrimaryTitle title={'Itens Disponíveis'} />
        <div className='flex flex-wrap gap-4 justify-center mb-32'>
          {categorys.map((item) => (
            <CardCategorias key={item.category} category={item.category} images={item.images}/>
          ))}
        </div>
    </div>
  )
}
export default App