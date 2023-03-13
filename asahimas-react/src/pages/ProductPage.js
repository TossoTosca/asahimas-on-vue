import React from 'react';
import CardComponent from '../components/CardComponent';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css"
import "swiper/css/free-mode";

import 'bootstrap/dist/css/bootstrap.min.css'

import "../App.css";

export default function ProductPage() {

    const endpoint = 'http://localhost:3004/products';
    return (
        <div className='container py-4 px-4 justify-content-center' style={{ height: '100%' }}>
            <div className='row'>
                <h1>List Product</h1>
            </div>

            <div className='row'>
                <Swiper
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
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
                    <SwiperSlide>
                        <CardComponent endpoint={endpoint} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
