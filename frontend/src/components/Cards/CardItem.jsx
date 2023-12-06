import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({image,produto,disponivel,category,price}) {

  return (
    // <Link to={`/product/${id}`}>
      <Card style={{width: '300px'}} sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <div>
            <CardMedia
              component="img"
              image={image}
              alt="green iguana"
              className='w-[300px] h-[400px]'
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {produto}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              R$ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={`${disponivel ? null : 'bg-red-300'}`} size="small" color="primary">
            {disponivel ? <p className='text-white bg-green-500 py-2 px-2 rounded-md'>Disponivel</p> : <p className='text-white bg-red-300  py-2 px-2 rounded-md'>Indisponivel</p>}
          </Button>
        </CardActions>
      </Card>
    // </Link>
  );
}

MultiActionAreaCard.propTypes = {
  price: PropTypes.number,
  image: PropTypes.string,
  produto: PropTypes.string,
  disponivel: PropTypes.bool,
  category: PropTypes.string,
  // id: PropTypes.string
};