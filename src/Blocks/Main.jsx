import React, { useEffect, useRef, useState } from "react";
import mainBg from '../assets/images/mainbg.jpeg'
import { AnimatePresence, motion } from 'framer-motion'
import { ParallaxLayer } from "@react-spring/parallax";

const Main = ({ percent, y }) => {


    const divAnimation = {
        hidden: y => ({
            opacity: y > percent ? 0 : 1,
            transition: {
                delay: '.1',
                duration: '.6'
            }
        }),
        visible: y => ({
            opacity: y > percent ? 0 : 1,
            transition: {
                delay: '.1',
                duration: '.6'
            }
        })
    }
    const hideHeader = {
        visible: y => ({
            transform: y > percent ? 'translateY(100%)' : 'translateY(0%)',
            transition: { duration: .2 }
        }),
        hidden: y => ({
            transform: y > percent ? 'translateY(100%)' : 'translateY(0%)',
            transition: { duration: .2 }
        })
    }
    const hideHeaderSec = {
        visible: y => ({
            transform: y > percent ? 'translateY(100%)' : 'translateY(0%)',
            transition: { duration: .2, delay: .1 }
        }),
        hidden: y => ({
            transform: y > percent ? 'translateY(100%)' : 'translateY(0%)',
            transition: { duration: .2, delay: .1 }
        })
    }
    const rays = {
        visible: y => ({
            transform: y > percent ? 'scale(3)' : 'scale(1)',
            transition: { duration: .8, delay: .1 }
        }),
        hidden: y => ({
            transform: y > percent ? 'scale(3)' : 'scale(1)',
            transition: { duration: .8, delay: .1 }
        })
    }
    return (
        <section className="main bg-lavender grid place-items-center overflow-hidden" style={{ height: '100vh' }} >
            <motion.div variants={rays} custom={y} initial='visible' animate='hidden' className="w-full h-full rays" >
                <img className="w-full h-full" src={mainBg} alt="" />
            </motion.div>
            <div className="container px-12 absolute z-10 ">
                <div className="pb-8 pt-16 w-7/12 mx-auto">
                    <h1 className="title quote min-[1050px]:text-6xl text-5xl text-white text-center min-[1600px]:text-8xl">
                        <span>
                            <motion.span variants={hideHeader} custom={y} initial='visible' animate='hidden' >
                                Весь спектр защиты
                            </motion.span>
                        </span>
                        <span>
                            <motion.span variants={hideHeaderSec} custom={y} initial='visible' animate='hidden'>
                                от Covid-19
                            </motion.span>
                        </span>
                    </h1 >
                    <motion.div variants={divAnimation}
                        custom={y} initial='visible' animate='hidden'
                        className={`mt-6 mx-auto w-fit text-white text-center min-[1600px]:text-2xl`}>
                        <p className="font-bold">Люди с ослабленным иммунитетом могут нуждаться<br /> в дополнительной защите от коронавирусной инфекции.<sup>1</sup></p>
                        <p className="font-normal mt-2">Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска </p>
                        <button className="btn mx-auto block mt-6 min-[1600px]:text-2xl">Пройти опрос**</button>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}

export default Main;