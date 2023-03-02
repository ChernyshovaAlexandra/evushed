import React from "react";
import { patients } from "../assets/constants/patients";
import PatientCard from "../components/PatientCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { animated } from '@react-spring/web';
import { coordinates } from "../assets/constants/coordinates";




const Block8 = ({ scrollYProgress }) => {
    return (
        <section className="py-24 bg-blue-grad px-12 w-full z-50 relative"
        >
            <div className="container mx-auto">
                <h2 className="font-normal text-4xl text-white header-sec">Кому может быть необходима<br /> пассивная иммунизация от Covid-19?</h2>
            </div>
            <div className="">
                <Swiper spaceBetween={25} slidesPerView={2.5}>
                    {patients.map((pat, id) => (
                        <SwiperSlide key={id} >
                            <PatientCard data={pat} odd={id % 2 === 0} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Block8;