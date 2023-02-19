import React, { useEffect, useRef, useState } from "react";
import SecBg from '../assets/images/secBG.jpeg'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import mainBg from '../assets/images/mainbg.jpeg'
import Block2 from "./Block2";




const ImageBlock = () => {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setComplete(true)
        }, 2500)
    }, [])
    const imageAnimation = {
        hidden: {
            opacity: 0.5,
            transform: 'translateX(0)',
            transformOrigin: 'center',
            transition: {
                transform: {
                    duration: 1
                },
                opacity: {
                    duration: .2,
                }
            }
        },
        vissible: {
            transformOrigin: 'center',
            opacity: .7,
            transform: 'translateX(35%)',
            clipPath: 'polygon(37% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 15% 50%)',
            transition: {
                // delay: '.5',
                clipPath: {
                    // delay: '.9',
                    duration: .5
                },
                transform: {
                    // delay: '.9',
                    duration: 1.1
                },
                opacity: {
                    duration: .6,

                }
            }
        }
    }
    const raysAnimation = {
        hidden: {
            transform: 'scale(3)',
            transformOrigin: '100% 50%',
            opacity: 0.7,
            transition: {
                duration: '.3',
            }
        },
        vissible: {
            transform: 'scale(1)',
            transformOrigin: '100% 50%',
            opacity: 1,
            transition: {
                duration: '.3'
            }
        }
    }

    const blueBlockAnimation = {
        hidden: {
            transformOrigin: 'center',
            transform: 'translateX(-100%)',
            transition: { duration: .8 }
        },
        visible: {
            transformOrigin: 'center',
            transform: 'translateX(0%)',
            transition: {
                delay: .15,
                duration: .75
            }
        }
    }

    return (
        <div className="w-full relative overflow-hidden">
            <motion.img
                variants={raysAnimation}
                initial='vissible'
                whileInView="hidden"
                className="w-full h-full absolute top-0 left-0" src={mainBg} alt="" />
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={blueBlockAnimation}
                className='w-full absolute top-0 left-0'>
                <Block2 start={complete} />
            </motion.div>
            <motion.img
                initial='hidden'
                whileInView="vissible"
                variants={imageAnimation}
                className="w-full h-full relative z-20" src={SecBg} alt="" />
        </div>
    )
}

export default ImageBlock