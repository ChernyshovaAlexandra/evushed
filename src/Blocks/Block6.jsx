import React, { useRef } from "react";
import Icon from "../components/Icon";
import Rays from '../assets/images/raysbg.jpeg'
import tela from '../assets/images/tela.png'
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from 'framer-motion'



const Block6 = () => {
    const ref = useRef();
    const props = { initial: { opacity: 0, transition: { duration: .2, delay: .2 } }, animated: { opacity: 1, transition: { duration: .2, delay: .2 } } }

    return (
        <section className="bg-lavender grid items-center relative ">
            <div className="w-full h-full doc-after">
                <img src={Rays} className='w-full h-full' alt="" />
            </div>
            <div className="container absolute z-10 flex text-2xl left-12  bottom-0 my-auto h-fit top-12 xl:top-24">
                <div className="w-5/12 xl:w-4/12">
                    <motion.h2 variants={props} initial="initial" 
                    whileInView='animated' 
                    className="text-white header min-[1000px]:text-4xl sm:text-5xl 2xl:text-6xl">спектр защиты<br />от Covid-19 </motion.h2>
                    <div className="mt-16 xl:mt-32">
                        <div className="flex gap-3 items-center">
                            <Icon id={0} img={`<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.80957 5L17.4921 14.2424C17.8875 14.6198 18.1112 15.1426 18.1112 15.6891V34.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 7.34131L14.3651 16.2381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M32.1587 5L22.4762 14.2424C22.0808 14.6198 21.8571 15.1426 21.8571 15.6891V34.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M34.9683 7.34131L25.6032 16.2381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                        </div>
                        <motion.div variants={props} initial="initial" whileInView='animated' className="mt-6">
                            <h2 className="text-white font-normal text-xl xl:text-3xl">Пассивная иммунизация</h2>
                            <p className="text-white text-lg mt-2 font-normal xl:text-2xl">Пассивная иммунизация является дополнительной мерой защиты для пациентов со сниженным иммунным статусом или противопоказаниями к вакцинации</p>
                            <span className="text-white text-lg xl:text-2xl mt-2 font-normal"> Спросите у вашего лечащего врача о дополнительной защите от COVID-19<sup>3</sup></span>
                        </motion.div>
                    </div>
                    <motion.div variants={props} initial="initial" whileInView='animated' className="mt-6 xl:mt-12">
                        <a href="" className="btn text-lg">Узнать больше</a>
                    </motion.div>
                </div>
            </div>
            <div className="absolute  bottom-0 z-20 min-[1000px]:right-96 min-[1000px]:w-1/6 min-[1600px]:right-1/3">
                <div className="relative w-full h-full" ref={ref}>
                    <ParallaxLayer offset={.55} horizontal={true} speed={.15} factor={1}>
                        <img className="bottom-0 right-4 absolute" src={tela} alt="" />
                    </ParallaxLayer>
                </div>
            </div>
        </section>
    )
}

export default Block6;