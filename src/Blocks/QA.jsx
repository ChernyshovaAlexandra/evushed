import React from "react";
import { qa } from "../assets/constants/q-a";
import Accordeon from "../components/Accordeon";


const QA = () => {
    return (
        <section className="bg-lavender min-[1000px]:p-12 px-6 py-12">
            <div className="container mx-auto">
                <div className="min-[1000px]:flex gap-4 justify-between">
                    <div>
                        <h2 className="text-blue min-[1000px]:text-black font-bold header-sec">Частые<br className="min-[1000px]:block hidden" /> вопросы</h2>
                    </div>
                    <div className="w-full min-[1000px]:w-9/12 max-[600px]:-mt-4">
                        {qa.map((q, id) => (
                            <Accordeon key={id} data={q} id={id} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}


export default QA;