import React from 'react'
import Proptypes from 'prop-types'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputPrimario = ({label,onChange}) => {
  return (
    <div className='flex justify-center'>
        <Box
        component="form"
        sx={{
        '& > :not(style)': { width: '500px' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField onChange={(e) => onChange(e.target.value)} id="outlined-basic" label={label} variant="outlined" />
        </Box>
    </div>
  )
}

export default InputPrimario

InputPrimario.propTypes = {
    onChange: Proptypes.func.isRequired
}
