import CardCadastrarItem from '../components/Cards/CardCadastrarItem'

import PropTypes from 'prop-types'

const CadastrarItem = ({data,setData}) => {
    
  return (
    <div>
      <h1 className='text-center text-3xl my-8 font-extrabold'>Cadastrar Item</h1>
      <div className='flex justify-center'>
        <CardCadastrarItem data={data} setData={setData} />
      </div>
    </div>
  )
}

export default CadastrarItem

CadastrarItem.propTypes = {
    data: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired
}