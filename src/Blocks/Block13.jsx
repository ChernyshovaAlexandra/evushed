import React from "react";
import img1 from '../assets/images/1.jpeg'
import img2 from '../assets/images/2.jpeg'
import img3 from '../assets/images/3.jpeg'
import img4 from '../assets/images/4.jpeg'
import img11 from '../assets/images/11.jpg'
import img21 from '../assets/images/21.jpg'
import img31 from '../assets/images/31.jpg'
import img41 from '../assets/images/41.jpg'
import { modals } from "../assets/constants/modals";

const Block13 = ({ showModal }) => {
    return (
        <section className="min-[1000px]:px-20 px-5 py-16 bg-darkBlue text-white relative z-40">
            <div className="content mx-auto">
                <p className="text-sm mt-2 txt-footer">Здесь вам могут помочь с информацией относительно вашего заболевания: </p>
                <div className="mt-8 grid min-[1100px]:grid-cols-4 min-[600px]:grid-cols-2 gap-8">
                    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
                        <img className="w-full h-full object-cover -my-1 object-center max-[1000px]:hidden" src={img1} />
                        <img className="w-full h-full object-cover -my-1 object-center hidden max-[1000px]:block" src={img11} />
                    </div>
                    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
                        <img className="w-full h-full object-cover -my-1 object-center max-[1000px]:hidden" src={img2} />
                        <img className="w-full h-full object-cover -my-1 object-center hidden max-[1000px]:block" src={img21} />

                    </div>
                    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
                        <img className="w-full h-full object-cover -my-1 object-center max-[1000px]:hidden" src={img3} />
                        <img className="w-full h-full object-cover -my-1 object-center hidden max-[1000px]:block" src={img31} />
                    </div>
                    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
                        <img className="w-full h-full object-cover -my-1 object-center max-[1000px]:hidden" src={img4} />
                        <img className="w-full h-full object-cover -my-1 object-center hidden max-[1000px]:block" src={img41} />
                    </div>
                </div>
                <hr className="my-12 bg-blue" />
                <div>
                    <div className="grid gap-12 footer-grid">
                        <div className="col">
                            <i className="text-lg mb-4 block txt-astra"> © 2022 «AstraZeneсa». Все права защищены</i>
                            <p className="mt-2 txt-base">  Номер одобрения: {modals.number_odobr}</p>
                            <p className="mt-2 txt-base">  Дата одобрения: {modals.date_odobr}</p>
                            <p className="mt-2 txt-base">  Дата истечения: {modals.date_finish}</p>
                        </div>
                        <div className="col">
                            <p className="txt-footer">Контакты</p>
                            <p className="txt-base mt-2"> ООО «АстраЗенека Фармасьютикалз».</p>
                            <p className="txt-base mt-2"> 123112, г. Москва, 1-й Красногвардейский<br />проезд, д.21, стр.1.</p>
                            <p className="txt-base mt-2"> Тел.: +7 (495) 799-56-99, <br />факс: +7 (495) 799-56-98</p>
                            <p className="txt-base mt-2">
                                <a href="www.astrazeneca.ru" className="cursor-pointer hover:underline">
                                    www.astrazeneca.ru</a></p>
                        </div>
                        <div className="col">
                            <p className="txt-footer">Информация</p>
                            <p className="txt-base mt-2 cursor-pointer hover:underline" onClick={() => showModal(['politika', modals.politika])}> Политика конфиденциальности</p>
                            <p className="txt-base mt-2 cursor-pointer hover:underline" onClick={() => showModal(['ogranighenie_otvetstvennosty', modals.ogranighenie_otvetstvennosty])}> Правовая информация</p>
                            <p className="txt-base mt-2 cursor-pointer hover:underline" onClick={() => showModal(['contacts', modals.contacts])}> Контактная информация</p>
                            <p className="txt-base mt-2 cursor-pointer hover:underline" onClick={() => showModal(['reclamacia', modals.reclamacia])}> Сообщить о рекламации на лекарственный<br />препарат</p>
                            <p className="txt-base mt-2 cursor-pointer hover:underline" onClick={() => showModal(['nezhelat', modals.nezhelat])}> Сообщить о нежелательном явлении</p>
                            <p className="txt-base mt-2 cursor-pointer hover:underline" onClick={() => showModal(['sluzhba', modals.sluzhba])}> Служба Медицинской Информации</p >
                        </div >

                    </div >
                    <div className="w-full mt-8">
                        <p className="txt-footer-big mt-2">Материал предназначен для широкой аудитории. Информация, представленная в данном разделе, не представляет собой и не заменяет консультацию врача. Необходимо получить консультацию врача.</p>
                        <p className="txt-footer-big mt-2">Изображения задействованных моделей используются исключительно с целью иллюстрации и не свидетельствуют об одобрении ими деятельности или использовании ими продукции/услуги/торговой марки.</p>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default Block13;