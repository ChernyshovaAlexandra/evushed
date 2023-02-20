import React, { useState } from "react";
import Icon from "../components/Icon";
import bg from '../assets/images/bg_with_polygon.jpeg'
import { motion } from 'framer-motion';


import vac from '../assets/images/vacine.png'
const Block2 = ({ y, blockTop }) => {
    const pillsAnimation = {
        visible: y => ({
            opacity: y >= (blockTop * 1.3) ? 1 : 0,
            transition: { delay: .2 }
        }),
        hidden: y => ({
            opacity: y >= (blockTop * 1.3) ? 1 : 0,
            transition: { delay: .2 }
        })
    }
    const pinkSpan = {
        pink: y => ({
            color: y >= (blockTop * 1.3) ? '#F11952' : "",
            transition: { delay: 3.2 }
        }),
        white: y => ({
            color: y >= (blockTop * 1.3) ? '#F11952' : "",
            transition: { delay: 3.2 }
        })
    }
    const pinkSpanContainer = {
        hidden: y => ({
            animation: y >= (blockTop * 1.3) ? 'b 0.7s infinite steps(1), t calc(220 * 0.015s) steps(220) both' : '',
            // opacity
        }),
        visible: y => ({
            animation: y >= (blockTop * 1.3) ? 'b 0.7s infinite steps(1), t calc(220 * 0.015s) steps(220) both' : ''
        })
    }
    return (
        <section className="bg-lavender grid items-center relative" >
            <div className="w-full" style={{ height: '100vh' }}>
                <img src={bg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute w-42p container text-2xl  top-0 bottom-0 my-auto h-fit text-white h2 words" >
                <motion.span variants={pinkSpanContainer} initial="hidden" animate="visible" custom={y} className="type py-4 relative left-12">
                    Вакцинация является важной опцией
                    профилактики коронавирусной инфекции,
                    однако не всегда она обеспечивает
                    необходимую защиту<small>2</small>. Люди со сниженным
                    иммунитетом <motion.span variants={pinkSpan} initial="white" animate="pink" custom={y}>могут нуждаться в дополнительной защите</motion.span> от COVID-19<small>3-5</small>
                </motion.span>

            </div>
            <div className="flex gap-4 items-center bottom-12 left-12 absolute">
                <Icon id={0} img={`<svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.81127 11.5946L15.9464 29L31.0815 11.5946" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 15L15.0583 26.3631C15.3743 27.248 16.6257 27.248 16.9417 26.3631L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15.9463 29L15.9463 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                <p className="text-white font-bold text-lg">Смотри спектр защиты от COVID-19</p>
            </div>
            <motion.div
                variants={pillsAnimation} initial="hidden" animate="hidden" custom={y}
                className="absolute right-0 top-0 bottom-0 my-auto" style={{ height: '50vh', width: '40%' }}>
                <img className="w-80" src={vac} alt="" />
                <img className="w-80 rotate-45 right-32 relative" src={vac} alt="" />
            </motion.div>
        </section>
    )
}

export default Block2;