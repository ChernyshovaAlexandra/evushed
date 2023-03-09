import React from "react";


const Reklamacia = () => {
    return (
        <div className="popup-inner_content place-self-center" >
            <h2>Сообщить о рекламации</h2>
            <p>Если Вам стало известно о рекламации на препарат компании АстраЗенека (подозрение к качеству или подлинности), пожалуйста, сообщите эту информацию в медицинский отдел:</p>
            <p className="font-bold">Сделать это Вы можете по телефону:</p>
            <p><a className="text-pink" href="tel:+74957995699">8 (495) 799-56-99</a></p>
            <p className="font-bold">По электронной почте:</p>
            <p><a className="text-pink underline hover:no-underline" href="mailto:ProductQuality.ru@astrazeneca.com">ProductQuality.ru@astrazeneca.com</a></p>
            <p className="mt-16">Номер одобрения: RU-14202. Дата одобрения: 29.08.2022. Дата истечения: 28.08.2024
            </p>
        </div>
    )
}

export default Reklamacia;