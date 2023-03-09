import React from "react";


const Nezhelat_yavleniye = () => {
    return (
        <div className="popup-inner_content place-self-center" >
            <h2>Сообщить о нежелательном явлении</h2>
            <p>Компания «АстраЗенека» придает большое значение нашим обязательствам в отношении безопасности пациентов.</p>
            <p>Если Вам стало известно о нежелательном явлении/побочном эффекте на фоне применения лекарственного препарата «АстраЗенека», пожалуйста, сообщите об этом по следующим контактам:</p>
            <p>
                <ul>
                    <li>веб-форма по передаче нежелательных явлений <span className="text-pink underline hover:no-underline">CHAMPion</span></li>
                    <li>по телефону 8 (495) 799-56-99*4</li>
                    <li>по электронной почте <a href="mailto:Safety.Russia@astrazeneca.com" className="text-pink hover:no-underline underline">Safety.Russia@astrazeneca.com</a></li>
                </ul>
            </p>
            <p>Пожалуйста, обратите внимание, что передавая запрос о нежелательном явлении любым из вышеуказанных способом, вы признаете, что ознакомились с условиями настоящей <span className="text-pink underline hover:no-underline">Политики об обработке персональных данных</span> ООО «АстраЗенека Фармасьютикалз» и согласны на обработку ваших персональных данных на указанных в ней условиях.</p>
            <p className="mt-16">Номер одобрения: RU-14202. Дата одобрения: 29.08.2022. Дата истечения: 28.08.2024</p>
        </div>
    )
}


export default Nezhelat_yavleniye;