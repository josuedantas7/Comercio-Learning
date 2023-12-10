import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import axios from 'axios';

import { Link } from 'react-router-dom';
import LoadingComponent from '../Loading/Loading';

import Proptypes from 'prop-types';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const CardCategorias = ({ category,images }) => {

    return (
        <Link to={`/categoria/${category}`} className='border-2 flex flex-col rounded-lg w-[300px]'>
        {images.length > 0 && (
            <>
                <div className='max-w-[295px]'>
                    <Swiper
                        modules={[EffectFade]}
                        effect="fade"
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className='w-[300px]'
                    >
                        <div className="swiper-button-next" style={{ color: 'gray' }}></div>
                        <div className="swiper-button-prev" style={{ color: 'gray' }}></div>
                        {images.map((i, el) => (
                            <SwiperSlide key={el}><img src={i} className='w-[296px] rounded-t-md h-[200px]' /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className=''>
                    <h1 className='text-3xl text-center text-gray-700 font-bold'>{category}</h1>
                    <p className='text-center text-gray-700 mb-2'>Quantidade de itens achados: {images.length}</p>
                </div>
            </>
        )}
    </Link>
    );
};

export default CardCategorias;


CardCategorias.propTypes = {
    category: Proptypes.string.isRequired,
    images: Proptypes.array.isRequired,
}
