import React, { useEffect, useRef, useState } from "react";
import mainBg from '../assets/images/mainbg.jpeg'
import { animated, useSpring } from '@react-spring/web'


const Main = ({ scrollYProgress }) => {
    const [props, api] = useSpring(
        () => ({
            from: { transform: `scale(3)` },
            to: { transform: `scale(1)` }
        }),
        []
    )

    return (
        <section className="main bg-lavender" style={{ height: '100vh' }} >
            <animated.div className="w-full rays fixed overflow-hidden"
                style={{
                    height: '100vh',
                    transform: scrollYProgress.to(s => (`scale(${((s) * 3) + 1})`)),
                    // opacity: scrollYProgress.to(s => (1 - s))
                }}>
                <animated.img
                    className="w-full fixed top-0"
                    style={props} src={mainBg} alt="" />
            </animated.div>
            <div className="container fixed px-12 top-0 bottom-0 my-auto h-fit">
                <div className="pb-8 pt-16 w-7/12 mx-auto">
                    <h1 className="title quote min-[1050px]:text-6xl text-5xl text-white text-center min-[1600px]:text-8xl">
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
                    </h1 >
                    <animated.div
                        style={{ opacity: scrollYProgress.to(s => (1 - s)) }}
                        className={`mt-6 mx-auto w-fit text-white text-center min-[1600px]:text-2xl`}>
                        <p className="font-bold">Люди с ослабленным иммунитетом могут нуждаться<br /> в дополнительной защите от коронавирусной инфекции.<sup>1</sup></p>
                        <p className="font-normal mt-2">Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска </p>
                        <button className="btn mx-auto block mt-6 min-[1600px]:text-2xl">Пройти опрос**</button>
                    </animated.div>
                </div>
            </div>
        </section>

    )
}

export default Main;