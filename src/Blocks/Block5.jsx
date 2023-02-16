import React from "react";
import Icon from "../components/Icon";
import RaysSecond from "../components/RaysSecond";
import RaysThird from "../components/RaysThird";


const Block5 = () => {
    return (
        <section className="bg-lavender grid items-center relative ">
            <div className="w-full h-full">
                <RaysThird />
            </div>
            <div className="container absolute z-10 w-5/12 text-2xl left-12 top-8 bottom-0 my-auto h-fit top-32">
                <h2 className="text-blue header text-5xl">спектр защиты<br />от Covid-19 </h2>
                <div className="mt-16">
                    <div className="flex gap-3 items-center">
                        <Icon img={`<svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="10" width="17" height="29" rx="2" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"/><path d="M12 38L27 11" stroke="currentColor" strokeWidth="1.5" stroke-linecap="square"/><path d="M20 24.5L27.3253 37.84L27 38.5L11.5 38.5L20 24.5Z" fill="currentColor"/><path d="M13 9C13 7.89543 13.8954 7 15 7H24C25.1046 7 26 7.89543 26 9V10H13V9Z" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"/><path d="M12 3C12 1.89543 12.8954 1 14 1H25C26.1046 1 27 1.89543 27 3V5C27 6.10457 26.1046 7 25 7H14C12.8954 7 12 6.10457 12 5V3Z" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"/></svg>`} />

                    </div>
                    <div className="mt-6">
                        <h2 className="text-blue font-normal">Вакцинация</h2>
                        <p className="text-blue text-lg mt-2 font-normal">Вакцинация является важной опцией профилактики коронавирусной инфекции<sup>3</sup></p>
                    </div>
                </div>
                <div className="mt-12">
                    <a href="" className="btn text-lg">Узнать больше</a>
                </div>

            </div>

        </section>
    )
}

export default Block5;