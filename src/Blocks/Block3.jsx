import React, { useRef } from "react";
import BgWithPolygon from "../components/BgWithPolygon";
import Icon from "../components/Icon";
import vac from '../assets/images/vacine.png'
import { useScroll } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";

const Block3 = () => {
    const { scrollYProgress } = useScroll();
    const ref = useRef()

    return (
        <div className="bg-gray-200 grid items-center relative ">
            <div className="w-full h-full">
                <BgWithPolygon />
            </div>
            <div className="container absolute z-10 flex  text-2xl left-12 top-0 bottom-0 my-auto h-fit">
                <div className=" w-7/12">
                    <h2 className="text-white">Вакцинация является важной опцией<br /> профилактики коронавирусной инфекции,<br /> однако не всегда она обеспечивает<br /> необходимую защиту.<sup>2</sup>
                        <span> Люди со сниженным<br /> иммунитетом <span className="text-pink">могут нуждаться<br /> в дополнительной защите </span>от COVID-19<sup className="text-pink-l">3-5</sup></span></h2>
                </div>
                <div className="w-5/12 relative" ref={ref}>
                    <ParallaxLayer offset={-.6} speed={-.2} factor={.4}>
                        <img className="w-80 absolute right-4 -top-48" src={vac} alt="" />
                    </ParallaxLayer>
                    <ParallaxLayer offset={-.55} speed={-.21} factor={.42}>
                        <img className="w-80 absolute rotate-45	-top-8 left-8" src={vac} alt="" />
                    </ParallaxLayer>
                </div>
            </div>
            <div className="absolute container bottom-12 left-12">
                <div className="flex gap-4 items-center">
                    <Icon id={0} img={`<svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.81127 11.5946L15.9464 29L31.0815 11.5946" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 15L15.0583 26.3631C15.3743 27.248 16.6257 27.248 16.9417 26.3631L21 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M15.9463 29L15.9463 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`} />
                    <p className="text-white font-bold text-lg">Смотри спектр защиты от COVID-19</p>
                </div>
            </div>
        </div>
    )
}

export default Block3;