import React from "react";
import Rays from "../components/Rays";


const Main = () => {
    return (
        <section className=" bg-lavender grid place-items-center">
            <div className="w-full h-full">
                <Rays />
            </div>
            <div className="container px-12 absolute z-10 ">
                <div className="pb-8 pt-16 w-7/12 mx-auto ">
                    <h1 className="min-[1050px]:text-6xl text-5xl text-white text-center min-[1600px]:text-8xl">Весь спектр защиты<br />от Covid-19</h1>
                    <div className="mt-6 mx-auto w-fit text-white text-center min-[1600px]:text-2xl">
                        <p className="font-bold">Люди с ослабленным иммунитетом могут нуждаться<br /> в дополнительной защите от коронавирусной инфекции.<sup>1</sup></p>
                        <p className="font-normal mt-2">Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска </p>
                    </div>
                    <button className="btn mx-auto block mt-6 min-[1600px]:text-2xl">Пройти опрос**</button>
                </div>
            </div>
        </section>
    )
}

export default Main;