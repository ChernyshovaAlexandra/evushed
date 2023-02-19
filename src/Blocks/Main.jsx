import React, { useEffect, useRef, useState } from "react";
import mainBg from '../assets/images/mainbg.jpeg'
import { motion } from 'framer-motion'
import { ParallaxLayer } from "@react-spring/parallax";

const Main = () => {
    const ref = useRef(null);

    const divAnimation = {
        hidden: {
            opacity: 0,
            y: -100,

        },
        vissible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: '.2',
                duration: '.6'
            }
        }
    }

    return (
        <section className="main bg-lavender grid place-items-center" >
            <div className="w-full h-full rays">
                <img className="w-full h-full" src={mainBg} alt="" />
            </div>
            <div className="container px-12 absolute z-10 ">
                <motion.div
                    variants={divAnimation}
                    viewport={{
                        // once: true,
                        percent: '30%'
                    }}
                    className="pb-8 pt-16 w-7/12 mx-auto "
                    initial='hidden'
                    whileInView="vissible"
                >
                    <h1
                        className="quote min-[1050px]:text-6xl text-5xl text-white text-center min-[1600px]:text-8xl">
                        Весь спектр защиты <br />
                        от Covid-19
                    </h1 >
                    <div
                        className={`mt-6 mx-auto w-fit text-white text-center min-[1600px]:text-2xl`}>
                        <p className="font-bold">Люди с ослабленным иммунитетом могут нуждаться<br /> в дополнительной защите от коронавирусной инфекции.<sup>1</sup></p>
                        <p className="font-normal mt-2">Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска </p>
                        <button className="btn mx-auto block mt-6 min-[1600px]:text-2xl">Пройти опрос**</button>
                    </div>

                </motion.div>
            </div>
        </section>

    )
}

export default Main;