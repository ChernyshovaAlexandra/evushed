import React, { useState } from "react";
import './assets/scss/index.scss'
import Block11 from "./Blocks/Block11";
import Block12 from "./Blocks/Block12";
import Block13 from "./Blocks/Block13";
import Block2 from "./Blocks/Block2";
import Block3 from "./Blocks/Block3";
import Block4 from "./Blocks/Block4";
import Block5 from "./Blocks/Block5";
import Block6 from "./Blocks/Block6";
import Block7 from "./Blocks/Block7";
import Block8 from "./Blocks/Block8";
import Block9 from "./Blocks/Block9";
import Main from "./Blocks/Main";
import QA from "./Blocks/QA";
import Nav from "./components/Nav";

const App = () => {
  let cook = localStorage.getItem('astra-zeneka-cookie')

  const [cookies, checkCookies] = useState(cook);
  const setCookies = () => {
    localStorage.setItem('astra-zeneka-cookie', 'true')
    checkCookies(true)
  }
  return (
    <div className="content relative">
      <Nav />
      <Main />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
      <QA />
      <Block11 />
      <Block12 />
      <Block13 />
      {cookies ? null :
        <div className="bg-pink text-white fixed bottom-0 left-0 w-full px-12 py-8">
          <div className="flex gap-4 items-center mx-auto w-11/12">
            <div className="">
              <p className="font-bold">Политика Cookie</p>
              <p className="mt-2 font-normal">Этот сайт использует файлы cookies, чтобы облегчить вам пользование нашим веб-сайтом. Продолжая использовать этот веб-сайт, вы даете согласие на использование файлов cookies. Подробнее о том, как мы пользуемся файлами cookies и как ими управлять, вы можете узнать нажав на ссылку.</p>
            </div>
            <button className="btn btn-transparent text-pink shrink-0" onClick={setCookies}>Согласен</button>
          </div>
        </div>}
    </div >
  );
}

export default App;
