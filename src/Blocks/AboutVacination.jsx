import React from "react";
import { animated } from '@react-spring/web'
import SecBg from '../assets/images/secBG.jpeg'
import Block2 from "./Block2";
import { coordinates } from "../assets/constants/coordinates";


const AboutVacination = ({ blue_bg_block, blue_bg_block_image, scrollYProgress, main_photo_to_right }) => {
    return (
        <animated.section className="w-full fixed top-0 select-none"
            style={{
                zIndex: scrollYProgress.to(s => (s > coordinates.block2.coordinates[1] && s < coordinates.block3.coordinates[0] ? '200' : '1')),
                height: '200vh'
            }}>
            <animated.div className="absolute top-0 w-full"
                style={{
                    opacity: scrollYProgress.to(s => (s > coordinates.block2.coordinates[0] + .01 && s < coordinates.block5.coordinates[0] ? '1' : '0')),
                    height: '100vh',
                    transform: blue_bg_block.transform,
                }}
            >
                <Block2
                    scrollYProgress={scrollYProgress}
                    blue_bg_block={blue_bg_block}
                />
            </animated.div>
            <animated.div className="absolute top-0 w-full h-full " style={{ transform: main_photo_to_right.transform }}>
                <animated.div className="overflow-hidden fixed top-0 bg-neonBlue w-full"
                    style={{
                        clipPath: blue_bg_block_image.clipPath,
                        transform: scrollYProgress.to(s => (850 * s - 21 > 0 ? `translateX(${850 * s - 21}%)` : `translateX(0)`)),
                    }}>
                    <animated.img
                        className="select-none w-full object-cover"
                        style={{ height: '100vh' }} src={SecBg} alt="" />
                </animated.div>
            </animated.div>
        </animated.section>
    )
}


export default AboutVacination