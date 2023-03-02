import React, { useRef } from "react";
import Block4 from "./Block4";




const ImageBlock = ({ close, spectrZashityAll, raysSpectrTwoBlue, scrollYProgress, raysSpectrOneBlue, raysSpectrTwoWhite }) => {
    const containerRef = useRef(null);
    return (
        <div className="w-full h-full" ref={containerRef}>
            <Block4 close={close} spectrZashityAll={spectrZashityAll} raysSpectrOneBlue={raysSpectrOneBlue} raysSpectrTwoBlue={raysSpectrTwoBlue} raysSpectrTwoWhite={raysSpectrTwoWhite} scrollYProgress={scrollYProgress} />
        </div >
    )
}

export default ImageBlock