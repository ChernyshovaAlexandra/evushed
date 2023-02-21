import React, { useState } from "react";
import Icon from "../components/Icon";
import bg from '../assets/images/bg_with_polygon.jpeg'
import { motion } from 'framer-motion';


import vac from '../assets/images/vacine.png'
const Block2 = () => {

    return (
        <section className="bg-lavender grid items-center absolute">
            <div className="w-full" style={{ height: '300vh' }}>
                <img src={bg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute w-42p container text-2xl top-0 bottom-0 my-auto h-fit text-white h2 words" >
                <span className="type py-4 relative left-12">
                    Вакцинация является важной опцией
                    профилактики коронавирусной инфекции,
                    однако не всегда она обеспечивает
                    необходимую защиту<small>2</small>. Люди со сниженным
                    иммунитетом <span >могут нуждаться в дополнительной защите</span> от COVID-19<small>3-5</small>
                </span>

            </div>
            <div className="flex gap-4 items-center bottom-12 left-12 absolute">
                <Icon id={0} img={`<svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.81127 11.5946L15.9464 29L31.0815 11.5946" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 15L15.0583 26.3631C15.3743 27.248 16.6257 27.248 16.9417 26.3631L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15.9463 29L15.9463 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                <p className="text-white font-bold text-lg">Смотри спектр защиты от COVID-19</p>
            </div>
            <div
                className="absolute right-0 top-0 bottom-0 my-auto" style={{ height: '50vh', width: '40%' }}>
                <img className="w-80" src={vac} alt="" />
                <img className="w-80 rotate-45 right-32 relative" src={vac} alt="" />
            </div>
        </section>
    )
}

export default Block2;