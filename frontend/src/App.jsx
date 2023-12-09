import BannerHome from './components/Banner/BannerHome'
import CardCategorias from './components/Cards/CardCategorias'
import PrimaryTitle from './components/Text/PrimaryTitle'

const App = () => {

  return (
    <div>
        <BannerHome/>
          <PrimaryTitle title={'Itens Disponíveis'} />
        <div className='flex flex-wrap gap-4 justify-center mb-32'>
            <CardCategorias categoria={'Alimentos'}/>
            <CardCategorias categoria={'Frios'}/>
            <CardCategorias categoria={'Bebidas'}/>
            <CardCategorias categoria={'Cervejas'}/>
        </div>
    </div>
  )
}
export default App