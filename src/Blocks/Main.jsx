import React from "react";
import mainBg from '../assets/images/mainbg.jpeg'
import { animated } from '@react-spring/web'
import SecBg from '../assets/images/secBG.jpeg'
import Block2 from "./Block2";
import ImageBlock from "./ImageBlock";
import { ParallaxProvider } from "react-scroll-parallax";
const Main = ({ close, raysBlock, raysSt2, scrollYProgress, translateImg, mainBgAnim, opacity, block, pink, raysSt, raysStL }) => {
    console.log(raysBlock.opacity)
    return (
        <>

            <ParallaxProvider>
                <animated.section className="w-full fixed top-0 select-none" >
                    <animated.div className="absolute top-0 w-full"
                        style={{
                            opacity: opacity.opacity,
                            height: '100vh',
                            transform: block.transform,

                        }}
                    >
                        <Block2 scrollYProgress={scrollYProgress} block={block} pink={pink} />
                    </animated.div>
                    <animated.div className="absolute top-0 w-full h-full " style={{ transform: translateImg.transform, }}>
                        <animated.div className="overflow-hidden fixed top-0 bg-neonBlue w-full"
                            style={{
                                clipPath: opacity.clipPath,
                                transform: opacity.transform
                            }}>
                            <animated.img
                                className="select-none w-fullobject-cover"
                                style={{ height: '100vh', opacity: translateImg.opacity }} src={SecBg} alt="" />
                        </animated.div>
                    </animated.div>
                </animated.section>
                <animated.section className="main fixed top-0 w-full z-30"
                    style={{ touchAction: 'none', height: '100vh', zIndex: scrollYProgress.to(s => (s > .1 ? '10' : '100')) }} >
                    <animated.div className="w-full rays overflow-hidden"
                        style={{
                            height: '100vh',
                            opacity: mainBgAnim.opacity
                        }}>
                        <animated.img
                            className="w-full top-0 h-full"
                            style={{ transform: mainBgAnim.transform }} src={mainBg} alt="" />
                        <div className="container px-12 top-0 bottom-0 left-0 right-0 my-auto h-fit absolute mx-auto w-full">
                            <ParallaxProvider>
                                <div className="pb-8 pt-16 w-7/12 mx-auto">
                                    <animated.h1
                                        style={{ opacity: mainBgAnim.opacity }}
                                        className="title quote min-[1050px]:text-6xl text-5xl text-white text-center min-[1600px]:text-8xl">
                                        <span>
                                            <animated.span style={{ transform: scrollYProgress.to(s => (`translateY(${s * 2500}%)`)) }}>
                                                Весь спектр защиты
                                            </animated.span>
                                        </span>
                                        <span>
                                            <animated.span style={{ transform: scrollYProgress.to(s => (`translateY(${s * 2500}%)`)) }}>
                                                от Covid-19
                                            </animated.span>
                                        </span>
                                    </animated.h1 >
                                    <animated.div
                                        style={{ opacity: scrollYProgress.to(s => (1 - (s * 7))) }}
                                        className={`mt-6 mx-auto w-fit text-white text-center min-[1600px]:text-2xl`}>
                                        <p className="font-bold">Люди с ослабленным иммунитетом могут нуждаться<br /> в дополнительной защите от коронавирусной инфекции.<sup>1</sup></p>
                                        <p className="font-normal mt-2">Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска </p>
                                        <button className="btn mx-auto block mt-6 min-[1600px]:text-2xl" onClick={() => close(true)}>Пройти опрос**</button>
                                    </animated.div>
                                </div>
                            </ParallaxProvider>
                        </div>
                    </animated.div>
                </animated.section>

                <animated.section className="w-full fixed top-0 z-40">
                    <ImageBlock close={close} raysBlock={raysBlock} raysSt2={raysSt2} raysSt={raysSt} raysStL={raysStL} scrollYProgress={scrollYProgress} />
                </animated.section>
            </ParallaxProvider >

        </>

    )
}

export default Main;