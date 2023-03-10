import React from "react";
import banner from '../assets/images/banner.png'

const Block11 = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto relative ">
                <div className="w-full h-full rounded-xl mt-8 mx-auto bg-blue-grad overflow-hidden" src="">
                    <img className="w-full h-full m-0" src={banner} alt="" />
                </div>
                <div className="absolute left-12 text-white w-6/12 bottom-0 top-0 my-auto h-fit">
                    <h2 className="text-2xl">Консультация специалиста</h2>
                    <p className="mt-4">Вы можете получить консультацию у специалистов в медицинских организациях вашего города</p>
                    <div className="rounded-lg lavender-grad p-4 mt-8">
                        <div className="flex gap-4 items-center">
                            <svg className="w-16 h-16 shrink-0" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.0991 5.77061L14.2082 10.6273C11.2374 11.7381 8.80908 15.2514 8.80908 18.4031V37.5973C8.80908 40.6456 10.8241 44.6498 13.2782 46.4839L24.3866 54.7764C28.0291 57.5148 34.0224 57.5148 37.6649 54.7764L48.7732 46.4839C51.2274 44.6498 53.2424 40.6456 53.2424 37.5973V18.4031C53.2424 15.2256 50.8141 11.7123 47.8432 10.6014L34.9524 5.77061C32.7566 4.96977 29.2432 4.96977 27.0991 5.77061Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.3794 30.6739L27.5386 34.8331L38.6469 23.7248" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <div className="">
                                <p>Лучше всего о дополнительной защите от коронавируса и её необходимости может рассказать ваш лечащий врач.</p>
                                <p className="mt-2">Рекомендуем в первую очередь получить консультацию у него</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Block11;