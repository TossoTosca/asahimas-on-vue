import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
import Swal from 'sweetalert2';

import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "../App.css";
import ErrorMessage from '../components/ErrorMessage';

export default function MyProductPage() {
    const accessToken = localStorage.getItem('accessToken');

    const endpoint = `http://localhost:3004/myProduct?hereForYou=${accessToken}`
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='container py-4 px-4 justify-content-center' style={{ height: '93vh', width: '160vh' }}>
            <div className='row'>
                <h1>My Product</h1>
            </div>
            <div className='row'>
                <Swiper
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar]}
                    className="mySwiper"
                    slidesPerView={5}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }
                    }}
                >

                    {products.length ?
                        products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <CardComponent product={product} endpoint={endpoint} />
                            </SwiperSlide>
                        )) : <h1>Tidak Ada Produk</h1>
                    }
                </Swiper>
            </div>
        </div>
    )
}
