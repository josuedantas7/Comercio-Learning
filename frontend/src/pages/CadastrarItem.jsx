import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import CardCadastrarItem from '../components/Cards/CardCadastrarItem'
import PrimaryTitle from '../components/Text/PrimaryTitle'

import { Navigate } from 'react-router-dom'

const CadastrarItem = () => {

  const { signed } = useContext(AuthContext)
    
  if (!signed) {
    return <Navigate to="/login" />
  }

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
