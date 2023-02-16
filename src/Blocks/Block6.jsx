import React from "react";
import Icon from "../components/Icon";
import RaysSecond from "../components/RaysSecond";


const Block6 = () => {
    return (
        <section className="bg-lavender grid items-center relative ">
            <div className="w-full h-full">
                <RaysSecond />
            </div>
            <div className="container absolute z-10 w-5/12 text-2xl left-12 top-8 bottom-0 my-auto h-fit top-32">
                <h2 className="text-white header text-5xl">спектр защиты<br />от Covid-19 </h2>
                <div className="mt-16">
                    <div className="flex gap-3 items-center">
                        <Icon img={`<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.80957 5L17.4921 14.2424C17.8875 14.6198 18.1112 15.1426 18.1112 15.6891V34.5" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"/><path d="M5 7.34131L14.3651 16.2381" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"/><path d="M32.1587 5L22.4762 14.2424C22.0808 14.6198 21.8571 15.1426 21.8571 15.6891V34.5" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"/><path d="M34.9683 7.34131L25.6032 16.2381" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"/></svg>`} />
                    </div>
                    <div className="mt-6">
                        <h2 className="text-white font-normal">Пассивная иммунизация</h2>
                        <p className="text-white text-lg mt-2 ">Пассивная иммунизация является дополнительной мерой защиты для пациентов со сниженным иммунным статусом или противопоказаниями к вакцинации</p>
                        <span className="text-white text-lg mt-2 font-normal"> Спросите у вашего лечащего врача о дополнительной защите от COVID-19<sup>3</sup></span>
                    </div>
                </div>
                <div className="mt-12">
                    <a href="" className="btn text-lg">Узнать больше</a>
                </div>

            </div>

        </section>
    )
}

export default Block6;