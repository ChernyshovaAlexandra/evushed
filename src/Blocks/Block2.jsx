import React, { useState } from "react";
import BgWithPolygon from "../components/BgWithPolygon";
import Icon from "../components/Icon";
import { TypeAnimation } from 'react-type-animation';


const Block2 = ({ start }) => {
    const [typingStatus, setTypingStatus] = useState(false);

    return (
        <section className="bg-lavender grid items-center relative polygon">
            <div className="w-full h-full">
                <BgWithPolygon />
            </div>
            <div className="container absolute z-10 text-2xl left-12 top-0 bottom-0 my-auto h-fit w-42p text-white h2">
                {start ?
                    <><TypeAnimation
                        className=" "
                        sequence={[
                            "Вакцинация является важной опцией профилактики коронавирусной инфекции, однако не всегда она обеспечивает необходимую защиту.",
                            2000,
                            () => {
                                setTypingStatus(true);
                            },
                        ]
                        }
                        speed={80}
                        wrapper="h2"
                    ></TypeAnimation>
                        <sup>2</sup>
                        <span className={`text-blue ${typingStatus ? 'opacity-100' : 'opacity-0'}`}> Люди со сниженным иммунитетом могут нуждаться в дополнительной защите от COVID - 19<sup>3-5</sup></span>
                    </>
                    : null}
            </div>
            <div className="absolute container bottom-12 left-12">
                <div className="flex gap-4 items-center">
                    <Icon id={0} img={`<svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.81127 11.5946L15.9464 29L31.0815 11.5946" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 15L15.0583 26.3631C15.3743 27.248 16.6257 27.248 16.9417 26.3631L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15.9463 29L15.9463 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                    <p className="text-white font-bold text-lg">Смотри спектр защиты от COVID-19</p>
                </div>
            </div>
        </section>
    )
}

export default Block2;