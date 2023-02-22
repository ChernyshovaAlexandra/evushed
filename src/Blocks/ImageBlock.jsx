import React, { useRef } from "react";
import Block4 from "./Block4";




const ImageBlock = ({ close, raysBlock, raysSt2, scrollYProgress, raysSt, raysStL }) => {
    const containerRef = useRef(null);
    return (
        <div className="w-full h-full" ref={containerRef}>
            <Block4 close={close} raysBlock={raysBlock} raysSt={raysSt} raysSt2={raysSt2} raysStL={raysStL} scrollYProgress={scrollYProgress} />
        </div >
    )
}

export default ImageBlock