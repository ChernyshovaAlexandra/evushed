import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef, useState } from "react";
import './assets/scss/index.scss'
import Main from "./Blocks/Main";
import Nav from "./components/Nav";
import SecBg from './assets/images/secBG.jpeg'
import { motion } from 'framer-motion'
import bg from './assets/images/bg_with_polygon.jpeg'
import Cookie from "./components/Cookie";
import { imageAnimation, imageInnerAnimation, pinkSpan, pinkSpanContainer } from "./assets/constants/mainPagestyles";
import pils from './assets/images/vacine.png'
import Icon from "./components/Icon";
import Block4 from "./Blocks/Block4";
import Block7 from "./Blocks/Block7";

const App = () => {
  let cook = localStorage.getItem('astra-zeneka-cookie')
  const [cookies, checkCookies] = useState(cook);
  const setCookies = () => {
    localStorage.setItem('astra-zeneka-cookie', 'true')
    checkCookies(true)
  }
  const ref = useRef(null);
  useEffect(() => { console.log(ref.current) }, [ref])

  return (
    <div className="content blue-bg-grad" style={{ width: '100%' }}>
      <Nav />
      <Parallax pages={7} className='bg-lavender'>
        <ParallaxLayer offset={0}>
          <Main />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 4 }} ref={ref}>
          <img className="w-full h-full" src={bg} />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 1.5 }} id='imageBlock'>
          <motion.div className="relative z-30 w-full h-full" variants={imageAnimation} animate='visible' initial="hidden" >
            <motion.img className="w-full h-full" variants={imageInnerAnimation} animate='visible' initial="hidden" src={SecBg} alt="" />
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 4 }} id='textBlock'>
          <div className="absolute w-42p container text-2xl  top-0 bottom-0 my-auto h-fit text-white h2 words" >
            <motion.span variants={pinkSpanContainer} initial="hidden" animate="visible" className="type py-4 relative left-12">
              Вакцинация является важной опцией
              профилактики коронавирусной инфекции,
              однако не всегда она обеспечивает
              необходимую защиту<small>2</small>. Люди со сниженным
              иммунитетом <motion.span variants={pinkSpan}>могут нуждаться в дополнительной защите</motion.span> от COVID-19<small>3-5</small>
            </motion.span>
          </div>
          <div className="flex gap-4 items-center bottom-12 left-12 absolute">
            <Icon id={0} img={`<svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.81127 11.5946L15.9464 29L31.0815 11.5946" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 15L15.0583 26.3631C15.3743 27.248 16.6257 27.248 16.9417 26.3631L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15.9463 29L15.9463 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
            <p className="text-white font-bold text-lg">Смотри спектр защиты от COVID-19</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3.2, end: 4.2 }} id='pills'>
          <div className="w-4/12 ml-auto relative" >
            <img src={pils} className='absolute top-0 right-0 bottom-0 my-auto' />
            <img src={pils} className='rotate-45 absolute top-32 right-64 bottom-0 my-auto' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3.8, end: 7.5 }} id='Spectr'>
          <Block4 />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 8, end: 9 }} id='QA' className="-mt-32">
          <Block7 />
        </ParallaxLayer>
      </Parallax>
      {cookies ? null : <Cookie setCookies={setCookies} />}
    </div >

  );
}

export default App;
