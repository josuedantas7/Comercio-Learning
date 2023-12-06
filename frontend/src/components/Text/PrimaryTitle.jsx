import ButtonVoltar from '../Button/ButtonVoltar'
import PropTypes from 'prop-types'

const PrimaryTitle = ({title, botaoVoltar}) => {
  return (
    <div className='my-8 flex justify-center items-center'>
        {botaoVoltar && <ButtonVoltar />}
        <h1 className='text-3xl max-[420px]:text-xl text-center text-gray-700 font-extrabold'>{title}</h1>
    </div>
  )
}

export default PrimaryTitle


PrimaryTitle.propTypes = {
    title: PropTypes.string.isRequired,
    botaoVoltar: PropTypes.bool
}

