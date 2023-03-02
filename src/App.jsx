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
import { coordinates } from "./assets/constants/coordinates";

const App = () => {
  let cook = localStorage.getItem('astra-zeneka-cookie');
  const [popup, close] = useState(false)
  const [cookies, checkCookies] = useState(cook);
  const setCookies = () => {
    localStorage.setItem('astra-zeneka-cookie', 'true')
    checkCookies(true)
  }
  const containerRef = useRef(null);


  const [main_photo_to_right, move_main_photo] = useSpring(() => ({ transform: 'translateX(0%)', display: 'block', opacity: 1 }));
  const [blue_bg_block, blueBgBlockApi] = useSpring(() => ({ transform: 'translateX(-35%)', }));
  const [blue_bg_block_image, blueBgBlockImageApi] = useSpring(() => ({ opacity: 0, clipPath: 'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)', transform: 'translateX(0%)' }))
  const [main_bg_gradient, set_main_bg_gradient] = useSpring(() => ({ opacity: 1 }));
  const [mainBgRaysAnim, mainBgRaysApi] = useSpring(() => ({ transform: 'scale(3)', opacity: 1 }));


  const [raysSpectrOneBlue, set_raysSpectrOneBlue] = useSpring(() => ({ opacity: 0, display: 'flex' }))
  const [raysSpectrTwoWhite, set_raysSpectrTwoWhite] = useSpring(() => ({ opacity: 0, color: 'white', display: 'none' }))
  const [raysSpectrTwoBlue, set_raysSpectrTwoBlue] = useSpring(() => ({ display: 'none' }));
  const [spectrZashityAll, spectrZashityAll_set] = useSpring(() => ({ opacity: 0 }))




  const { scrollYProgress } = useScroll({
    constiner: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      console.log(scrollYProgress)
      set_main_bg_gradient.start({
        opacity: scrollYProgress > coordinates.block1.coordinates[0] + .004 ? 0 : 1
      })
      mainBgRaysApi.start({
        opacity: scrollYProgress >= coordinates.block1.coordinates[0] + .005 ? 0 : 1,
        transform: scrollYProgress < coordinates.block2.coordinates[0] ? 'scale(1.35)' : 'scale(3)'
      });

      blueBgBlockImageApi.start({
        opacity: scrollYProgress >= coordinates.block2.coordinates[0] ? 0 : 1,
        transform: scrollYProgress > coordinates.block2.coordinates[1] + .005 ? 'translateX(100%)' :
          scrollYProgress > coordinates.block2.coordinates[1] && scrollYProgress < coordinates.block2.coordinates[1] + .005 ? 'translateX(40%)' : 'translateX(0%)',
        clipPath: scrollYProgress > coordinates.block2.coordinates[1] ?
          'polygon(32% 0px, 100% 0px, 100% 50%, 100% 100%, 32% 100%, 13% 50%)' :
          'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)'
      });


      move_main_photo.start({
        display: scrollYProgress > coordinates.block3.coordinates[0] && scrollYProgress < coordinates.block4.coordinates[0] ? 'none' : 'block'
      })
      blueBgBlockApi.start({
        transform: scrollYProgress >= coordinates.block2.coordinates[0] ? 'translate(0)' : 'translateX(-35%)',
        opacity: scrollYProgress > coordinates.block2.coordinates[1] ? 1 : 0
      })
      spectrZashityAll_set.start({
        opacity: scrollYProgress > coordinates.block4.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[1] ? 1 : 0
      });

      set_raysSpectrOneBlue.start({
        opacity: scrollYProgress > coordinates.block4.coordinates[0] && scrollYProgress < coordinates.block5.coordinates[0] ? 1 : 0,
        display: scrollYProgress > coordinates.block4.coordinates[0] && scrollYProgress < coordinates.block5.coordinates[0] ? 'flex' : 'none'
      })

      set_raysSpectrTwoWhite.start({
        opacity: scrollYProgress > coordinates.block5.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[0] ? 1 : 0,
        color: scrollYProgress > coordinates.block5.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[0] ? '#092477' : '#fff',
        display: scrollYProgress > coordinates.block5.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[0] ? 'flex' : 'none'
      })
      set_raysSpectrTwoBlue.start({
        display: scrollYProgress > coordinates.block6.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[1] ? 'flex' : 'none'
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
        <div className="overflow-y-scroll overflow-x-hidden bg-lavender relative z-30" ref={containerRef} style={{ height: '560vh' }}>
          <Main
            close={close}
            spectrZashityAll={spectrZashityAll}
            raysSpectrTwoBlue={raysSpectrTwoBlue}
            raysSpectrTwoWhite={raysSpectrTwoWhite}
            raysSpectrOneBlue={raysSpectrOneBlue}
            main_bg_gradient={main_bg_gradient}
            blue_bg_block={blue_bg_block}
            blue_bg_block_image={blue_bg_block_image}
            mainBgRaysAnim={mainBgRaysAnim}
            scrollYProgress={scrollYProgress}
            main_photo_to_right={main_photo_to_right}
          // 
          />
        </div>

        <Block7 />
        <Block8 scrollYProgress={scrollYProgress} />
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
