import axios from 'axios'
import BannerHome from './components/Banner/BannerHome'
import CardCategorias from './components/Cards/CardCategorias'
import PrimaryTitle from './components/Text/PrimaryTitle'
import { useEffect, useState } from 'react'
import Loading2 from './components/Loading/Loading2'
import LoadingComponent from './components/Loading/Loading'

const App = () => {

  const [categorys,setCategorys] = useState([])
  const [loading,setLoading] = useState(true)

  function getCategorys(){
    axios.get('https://comercialluna.onrender.com/category').then(response => {
      setCategorys(response.data.categories)
      setLoading(false)
    })
  }

  useEffect(() => {
    getCategorys()
  },[])

  return (
    <div>
        <BannerHome/>
          <PrimaryTitle title={'Itens Disponíveis'} />
        {loading ? (
          <LoadingComponent/>
        ): (
          <div className='flex flex-wrap gap-4 justify-center mb-32'>
            {categorys.map((item) => (
              <CardCategorias key={item.category} category={item.category} images={item.images}/>
            ))}
          </div>
        )}
    </div>
  )
}
export default App