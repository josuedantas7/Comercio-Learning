import CardCategorias from './components/Cards/CardCategorias'
import PrimaryTitle from './components/Text/PrimaryTitle'

const App = () => {

  return (
    <div>
          <PrimaryTitle title={'Itens Disponíveis'} />
        <div className='flex flex-wrap gap-4 justify-center'>
            <CardCategorias categoria={'Alimentos'}/>
            <CardCategorias categoria={'Frios'}/>
            <CardCategorias categoria={'Bebidas'}/>
        </div>
    </div>
  )
}
export default App