import React, { useEffect, useRef, useState } from "react";
import './assets/scss/index.scss'
import Main from "./Blocks/Main";
import Nav from "./components/Nav";
import { useScroll, useSpring } from '@react-spring/web'


const App = () => {
  let cook = localStorage.getItem('astra-zeneka-cookie')
  const [cookies, checkCookies] = useState(cook);
  const setCookies = () => {
    localStorage.setItem('astra-zeneka-cookie', 'true')
    checkCookies(true)
  }
  const containerRef = useRef(null);
  const [translateImg, setTr] = useSpring(() => ({
    transform: 'translateX(0%)',
    display: 'block',
  }));
  const [block, blockApi] = useSpring(() => ({
    transform: 'translateX(-35%)',
    opacity: 0
  }));
  const [opacity, opacityApi] = useSpring(() => ({
    opacity: 0,

    clipPath: 'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)',
    transform: 'translateX(0%)'

  }))
  const [mainBgAnim, mainBgApi] = useSpring(() => ({
    transform: 'scale(1)',
    opacity: 1
  }))
  const { scrollYProgress } = useScroll({
    constiner: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0) {
        mainBgApi.start({ transform: 'scale(2)' });
      }
      if (scrollYProgress > .2) {
        mainBgApi.start({ opacity: 0 });
        opacityApi.start({ opacity: 1 });
      }
      if (scrollYProgress > .25) {
        opacityApi.start({ clipPath: 'polygon(40% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 15% 50%)' })
      }
      if (scrollYProgress > .35) {
        opacityApi.start({ transform: 'translateX(35%)' });
        blockApi.start({ transform: 'translate(0)' })
      }
      if (scrollYProgress > .5) {
        opacityApi.start({ transform: 'translateX(100%)' });
        
      }
      if (scrollYProgress > .55) {
        setTr.start({ display: 'none' });
        blockApi.start({ opacity: 1 });
      }
    },
    default: {
      immediate: true,
    },
  });


  return (
    <div className="content blue-bg-grad relative" style={{ width: '100%', height: '800vh' }} ref={containerRef}>
      <Nav />
      <Main block={block} opacity={opacity} mainBgAnim={mainBgAnim} scrollYProgress={scrollYProgress} translateImg={translateImg} />
      {/* <ImageBlock scrollYProgress={scrollYProgress} /> */}

      {/* <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
      <QA />
      <Block11 />
      <Block12 />
      <Block13 /> */}
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
      {/* <ScrolledBlocks containerRef={containerRef} /> */}
    </div >

  );
}

export default App;
