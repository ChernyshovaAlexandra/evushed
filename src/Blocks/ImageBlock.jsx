import React, { useEffect, useRef, useState } from "react";
import SecBg from '../assets/images/secBG.jpeg'
import { motion } from 'framer-motion';
import Block2 from "./Block2";




const ImageBlock = ({ y }) => {
    const ref = useRef(null);
    const [blockTop, setBlockTop] = useState()
    useEffect(() => {
        const top = document.querySelector('#imageBlock').offsetTop
        setBlockTop(top)
    }, [])
    console.log(y <= (blockTop * 1.7), y >= (blockTop - 100))
    const containerAnimations = {
        hidden: y => ({
            position: y >= (blockTop - 100) ? 'fixed' : 'realtive'
        }),
        visible: y => ({
            position: y >= (blockTop - 100) ? 'fixed' : 'realtive'
        })
    }


    const imageAnimation = {
        hidden: y => ({
            transform: y >= (blockTop * 1.25) ? 'translateX(100%)' : y >= (blockTop * 1.15) ? 'translateX(35%)' : 'translateX(0)',
            clipPath: y >= (blockTop * 1.05) ? 'polygon(37% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 15% 50%)' :
                y >= (blockTop + 220) ? 'polygon(37% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 37% 100%)' : '',
            transition: {
                transform: {
                    duration: .8,
                    delay: .2
                },
                opacity: {
                    duration: .5,
                }
            }
        }),
        visible: y => ({
            transformOrigin: 'center',
            transform: y >= (blockTop * 1.25) ? 'translateX(100%)' : y >= (blockTop * 1.15) ? 'translateX(35%)' : 'translateX(0)',
            clipPath: y >= (blockTop * 1.05) ? 'polygon(37% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 15% 50%)' :
                y >= (blockTop * 1.4) ? 'polygon(37% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 37% 100%)' : '',
            transition: {
                transform: {
                    duration: .8,
                    delay: .2
                },
                opacity: {
                    duration: .5,
                }
            }
        })
    }
    const imageInnerAnimation = {
        hidden: y => ({
            opacity: y >= (blockTop * 1.05) ? 0.5 : 1
        }),
        visible: y => ({
            opacity: y >= (blockTop * 1.05) ? 0.5 : 1
        })
    }

    const blueBlockAnimation = {
        hidden: y => ({
            transform: y <= (blockTop * 1.05) ? 'translateX(-100%)' : 'translateX(0%)',
            transition: {
                transform: {
                    duration: .25
                },
                clipPath: {
                    duration: .2
                }
            },
        }),
        visible: y => ({
            transform: y <= (blockTop * 1.05) ? 'translateX(-100%)' : 'translateX(0%)',
            transition: {
                transform: {
                    duration: .15
                },
                clipPath: {
                    duration: .2
                }
            },
        }),
    }

    return (

        <motion.div
            initial='hidden'
            animate="visible"
            className={`top-0 ${y <= (blockTop * 4) && y >= (blockTop - 100) ? 'sticky' : 'relative'} z-30`}
            id="imageBlock"
            // whileInView='visible'
            // variants={containerAnimations}
            // custom={y}
            style={{ height: '100vh' }}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={blueBlockAnimation}
                custom={y}
                className='w-full absolute top-0 h-full'>
                <Block2 blockTop={blockTop} y={y} />
            </motion.div>
            <motion.div
                initial='hidden'
                animate="visible"
                variants={imageAnimation}
                custom={y}
                className="overflow-hidden bg-neonBlue w-full absolute top-0"
            >
                <motion.img
                    variants={imageInnerAnimation}
                    initial='hidden'
                    animate="visible"
                    custom={y}
                    className="w-full z-20 object-cover" style={{ height: '100vh' }} src={SecBg} alt="" />

            </motion.div>
        </motion.div>
    )
}

export default ImageBlock