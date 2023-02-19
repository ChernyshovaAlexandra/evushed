import React, { useRef } from "react";
import Icon from "../components/Icon";
import Rays from '../assets/images/raysLbg.jpeg'
import doc from '../assets/images/doctor-2.png'
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from 'framer-motion'


const Block5 = () => {
    const ref = useRef();
    const props = { initial: { opacity: 0, transition: { duration: .2, delay: .2 } }, animated: { opacity: 1, transition: { duration: .2, delay: .2 } } }
    return (
        <section className="bg-lavender grid items-center relative ">
            <div className="w-full h-full doc-after doc-after-light ">
                <img src={Rays} className='w-full h-full' alt="" />
            </div>
            <div className="container absolute z-10 flex text-2xl left-12 bottom-0 my-auto h-fit top-8">
                <div className="w-4/12">
                    <motion.h2 variants={props} initial="initial" whileInView='animated' className="text-blue header text-5xl">спектр защиты<br />от Covid-19 </motion.h2>
                    <div className="mt-32">
                        <div className="flex gap-3 items-center">
                            <Icon id={0} img={`<svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="10" width="17" height="29" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 38L27 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M20 24.5L27.3253 37.84L27 38.5L11.5 38.5L20 24.5Z" fill="currentColor"/><path d="M13 9C13 7.89543 13.8954 7 15 7H24C25.1046 7 26 7.89543 26 9V10H13V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 3C12 1.89543 12.8954 1 14 1H25C26.1046 1 27 1.89543 27 3V5C27 6.10457 26.1046 7 25 7H14C12.8954 7 12 6.10457 12 5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />

                        </div>
                        <motion.div variants={props} initial="initial" whileInView='animated' className="mt-6">
                            <h2 className="text-blue font-normal">Вакцинация</h2>
                            <p className="text-blue text-lg mt-2 font-normal">Вакцинация является важной опцией профилактики коронавирусной инфекции<sup>3</sup></p>
                        </motion.div>
                    </div>
                    <motion.div variants={props} initial="initial" whileInView='animated' className="mt-12">
                        <a href="" className="btn text-lg">Узнать больше</a>
                    </motion.div>
                </div>


            </div>
            <div className="absolute right-0 bottom-0 z-20 w-5/12  min-[1000px]:-right-32 min-[1320px]:right-24">
                <div className="relative w-full h-full" ref={ref}>
                    <ParallaxLayer offset={-4.65} horizontal={true} speed={-.47} factor={.8}>
                        <img className="bottom-0 right-4 absolute" src={doc} alt="" />
                    </ParallaxLayer>
                </div>
            </div>
        </section>
    )
}

export default Block5;