import React from "react";
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'

const Block13 = () => {
    return (
        <section className="py-12 bg-darkBlue text-white">
            <div className="container mx-auto">
                <p className="text-sm mt-2">Здесь вам могут помочь с информацией относительно вашего заболевания: </p>
                <div className="mt-8 grid grid-cols-4 gap-4">
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
                            <i className="text-lg mb-4 block"> © 2022 «AstraZeneсa». Все права защищены</i>
                            <p className="text-sm mt-2">  Номер одобрения: RU-14098</p>
                            <p className="text-sm mt-2">  Дата одобрения: 19/08/2022</p>
                            <p className="text-sm mt-2">  Дата истечения: 18/08/2024</p>
                        </div>
                        <div className="col">
                            <p className="font-bold">Контакты</p>
                            <p className="text-sm mt-2"> ООО «АстраЗенека Фармасьютикалз».</p>
                            <p className="text-sm mt-2"> 123112, г. Москва, 1-й Красногвардейский проезд, д.21, стр.1.</p>
                            <p className="text-sm mt-2"> Тел.: +7 (495) 799-56-99, факс: +7 (495) 799-56-98</p>
                            <p className="text-sm mt-2"> www.astrazeneca.ru</p>
                        </div>
                        <div className="col">
                            <p className="font-bold">Информация</p>
                            <p className="text-sm mt-2"> Политика конфиденциальности</p>
                            <p className="text-sm mt-2"> Правовая информация</p>
                            <p className="text-sm mt-2"> Контактная информация</p>
                            <p className="text-sm mt-2"> Сообщить о рекламации на лекарственный препарат</p>
                            <p className="text-sm mt-2"> Сообщить о нежелательном явлении</p>
                            <p className="text-sm mt-2"> Служба Медицинской Информации</p>
                        </div>
                        
                    </div>
                    <div className="w-full mt-8">
                            <p className="text-lg mt-2">Материал предназначен для широкой аудитории. Информация, представленная в данном разделе, не представляет собой и не заменяет консультацию врача. Необходимо получить консультацию врача.</p>
                            <p className="text-lg mt-2">Изображения задействованных моделей используются исключительно с целью иллюстрации и не свидетельствуют об одобрении ими деятельности или использовании ими продукции/услуги/торговой марки.</p>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Block13;