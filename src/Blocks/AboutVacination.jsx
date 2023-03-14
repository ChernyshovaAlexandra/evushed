import React from "react";
import { animated } from '@react-spring/web'
import SecBg from '../assets/images/secBG.jpeg'
import Block2 from "./Block2";
import { coordinates } from "../assets/constants/coordinates";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import vac from '../assets/images/vacine.png';
import Icon from "../components/Icon";

const AboutVacination = ({ blue_bg_block, blue_bg_block_image, scrollYProgress, main_photo_to_right }) => {
    return (
        <animated.section className="w-full fixed top-0 select-none"
            style={{
                zIndex: scrollYProgress.to(s => (s > coordinates.block2.coordinates[0] && s < coordinates.block3.coordinates[1] ? '200' : '1')),
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

            <animated.div className="absolute right-4"
                style={{
                    top: '100vh',
                    transform: scrollYProgress.to(s => (`translateY(-${s * 5700}px)`)),
                    opacity: blue_bg_block.opacity,
                    transition: 'all .2s ease-out'
                }}>
                <img className="w-80" src={vac} alt="" />
            </animated.div>
            <animated.div className="absolute right-12"
                style={{ top: '110vh', transition: 'all .13s ease-out', transform: scrollYProgress.to(s => (`translateY(-${s * 5000}px)`)), opacity: blue_bg_block.opacity }}>
                <img className="w-80 rotate-45 right-32 relative" src={vac} alt="" />
            </animated.div>
            <animated.div className="absolute top-0 w-full h-full"
             style={{  transform: scrollYProgress.to(s => (850 * s - 21 > 0 ? `translateX(${850 * s - 21}%)` : `translateX(0)`)),}}>
                <animated.div className="overflow-hidden fixed top-0 bg-neonBlue w-full"
                    style={{
                        clipPath: blue_bg_block_image.clipPath,
                       
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