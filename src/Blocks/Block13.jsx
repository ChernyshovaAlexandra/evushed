import React from "react";
import img1 from '../assets/images/1.jpeg'
import img2 from '../assets/images/2.jpeg'
import img3 from '../assets/images/3.jpeg'
import img4 from '../assets/images/4.jpeg'

const Block13 = () => {
    return (
        <section className="px-20 py-16 bg-darkBlue text-white relative z-40">
            <div className="container mx-auto">
                <p className="text-sm mt-2 txt-footer">Здесь вам могут помочь с информацией относительно вашего заболевания: </p>
                <div className="mt-8 grid grid-cols-4 gap-8">
                    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
                        <img className="w-full h-full object-cover -my-1 object-center" src={img1} />
                    </div>
                    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
                        <img className="w-full h-full object-cover -my-1 object-center" src={img2} />

                    </div>
                    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
                        <img className="w-full h-full object-cover -my-1 object-center" src={img3} />
                    </div>
                    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
                        <img className="w-full h-full object-cover -my-1 object-center" src={img4} />
                    </div>
                </div>
                <hr className="my-12 bg-blue" />
                <div>
                    <div className="grid gap-12 footer-grid">
                        <div className="col">
                            <i className="text-lg mb-4 block txt-astra"> © 2022 «AstraZeneсa». Все права защищены</i>
                            <p className="mt-2 txt-base">  Номер одобрения: RU-14098</p>
                            <p className="mt-2 txt-base">  Дата одобрения: 19/08/2022</p>
                            <p className="mt-2 txt-base">  Дата истечения: 18/08/2024</p>
                        </div>
                        <div className="col">
                            <p className="txt-footer">Контакты</p>
                            <p className="txt-base mt-2"> ООО «АстраЗенека Фармасьютикалз».</p>
                            <p className="txt-base mt-2"> 123112, г. Москва, 1-й Красногвардейский<br />проезд, д.21, стр.1.</p>
                            <p className="txt-base mt-2"> Тел.: +7 (495) 799-56-99, <br />факс: +7 (495) 799-56-98</p>
                            <p className="txt-base mt-2">
                                <a href="www.astrazeneca.ru">
                                    www.astrazeneca.ru</a></p>
                        </div>
                        <div className="col">
                            <p className="txt-footer">Информация</p>
                            <p className="txt-base mt-2"> Политика конфиденциальности</p>
                            <p className="txt-base mt-2"> Правовая информация</p>
                            <p className="txt-base mt-2"> Контактная информация</p>
                            <p className="txt-base mt-2"> Сообщить о рекламации на лекарственный<br />препарат</p>
                            <p className="txt-base mt-2"> Сообщить о нежелательном явлении</p>
                            <p className="txt-base mt-2"> Служба Медицинской Информации</p>
                        </div>

                    </div>
                    <div className="w-full mt-8">
                        <p className="txt-footer-big mt-2">Материал предназначен для широкой аудитории. Информация, представленная в данном разделе, не представляет собой и не заменяет консультацию врача. Необходимо получить консультацию врача.</p>
                        <p className="txt-footer-big mt-2">Изображения задействованных моделей используются исключительно с целью иллюстрации и не свидетельствуют об одобрении ими деятельности или использовании ими продукции/услуги/торговой марки.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Block13;