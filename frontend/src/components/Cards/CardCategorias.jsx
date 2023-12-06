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

const CardCategorias = ({ categoria }) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        getDados();
    }, [images,categoria]);

    return (
        <>
            {!isLoading ? (
                <Link to={`/categoria/${categoria}`} className='border-2 flex flex-col rounded-lg w-[300px]'>
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
            </Link>
            ): <LoadingComponent/>}
        </>
    );
};

export default CardCategorias;


CardCategorias.propTypes = {
    categoria: Proptypes.string.isRequired,
}
