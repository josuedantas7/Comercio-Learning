import React from 'react'
import Proptypes from 'prop-types'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputLogin = ({handleSubmit,label,onChange}) => {
  return (
    <div className='flex justify-center'>
        <Box
        component="form"
        sx={{
        '& > :not(style)': { width: '300px' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField onSubmit={() => handleSubmit()} onChange={(e) => onChange(e.target.value)} id="outlined-basic" label={label} variant="outlined" />
        </Box>
    </div>
  )
}

export default InputLogin

InputLogin.propTypes = {
    label: Proptypes.string.isRequired,
    onChange: Proptypes.func.isRequired,
    handleSubmit: Proptypes.func.isRequired
}
