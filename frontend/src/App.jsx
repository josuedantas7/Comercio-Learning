import axios from 'axios'
import BannerHome from './components/Banner/BannerHome'
import CardCategorias from './components/Cards/CardCategorias'
import PrimaryTitle from './components/Text/PrimaryTitle'
import { useEffect, useState } from 'react'
import Loading2 from './components/Loading/Loading2'
import LoadingComponent from './components/Loading/Loading'

const apiUrl = import.meta.env.VITE_APP_API_URL

const App = () => {

  const [categorys,setCategorys] = useState([])
  const [loading,setLoading] = useState(true)

  console.log(apiUrl)
  // console.log(mode)

  function getCategorys(){
    axios.get(`${apiUrl}/category`).then(response => {
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