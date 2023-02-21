import React from "react";
import Block8 from './Block8'
import Block9 from './Block9'
import Block11 from './Block11'
import Block12 from './Block12'
import Block13 from './Block13'
import QA from "./QA";

const Block7 = () => {
    return (
        <div>
            <section className="py-16 bg-lavender">
                <div className="container mx-auto">
                    <h2 className="font-normal text-4xl">Чем моноклональные антитела<br /> отличаются от вакцины?</h2>
                    <video className="w-full h-full rounded-xl mt-8 mx-auto video" src=""></video>
                </div>
            </section>
            <Block8 />
            <Block9 />
            <QA />
            <Block11 />
            <Block12 />
            <Block13 />
        </div>
    )
}

export default Block7;