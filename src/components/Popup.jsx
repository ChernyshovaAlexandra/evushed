import React, { useRef, useState } from "react";


const Popup = ({ close }) => {
    const ref = useRef(null);
    const [check, setChecked] = useState(0)

    const checkRes = (e) => {
        e.preventDefault();
        console.log(check)
    }

    return (
        <div className="fixed top-0 w-full popup-container grid place-items-center">
            <div className="popup-inner relative xl:p-8 p-4 pt-16 bg-white rounded-lg">
                <div className="closebtn absolute top-4 right-4" onClick={() => close(false)}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#AAABAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="#AAABAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="popup-inner_content">
                    <h2 className="font-bold">Узнайте, находитесь ли вы в группе повышенного риска тяжелого течения COVID-19</h2>
                    <p className="text-gray-500 mt-4 mb-8">Имеется ли у Вас одно или более из состояний/заболеваний, перечисленных ниже?</p>
                    <form className="xl:p-8 p-4 bg-white rounded-lg" ref={ref}>
                        <div className="mb-4 flex items-top text-lg xl:text-xl">
                            <input onChange={(e) => {
                                setChecked(check => e.target.checked ? check + 1 : check - 1)
                            }
                            } class="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check" />
                            <label htmlFor="check"> Онкологическое заболевание (в том числе онкологическое заболевание крови)?</label>
                        </div>
                        <div className="my-4 flex items-top text-lg xl:text-xl">
                            <input onChange={(e) =>
                                setChecked(check => e.target.checked ? check + 1 : check - 1)
                            } class="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check1" />
                            <label htmlFor="check1"> Трансплантация солидного органа (почка, печень и др.) или костного мозга</label>
                        </div>
                        <div className="my-4 flex items-top text-lg xl:text-xl">
                            <input onChange={(e) =>
                                setChecked(check => e.target.checked ? check + 1 : check - 1)
                            } class="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check2" />
                            <label htmlFor="check2"> Хроническая болезнь почек, требующая диализа</label>
                        </div>
                        <div className="my-4 flex items-top text-lg xl:text-xl">
                            <input onChange={(e) =>
                                setChecked(check => e.target.checked ? check + 1 : check - 1)
                            } class="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check3" />
                            <label htmlFor="check3"> Хроническое заболевание (например, сахарный диабет 1 или 2 типа, тяжелая бронхиальная астма, ХОБЛ, сердечно-сосудистое заболевание)</label>
                        </div>
                        <div className="my-4 flex items-top text-lg xl:text-xl">
                            <input onChange={(e) =>
                                setChecked(check => e.target.checked ? check + 1 : check - 1)
                            } class="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check4" />
                            <label htmlFor="check4"> Ревматологическое заболевание, требующее терапии с применением препаратов, подавляющих иммунитет</label>
                        </div>
                        <div className="my-4 flex items-top text-lg xl:text-xl">
                            <input onChange={(e) =>
                                setChecked(check => e.target.checked ? check + 1 : check - 1)
                            } class="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check6" />
                            <label htmlFor="check6"> Первичный иммунодефицит</label>
                        </div>
                        <div className="my-4 flex items-top text-lg xl:text-xl">
                            <input onChange={(e) =>
                                setChecked(check => check)}
                                class="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check5" />
                            <label htmlFor="check5">Не имеется</label>
                        </div>
                        <button className="btn btn-pink text-white mt-6" onClick={checkRes}>Проверить</button>
                    </form >

                </div >
            </div >
        </div >
    )
}

export default Popup;