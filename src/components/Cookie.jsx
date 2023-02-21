import React from "react";


const Cookie = ({setCookies}) => {
    return (
        <div className="bg-pink text-white fixed bottom-0 left-0 w-full px-12 py-8 z-40">
            <div className="flex gap-4 items-center mx-auto w-11/12">
                <div className="">
                    <p className="font-bold">Политика Cookie</p>
                    <p className="mt-2 font-normal">Этот сайт использует файлы cookies, чтобы облегчить вам пользование нашим веб-сайтом. Продолжая использовать этот веб-сайт, вы даете согласие на использование файлов cookies. Подробнее о том, как мы пользуемся файлами cookies и как ими управлять, вы можете узнать нажав на ссылку.</p>
                </div>
                <button className="btn btn-transparent text-pink shrink-0" onClick={setCookies}>Согласен</button>
            </div>
        </div>
    )
}

export default Cookie;