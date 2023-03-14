import React, { useRef } from "react";
import Block4 from "./Block4";




const ImageBlock = ({ showPopup, spectrZashityAll, raysSpectrTwoBlue, scrollYProgress, raysSpectrOneBlue, raysSpectrTwoWhite }) => {
    const containerRef = useRef(null);
    return (
        <div className="w-full h-full" ref={containerRef} id="spectrum_of_protection">
            <Block4 showPopup={showPopup} spectrZashityAll={spectrZashityAll} raysSpectrOneBlue={raysSpectrOneBlue} raysSpectrTwoBlue={raysSpectrTwoBlue} raysSpectrTwoWhite={raysSpectrTwoWhite} scrollYProgress={scrollYProgress} />
        </div >
    )
}

export default ImageBlock