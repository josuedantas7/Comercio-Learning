import CardCadastrarItem from '../components/Cards/CardCadastrarItem'
import PrimaryTitle from '../components/Text/PrimaryTitle'

const CadastrarItem = () => {
    
  return (
    <div>
      <PrimaryTitle botaoVoltar={true} title='Cadastrar Item:'/>
      <div className='flex justify-center'>
        <CardCadastrarItem />
      </div>
    </div>
  )
}

export default CadastrarItem
