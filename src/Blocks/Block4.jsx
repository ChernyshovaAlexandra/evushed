import React, { useRef } from "react";
import Icon from "../components/Icon";
import doc from '../assets/images/doctor-1.png'
import doc2 from '../assets/images/doctor-2.png'
import { motion } from 'framer-motion'
import { ParallaxLayer } from "@react-spring/parallax";
import Rays from '../assets/images/raysbg.jpeg'
import Rays2 from '../assets/images/raysLbg.jpeg'
import tela from '../assets/images/tela.png';
import t1 from '../assets/images/doctor-after-light.png'
import t2 from '../assets/images/doctor-after.png'

const Block4 = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const parentRef = useRef();
    const props = { initial: { opacity: 0, transition: { duration: .2, delay: .2 } }, animated: { opacity: 1, transition: { duration: .2, delay: .2 } } }
    console.log(ref.current)
    return (
        <section className="bg-lavender lavender grid items-center relative z-20">
            <ParallaxLayer sticky={{ start: 3, end: 6.5 }} >
                <div className="w-full h-full">
                    <img src={Rays} className='w-full h-full' alt="" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer sticky={{ start: 4, end: 5 }} >
                <div className="w-full h-full ">
                    <img src={Rays2} className='w-full h-full' alt="" />
                </div>
            </ParallaxLayer>


            <div className="container absolute top-64 left-12 flex text-2xl my-auto h-fit" >
                <div className="w-5/12 lavender" >
                    <ParallaxLayer sticky={{ start: 3, end: 6.5 }} >
                        <motion.h2 variants={props} initial="initial"
                            whileInView='animated'
                            className="text-white header min-[1000px]:text-4xl sm:text-5xl 2xl:text-6xl">спектр защиты<br />от Covid-19 </motion.h2>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 4, end: 5 }}>
                        <motion.h2 variants={props} initial="initial"
                            whileInView='animated'
                            className="text-blue header min-[1000px]:text-4xl sm:text-5xl 2xl:text-6xl">спектр защиты<br />от Covid-19 </motion.h2>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 3, end: 4 }} id='icons'>
                        <ParallaxLayer offset={0}>
                            <div className="flex gap-3 items-center mt-40">
                                <Icon id={0} img={`<svg  viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9047 7.85058C21.9657 7.8254 22.0343 7.8254 22.0953 7.85058L36.2508 13.6882C36.3444 13.7268 36.4054 13.818 36.4054 13.9193V25.0807C36.4054 25.182 36.3444 25.2732 36.2508 25.3118L22.0953 31.1494C22.0343 31.1746 21.9657 31.1746 21.9047 31.1494L7.74924 25.3118C7.65563 25.2732 7.59456 25.182 7.59456 25.0807V13.9193C7.59456 13.818 7.65563 13.7268 7.74924 13.6882L21.9047 7.85058Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M37 14H43V23C43 24.1046 42.1046 25 41 25H37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M7 14H1V23C1 24.1046 1.89543 25 3 25H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M22 8V31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M30 28L22 12L14 28L22 31L30 28Z" fill="currentColor"/></svg>`} />
                                <Icon id={1} img={`<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="12" width="22" height="27" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M19.6154 24L9.87294 30.6459C9.32676 31.0185 9 31.6369 9 32.2981V37C9 38.1046 9.89543 39 11 39H27L19.6154 24Z" fill="currentColor"/><path d="M30.5119 17.7432L9.49187 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M13.3896 10.4705C13.3896 9.36589 14.2851 8.47046 15.3896 8.47046H25.2312C26.3358 8.47046 27.2312 9.36589 27.2312 10.4705V11.6647H13.3896V10.4705Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M18.7134 1.01733H22.9723V8.4705H18.7134V1.01733Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M13.625 1.01733C12.5204 1.01733 11.625 1.91276 11.625 3.01733L11.625 4.5766L18.7435 4.5766L18.7435 1.01733L13.625 1.01733Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                                <Icon id={2} img={`<svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 29V27.2303L9.10807 20.0955C11.1389 18.073 12.1544 16.3408 12.1544 14.8989C12.1544 13.6442 11.7595 12.6704 10.9697 11.9775C10.1987 11.2659 9.26791 10.9101 8.17725 10.9101C6.14637 10.9101 4.67023 11.8371 3.74881 13.691L2.08462 12.7079C2.70517 11.4906 3.55136 10.573 4.62322 9.95506C5.69507 9.31835 6.87975 9 8.17725 9C9.75682 9 11.1389 9.53371 12.3236 10.6011C13.5271 11.6498 14.1288 13.0824 14.1288 14.8989C14.1288 16.0412 13.8092 17.1367 13.1698 18.1854C12.5305 19.2341 11.6279 20.339 10.462 21.5L4.82066 27.0899H14.5519V29H2Z" fill="currentColor"/><path d="M36 9.33708V29H34.0255V12.3146L27.1149 23.8315H26.8328L19.9222 12.3146V29H17.9478V9.33708H20.4017L26.9739 20.2921L33.546 9.33708H36Z" fill="currentColor"/></svg>`} />
                            </div>
                            <motion.div variants={props} initial="initial" whileInView='animated' className="mt-6">
                                <h2 className="text-white font-normal text-xl xl:text-3xl">Меры предосторожности</h2>
                                <p className="text-white text-lg mt-2 font-normal xl:text-2xl">Соблюдение правил личной гигиены, социальное дистанцирование, использование средств индивидуальной защиты (медицинская маска, респиратор, лицевой щиток и т.д.)  </p>
                            </motion.div>
                        </ParallaxLayer>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 4, end: 5 }} id='icons'>
                        <ParallaxLayer offset={0}>
                            <div className="flex gap-3 items-center mt-40">
                                <Icon id={0} img={`<svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="10" width="17" height="29" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 38L27 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M20 24.5L27.3253 37.84L27 38.5L11.5 38.5L20 24.5Z" fill="currentColor"/><path d="M13 9C13 7.89543 13.8954 7 15 7H24C25.1046 7 26 7.89543 26 9V10H13V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 3C12 1.89543 12.8954 1 14 1H25C26.1046 1 27 1.89543 27 3V5C27 6.10457 26.1046 7 25 7H14C12.8954 7 12 6.10457 12 5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                            </div>
                            <motion.div variants={props} initial="initial" whileInView='animated' className="mt-6">
                                <h2 className="text-blue font-normal text-xl xl:text-3xl">Вакцинация</h2>
                                <p className="text-blue text-lg mt-2 font-normal xl:text-2xl">Вакцинация является важной опцией профилактики коронавирусной инфекции<sup>3</sup></p>
                            </motion.div>
                        </ParallaxLayer>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 5, end: 6.5 }} id='icons' ref={ref3}>
                        <ParallaxLayer offset={0}>
                            <div className="flex gap-3 items-center mt-40">
                                <Icon id={0} img={`<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.80957 5L17.4921 14.2424C17.8875 14.6198 18.1112 15.1426 18.1112 15.6891V34.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 7.34131L14.3651 16.2381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M32.1587 5L22.4762 14.2424C22.0808 14.6198 21.8571 15.1426 21.8571 15.6891V34.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M34.9683 7.34131L25.6032 16.2381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                            </div>
                            <motion.div variants={props} initial="initial" whileInView='animated' className="mt-6">
                                <h2 className="text-white font-normal text-xl xl:text-3xl">Пассивная иммунизация</h2>
                                <p className="text-white text-lg mt-2 font-normal xl:text-2xl">Пассивная иммунизация является дополнительной мерой защиты для пациентов со сниженным иммунным статусом или противопоказаниями к вакцинации</p>
                                <span className="text-white text-lg xl:text-2xl mt-2 font-normal"> Спросите у вашего лечащего врача о дополнительной защите от COVID-19<sup>3</sup></span>
                            </motion.div>

                        </ParallaxLayer>
                    </ParallaxLayer>

                    <ParallaxLayer sticky={{ start: 3, end: 6.5 }} id='icons'>
                        <ParallaxLayer offset={0.57}>
                            <motion.div variants={props} initial="initial" whileInView='animated' className="mt-6 xl:mt-12">
                                <a href="" className="btn text-lg xl:text-2xl">Узнать больше</a>
                            </motion.div>
                        </ParallaxLayer>
                    </ParallaxLayer>
                </div>
            </div>

            <div className="w-6/12 pl-16 h-full right-0 absolute lavender" ref={ref}>
                <ParallaxLayer sticky={{ start: 3, end: 4 }}>
                    <ParallaxLayer offset={-3.8} horizontal={true} speed={-.38} factor={.8}>
                        <img className="bottom-0 -right-32 absolute" src={doc} alt="" />
                    </ParallaxLayer>
                    <img className="-bottom-8 -right-8 absolute w-96 h-96" src={t2} alt="" />
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 4, end: 5 }}>
                    <ParallaxLayer offset={1.5} horizontal={true} speed={.35} factor={.8}>
                        <img className="bottom-0 -right-32 absolute" src={doc2} alt="" />
                    </ParallaxLayer>
                    <img className="-bottom-8 -right-8 absolute w-96 h-96" src={t1} alt="" />
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 5, end: 6.5 }}>
                    <ParallaxLayer offset={2.1} horizontal={true} speed={.5} factor={.95}>
                        <img className="bottom-0 -right-32 absolute" src={tela} alt="" />
                    </ParallaxLayer>
                    <img className="-bottom-8 -right-8 absolute w-96 h-96" src={t2} alt="" />
                </ParallaxLayer>

            </div>

        </section>

    )
}

export default Block4;