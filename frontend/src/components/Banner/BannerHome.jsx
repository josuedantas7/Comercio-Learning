import React from 'react'

import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import imagem1 from '../../assets/ComercialLuna.png'
import imagem2 from '../../assets/ComercialLuna2.png'
import imagem3 from '../../assets/ComercialLuna3.png'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore from 'swiper'

SwiperCore.use([Autoplay, Navigation, Pagination])

const images = [imagem2,img8,imagem3 ]

const BannerHome = () => {
  return (
    <div className='w-full h-[400px] max-[670px]:h-[250px]'>
        <Swiper
        modules={[EffectFade]}
        effect="fade"
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className=''
        >
        <div className="swiper-button-next" style={{ color: 'white' }}></div>
        <div className="swiper-button-prev" style={{ color: 'white' }}></div>
        {images.map((i, el) => {
            return <SwiperSlide key={el}><img src={i} className='w-full h-[400px] max-[670px]:h-[250px]'/></SwiperSlide>;
        })}
        </Swiper>
    </div>
)
}

export default BannerHome
