import React from "react";
import { qa } from "../assets/constants/q-a";
import Accordeon from "../components/Accordeon";


const QA = () => {
    return (
        <section className="bg-lavender p-12">
            <div className="container mx-auto">
                <div className="flex gap-4 justify-between">
                    <div>
                        <h2 className="text-3xl text-black font-bold header-sec">Частые<br /> вопросы</h2>
                    </div>
                    <div className="w-9/12">
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