import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import axios from 'axios';

import imagem1 from '../../assets/ComercialLuna.png';
import imagem2 from '../../assets/ComercialLuna2.png';
import imagem3 from '../../assets/ComercialLuna3.png';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const CardCategorias = ({ categoria }) => {

    const [dados, setDados] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getDados = async () => {
            try {
                const response = await axios.get('https://comercialluna.onrender.com/product');
                const products = response.data.products;

                const newImages = [];
                for (const item of products) {
                    if (item.category === categoria && !images.includes(item.image)) {
                        newImages.push(item.image);
                    }
                }

                setImages([...images, ...newImages]);
            } catch (error) {
                console.error(error);
            }
        };

        getDados();
    }, [dados,images,categoria]);

    return (
        <div className='border-2 flex flex-col rounded-lg w-[300px]'>
            {images.length > 0 && (
                <>
                    <div className='max-w-[295px]'>
                        <Swiper
                            modules={[EffectFade]}
                            effect="fade"
                            autoplay={{ delay: 2000 }}
                            loop={false}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            className='w-[300px]'
                        >
                            <div className="swiper-button-next" style={{ color: 'white' }}></div>
                            <div className="swiper-button-prev" style={{ color: 'white' }}></div>
                            {images.map((i, el) => (
                                <SwiperSlide key={el}><img src={i} className='w-[296px] rounded-t-md h-[200px]' /></SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className=''>
                        <h1 className='text-3xl text-center text-gray-700 font-bold mb-4'>{categoria}</h1>
                    </div>
                </>
            )}
        </div>
    );
};

export default CardCategorias;
