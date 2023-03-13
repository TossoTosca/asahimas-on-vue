import React from 'react';
import CardComponent from '../components/CardComponent';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "../App.css";

export default function MyProductPage() {
    const accessToken = localStorage.getItem('accessToken');

    const endpoint = `http://localhost:3004/myProduct?hereForYou=${accessToken}`
    return (
        <div className='container py-4 px-4 justify-content-center' style={{ height: '100vh' }}>
            <div className='row'>
                <h1>My Product</h1>
            </div>
            <div className='row'>
                <Swiper
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode]}
                    className="mySwiper"
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

                    <SwiperSlide>
                        <CardComponent endpoint={endpoint} />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
