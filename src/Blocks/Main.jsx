import React, { useEffect, useRef, useState } from "react";
import mainBg from '../assets/images/mainbg.jpeg'
import { motion } from 'framer-motion'
import { divAnimation, hideHeader, hideHeaderSec, rays } from "../assets/constants/mainPagestyles";


const Main = () => {
    return (
        <section className="main bg-lavender grid place-items-center overflow-hidden" style={{ height: '100vh' }}>
            <motion.div variants={rays} whileInView='visible' initial='hidden' className="w-full h-full rays" >
                <img className="w-full h-full" src={mainBg} alt="" />
            </motion.div>
            <div className="container px-12 absolute z-10 ">
                <div className="pb-8 pt-16 w-7/12 mx-auto">
                    <h1 className="title quote min-[1050px]:text-6xl text-5xl text-white text-center min-[1600px]:text-8xl">
                        <span>
                            <motion.span className="h1" variants={hideHeader} whileInView='visible' initial='hidden' >
                                Весь спектр защиты
                            </motion.span>
                        </span>
                        <span >
                            <motion.span className="h1" variants={hideHeaderSec} whileInView='visible' initial='hidden'>
                                от Covid-19
                            </motion.span>
                        </span>
                    </h1 >
                    <motion.div variants={divAnimation}
                        whileInView='visible' initial='hidden'
                        className={`mt-6 mx-auto w-fit text-white text-center min-[1600px]:text-2xl`
                        }>
                        <p className="font-bold">Люди с ослабленным иммунитетом могут нуждаться<br /> в дополнительной защите от коронавирусной инфекции.<sup>1</sup></p>
                        <p className="font-normal mt-2">Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска </p>
                        <button className="btn mx-auto block mt-6 min-[1600px]:text-2xl">Пройти опрос**</button>
                    </motion.div >
                </div >
            </div >
        </section >

    )
}

export default Main;