import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import PropTypes from 'prop-types'

export default function BasicSelect({categoria,setCategoria}) {

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  return (
    <Box
    className='w-full mx-auto max-[450px]:w-[300px] min-[450px]:w-[400px] min-[600px]:w-[500px]'
    component="form"
    sx={{
    '& > :not(style)': { width: '100%' },
    }}
    noValidate
    autoComplete="off"
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoria}
          label="categoria"
          onChange={handleChange}
        >
          <MenuItem value={'Frios'}>Frios</MenuItem>
          <MenuItem value={'Limpeza'}>Limpeza</MenuItem>
          <MenuItem value={'Alimentos'}>Alimentos</MenuItem>
          <MenuItem value={'Bebidas'}>Bebidas</MenuItem>
          <MenuItem value={'Higiene'}>Higiene</MenuItem>
          <MenuItem value={'Cervejas'}>Cervejas</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


BasicSelect.propTypes = {
  categoria: PropTypes.string.isRequired,
  setCategoria: PropTypes.func.isRequired
}