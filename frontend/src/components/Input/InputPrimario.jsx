import Proptypes from 'prop-types'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputPrimario = ({label,onChange,type}) => {
  return (
    <div className='flex justify-center'>
        <Box
        className='w-full max-[450px]:w-[300px] min-[450px]:w-[400px] min-[600px]:w-[500px] min-[800px]:w-[600px]'
        component="form"
        sx={{
        '& > :not(style)': { width: '100%' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField type={type} onChange={(e) => onChange(e.target.value)} id="outlined-basic" label={label} variant="outlined" />
        </Box>
    </div>
  )
}

export default InputPrimario

InputPrimario.propTypes = {
  label: Proptypes.string.isRequired,
  type: Proptypes.string,
  onChange: Proptypes.func.isRequired
}
