import React from "react";
import mainBg from '../assets/images/mainbg.jpeg'
import { animated } from '@react-spring/web'

import ImageBlock from "./ImageBlock";
import { ParallaxProvider } from "react-scroll-parallax";
import Heading from "./Heading";
import AboutVacination from "./AboutVacination";
import { coordinates } from "../assets/constants/coordinates";



const Main = ({ close,
    secBlockAnim,
    spectrZashityAll,
    raysSpectrTwoBlue,
    scrollYProgress,
    main_photo_to_right,
    mainBgRaysAnim,
    blue_bg_block_image,
    blue_bg_block,
    main_bg_gradient,
    raysSpectrOneBlue,
    raysSpectrTwoWhite }) => {

    return (
        <>

            <ParallaxProvider>
                <AboutVacination
                    blue_bg_block={blue_bg_block}
                    blue_bg_block_image={blue_bg_block_image}
                    scrollYProgress={scrollYProgress}
                    main_photo_to_right={main_photo_to_right}
                />
                <Heading
                    main_bg_gradient={main_bg_gradient}
                    blue_bg_block_image={blue_bg_block_image}
                    scrollYProgress={scrollYProgress}
                    close={close}
                    mainBgRaysAnim={mainBgRaysAnim}
                />
                <animated.section className="w-full fixed top-0" id='spectr'
                    style={{
                        zIndex: scrollYProgress.to(s => s >= coordinates.block4.coordinates[0] && s <= coordinates.block6.coordinates[1] ? '40' : '0')
                    }}
                >
                    <ImageBlock close={close}
                        spectrZashityAll={spectrZashityAll}
                        raysSpectrTwoBlue={raysSpectrTwoBlue}
                        raysSpectrOneBlue={raysSpectrOneBlue}
                        raysSpectrTwoWhite={raysSpectrTwoWhite}
                        scrollYProgress={scrollYProgress}
                    />
                </animated.section>
            </ParallaxProvider >

        </>

    )
}

export default Main;