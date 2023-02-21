import React, { useEffect, useRef, useState } from "react";
import mainBg from '../assets/images/mainbg.jpeg'
import { animated, useSpring } from '@react-spring/web'
import SecBg from '../assets/images/secBG.jpeg'
import Block2 from "./Block2";

const Main = ({ scrollYProgress, translateImg, mainBgAnim, opacity, block }) => {




    return (
        <>
            <section className="main relative" style={{ height: '100vh' }} >
                <animated.div className="w-full rays fixed overflow-hidden"
                    style={{
                        height: '100vh',

                    }}>
                    <animated.img
                        className="w-full fixed top-0"
                        style={{ transform: mainBgAnim.transform, opacity: mainBgAnim.opacity }} src={mainBg} alt="" />
                    <div className="container fixed px-12 top-0 bottom-0 my-auto h-fit">
                        <div className="pb-8 pt-16 w-7/12 mx-auto">
                            <animated.h1
                                style={{ opacity: mainBgAnim.opacity }}
                                className="title quote min-[1050px]:text-6xl text-5xl text-white text-center min-[1600px]:text-8xl">
                                <span>
                                    <animated.span style={{ transform: scrollYProgress.to(s => (`translateY(${s * 200}%)`)) }}>
                                        Весь спектр защиты
                                    </animated.span>
                                </span>
                                <span>
                                    <animated.span style={{ transform: scrollYProgress.to(s => (`translateY(${s * 200}%)`)) }}>
                                        от Covid-19
                                    </animated.span>
                                </span>
                            </animated.h1 >
                            <animated.div
                                style={{ opacity: mainBgAnim.opacity }}
                                className={`mt-6 mx-auto w-fit text-white text-center min-[1600px]:text-2xl`}>
                                <p className="font-bold">Люди с ослабленным иммунитетом могут нуждаться<br /> в дополнительной защите от коронавирусной инфекции.<sup>1</sup></p>
                                <p className="font-normal mt-2">Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска </p>
                                <button className="btn mx-auto block mt-6 min-[1600px]:text-2xl">Пройти опрос**</button>
                            </animated.div>
                        </div>
                    </div>
                </animated.div>

            </section>
            <section className="w-full" style={{ height: '200vh' }}>
                <animated.div className="fixed top-0 w-full"
                    style={{
                        opacity: opacity.opacity,
                        height: '100vh',
                        transform: block.transform
                    }}
                >
                    <Block2 scrollYProgress={scrollYProgress} block={block} />
                </animated.div>
                <animated.div className="fixed top-0 w-full h-full" style={translateImg}>
                    <animated.div className="overflow-hidden fixed top-0 bg-neonBlue w-full"
                        style={{
                            opacity: opacity.opacity,
                            clipPath: opacity.clipPath,
                            transform: opacity.transform
                        }}>
                        <animated.img className="w-full z-20 object-cover" style={{ height: '100vh' }} src={SecBg} alt="" />
                    </animated.div>

                </animated.div>
            </section>
        </>

    )
}

export default Main;