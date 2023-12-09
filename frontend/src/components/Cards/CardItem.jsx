import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MultiActionAreaCard({id,image,produto,disponivel,category,price}) {



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowSize = window.innerWidth;
      const isMobile = windowSize <= 640;
      setIsMobile(isMobile);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <Link to={`/product/${id}`} className={`border-2 mx-8 max-[400px]:mx-1 ${disponivel ? 'border-green-600' : 'border-red-300'} w-full h-[150px] flex flex-wrap rounded-xl`}>
        <div className='w-[35%] h-[150px] max-[400px]:w-[45%]'>
          <img src={image} alt="" className='w-[150px] h-[150px] py-1 rounded-xl border-r-[1px]'/>
        </div>
        <div className='flex flex-col w-[65%] max-[400px]:w-[55%] items-center'>
          <div>
            <p className='text-lg font-bold text-gray-700 text-center'>{produto}</p>
          </div>
          <div>
            <p className='text-md text-gray-500 font-semibold'>{category}</p>
          </div>
          <div>
            <p className='text-sm text-gray-900 font-semibold'>R$ {price}</p>
          </div>
          <div>
            <Button className={`${disponivel ? null : 'bg-red-300'}`} size="small" color="primary">
              {disponivel ? <p className='text-white bg-green-500 py-2 px-2 rounded-md'>Disponivel</p> : <p className='text-white bg-red-300  py-2 px-2 rounded-md'>Indisponivel</p>}
            </Button>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/product/${id}`}>
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
    </Link>
  );
}

MultiActionAreaCard.propTypes = {
  price: PropTypes.number,
  image: PropTypes.string,
  produto: PropTypes.string,
  disponivel: PropTypes.bool,
  category: PropTypes.string,
  id: PropTypes.string
};