import React, { useEffect, useRef, useState } from "react";
import './assets/scss/index.scss'
import Main from "./Blocks/Main";
import Nav from "./components/Nav";
import { useScroll, useSpring } from '@react-spring/web'
import Block7 from "./Blocks/Block7";
import Block8 from "./Blocks/Block8";
import Block9 from "./Blocks/Block9";
import Block11 from "./Blocks/Block11";
import Block12 from "./Blocks/Block12";
import QA from './Blocks/QA'
import Block13 from "./Blocks/Block13";
import Popup from "./components/Popup";

const App = () => {
  let cook = localStorage.getItem('astra-zeneka-cookie')
  const [cookies, checkCookies] = useState(cook);
  const setCookies = () => {
    localStorage.setItem('astra-zeneka-cookie', 'true')
    checkCookies(true)
  }
  const containerRef = useRef(null);
  const [translateImg, setTr] = useSpring(() => ({ transform: 'translateX(0%)', display: 'block', opacity: 1 }));
  const [block, blockApi] = useSpring(() => ({ transform: 'translateX(-35%)', }));
  const [opacity, opacityApi] = useSpring(() => ({ opacity: 0, clipPath: 'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)', transform: 'translateX(0%)' }))
  const [pink, pinkApi] = useSpring(() => ({ color: 'rgba(255,255,255,0)' }))
  const [raysSt, setRays] = useSpring(() => ({ opacity: 0, transform: 'scale(3)', display: 'flex' }))
  const [raysStL, setRaysL] = useSpring(() => ({ class: 'doc-after', opacity: 0, transform: 'scale(3)', color: 'white', display: 'none' }))
  const [raysSt2, setRays2] = useSpring(() => ({ opacity: 0, transform: 'scale(3)', color: 'white', display: 'none' }));
  const [raysBlock, setRaysblock] = useSpring(() => ({ opacity: 0 }))
  const [mainBgAnim, mainBgApi] = useSpring(() => ({ transform: 'scale(3)', opacity: 1 }))
  const [popup, close] = useState(false)

  const { scrollYProgress } = useScroll({
    constiner: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      console.log(scrollYProgress);
      
      mainBgApi.start({
        opacity: scrollYProgress >= .02 ? 0 : 1,
        transform: scrollYProgress < .02 ? 'scale(1)' : 'scale(2)'
      });

      opacityApi.start({
        opacity: scrollYProgress > .02 && scrollYProgress < .1 ? 1 : 0,
        transform: scrollYProgress > .045 ? 'translateX(100%)' :
          scrollYProgress > .04 && scrollYProgress < .045 ? 'translateX(35%)' : 'translateX(0%)',
        clipPath: scrollYProgress > .035 ?
          'polygon(40% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 15% 50%)' :
          'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)'
      });


      setTr.start({
        opacity: scrollYProgress > .03 ? .5 : 1,
        display: scrollYProgress > .04 && scrollYProgress < .05 ? 'none' : 'block'
      })
      blockApi.start({
        transform: scrollYProgress >= .02 ? 'translate(0)' : 'translateX(-35%)',
        opacity: scrollYProgress > .045 ? 1 : 0
      })
      setRaysblock.start({
        opacity: scrollYProgress > .07 && scrollYProgress < .25 ? 1 : 0
      });

      setRays.start({
        opacity: scrollYProgress > .07 && scrollYProgress < .14 ? 1 : 0,
        //  scrollYProgress > .2 && scrollYProgress < .25 
        transform: scrollYProgress > .7 ? 'scale(1)' : 'scale(3)',
        display: scrollYProgress > .14 ? 'none' : 'flex'
      })

      setRaysL.start({
        opacity: scrollYProgress > .14 && scrollYProgress < .21 ? 1 : 0,
        transform: scrollYProgress > .14 ? 'scale(1)' : 'scale(3)',
        color: scrollYProgress > .14 && scrollYProgress < .21 ? '#092477' : '#fff',
        display: scrollYProgress > .14 && scrollYProgress < .21 ? 'flex' : 'none'
      })
      setRays2.start({
        opacity: scrollYProgress > .21 && scrollYProgress < .28 ? 1 : 0,
        display: scrollYProgress > .21 && scrollYProgress < .28 ? 'flex' : 'none'
      })

    },
    default: {
      immediate: true,
    },
  });


  return (
    <>
      <div className={`relative content blue-bg-grad ${popup ? 'overflow-hidden' : ''}`} style={{
        height: popup ? '100vh' : '',
        width: '100vw', overflowX: 'hidden'
      }} >
        <Nav />
        <div className="overflow-y-scroll bg-lavender relative z-30" ref={containerRef} style={{ height: '260vh' }}>
          <Main close={close} raysBlock={raysBlock} raysSt2={raysSt2} raysStL={raysStL} raysSt={raysSt} pink={pink} block={block} opacity={opacity} mainBgAnim={mainBgAnim} scrollYProgress={scrollYProgress} translateImg={translateImg}
          // 
          />
        </div>

        <Block7 />
        <Block8 />
        <Block9 />
        <QA />
        <Block11 />
        <Block12 />
        <Block13 />
        {popup ? <Popup close={close} /> : null}
        {
          cookies ? null :
            <div className="bg-pink text-white fixed bottom-0 left-0 w-full px-12 py-8">
              <div className="flex gap-4 items-center mx-auto w-11/12">
                <div className="">
                  <p className="font-bold">Политика Cookie</p>
                  <p className="mt-2 font-normal">Этот сайт использует файлы cookies, чтобы облегчить вам пользование нашим веб-сайтом. Продолжая использовать этот веб-сайт, вы даете согласие на использование файлов cookies. Подробнее о том, как мы пользуемся файлами cookies и как ими управлять, вы можете узнать нажав на ссылку.</p>
                </div>
                <button className="btn btn-transparent text-pink shrink-0" onClick={setCookies}>Согласен</button>
              </div>
            </div>
        }
      </div >

    </>
  );
}

export default App;
