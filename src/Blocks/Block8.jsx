import React from "react";
import { patients } from "../assets/constants/patients";
import PatientCard from "../components/PatientCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';





const Block8 = () => {
    return (
        <section className="py-12 bg-blue-grad">
            <div className="container mx-auto">
                <h2 className="font-normal text-4xl text-white">Кому может быть необходима<br /> пассивная иммунизация от Covid-19?</h2>
            </div>
            <div className="mt-16 slider mx-auto ml-12">
                <Swiper
                    spaceBetween={25}
                    slidesPerView={2.5}
                    // onSlideChange={() => console.log()}
                    // onSwiper={(swiper) => console.log()}
                >
                    {patients.map(
                        (pat, id) => (
                            <SwiperSlide key={id} >
                                <PatientCard data={pat} odd={id % 2 === 0} />
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </section>
    )
}

export default Block8;