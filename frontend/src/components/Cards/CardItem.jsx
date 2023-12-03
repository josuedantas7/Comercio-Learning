import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PropTypes from 'prop-types';

export default function MultiActionAreaCard({image,produto,disponivel,categoria}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          className='w-[100%] h-[300px] object-fit'
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {produto}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {categoria}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={`${disponivel ? null : 'bg-red-300'}`} size="small" color="primary">
          {disponivel ? <p className='text-white bg-green-500 py-2 px-2 rounded-md'>Disponivel</p> : <p className='text-white bg-red-300  py-2 px-2 rounded-md'>Indisponivel</p>}
        </Button>
      </CardActions>
    </Card>
  );
}

MultiActionAreaCard.propTypes = {
  image: PropTypes.string.isRequired,
  produto: PropTypes.string.isRequired,
  disponivel: PropTypes.bool.isRequired,
  categoria: PropTypes.string.isRequired,
};