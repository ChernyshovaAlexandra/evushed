import React, { useEffect, useRef, useState } from "react";
import SecBg from '../assets/images/secBG.jpeg'
import Block2 from "./Block2";
import { useScroll, animated } from '@react-spring/web'




const ImageBlock = ({ scrollYProgress }) => {
    const containerRef = useRef(null);
    return (
        <div className="w-full h-full " style={{ height: '100vh' }} ref={containerRef}>
            <animated.div className="overflow-hidden bg-neonBlue w-full"
                style={{
                    transform: scrollYProgress.to(scrollP =>
                        (`translateY(${scrollP * 100 < 50 ? scrollP * 100 : 50}%)`)
                    )
                }}
            >
                <animated.img className="w-full z-20 object-cover"
                    style={{
                        height: '100vh',
                        transform: scrollYProgress.to(scrollP =>
                            (`translateX(${(scrollP * 15)}%)`)
                        ),
                        clipPath: scrollYProgress.to(scrollP => (
                            `polygon(${scrollP * 70 > 37 ? 37 : scrollP * 70}% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, ${scrollP * 35 > 15 ? scrollP * 25 : 15}% ${scrollP * 80 > 50 ? 50 : scrollP * 80}%)`
                        ))
                    }} src={SecBg} alt="" />
                {/* clipPath: 'polygon(37% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 15% 50%)', */}
                {/* clipPath: 'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)', */}

            </animated.div>
        </div >
    )
}

export default ImageBlock