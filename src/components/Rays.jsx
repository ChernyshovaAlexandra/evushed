import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { bgPath2Props, bgPathProps, bgProps, mainRect, st, st2, st3, st4, st5, st6, st7, st8 } from "../assets/constants/raysStyles";


const Rays = ({ animate }) => {
    return (
        <svg className="rays" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#rect_main)">
                <rect
                
                    
                    initial="blue"
                    animate='white'
                    className="w-full h-full"
                />
                <g   initial='blue' animate='white' opacity="0.5">
                    <path  initial='blue' animate='white' d="M601 1077H1.88582H-100V-100H405.726L447.467 150.092L476.533 326.375L513.967 553.426L601 1077Z" />
                    <path  initial='blue' animate='white' d="M601 1078H602.18L601.986 1076.84L514.954 553.264L514.953 553.262L477.52 326.213L448.454 149.93L448.453 149.928L406.712 -100.165L406.573 -101H405.726H-100H-101V-100V1077V1078H-100H1.88582H601Z" strokeWidth="2" />
                </g>
                <g  initial='blue' animate='white' opacity="0.2" >
                    <path  initial="blue" animate='white' d="M601 1077H1.88582H-100V-100H405.726L447.467 150.092L476.533 326.375L513.967 553.426L601 1077Z" />
                </g>
                <g  initial='blue' animate='white' opacity="0.5" >
                    <path d="M352 737.859L-100 584V1100H352V737.859Z" fill="#2EB7F2" />
                </g>
                <g  initial='blue' animate='white' style={{ "mixBlendMode": "color-dodge" }} >
                    <path  initial='blue' animate='white' d="M-100 235V478.5L1540 143.287L-100 235Z" />
                </g>


                <g  initial='blue' animate='white' opacity="0.5">
                    <path  initial='blue' animate='white' d="M-100 235V-100H1540V143.287L-100 235Z" />
                    <path  values={st4} initial='blue' animate='white' d="M-100 -101H-101V-100V235V236.057L-99.9442 235.998L1540.06 144.285L1541 144.233V143.287V-100V-101H1540H-100Z" />
                </g>
            </g>
            <defs>

                <filter id="vertical-left-line" x="-155" y="-155" width="851.36" height="1327" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="13.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_857_5406" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="20" dy="20" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_857_5406" result="effect2_dropShadow_857_5406" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_857_5406" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="37" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_857_5406" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_857_5406" />
                </filter>
                <filter id="vertical-left-polygon" x="-153" y="-151" width="885" height="1323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-10" dy="2" />
                    <feGaussianBlur stdDeviation="21.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_857_5406" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="58" dy="22" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_857_5406" result="effect2_dropShadow_857_5406" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_857_5406" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="140" dy="4" />
                    <feGaussianBlur stdDeviation="42" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_857_5406" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_857_5406" />
                </filter>
                <filter id="vertical-left-polygon_round" x="-350" y="334" width="952" height="1016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_857_5406" />
                </filter>
                <filter id="horizintal-top-line-shadow" x="-225" y="18.2871" width="1890" height="585.213" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="62.5" result="effect1_foregroundBlur_857_5406" />
                </filter>
                <filter id="horizintal-top-line" x="-251" y="-251" width="1942" height="637.115" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="16" />
                    <feGaussianBlur stdDeviation="12.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.325334 0 0 0 0 0.00784314 0 0 0 0 1 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_857_5406" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="74.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.335373 0 0 0 0 0.996078 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_857_5406" result="effect2_dropShadow_857_5406" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_857_5406" result="shape" />
                    <feGaussianBlur stdDeviation="1.5" result="effect3_foregroundBlur_857_5406" />
                </filter>
                <filter id="bottom-right-triangle" x="969.713" y="303.502" width="679.287" height="800.498" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="16" />
                    <feGaussianBlur stdDeviation="12.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.325334 0 0 0 0 0.00784314 0 0 0 0 1 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_857_5406" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_857_5406" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="74.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.261961 0 0 0 0 0.0784314 0 0 0 0 0.996078 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_857_5406" />
                    <feGaussianBlur stdDeviation="2" result="effect3_foregroundBlur_857_5406" />
                </filter>
                <filter id="bottom-right-triangle_shadow" x="1083.18" y="170.906" width="772.817" height="1156.09" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_857_5406" />
                </filter>
                <linearGradient id="horizintal-top-line_2" x1="477.33" y1="92.7666" x2="991.809" y2="-499.401" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EDE9FB" />
                    <stop offset="1" stopColor="#DEC4DE" />
                </linearGradient>
                <linearGradient id="horizintal-top-line_bg_shadow" x1="1527.65" y1="-60.6619" x2="984.79" y2="894.893" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="0.239583" stopColor="#FA9EEB" />
                    <stop offset="0.473958" stopColor="#D0C0F2" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="bottom-right-triangle_shadow" x1="1600.11" y1="421.248" x2="672.55" y2="772.059" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="0.239583" stopColor="#FA9EEB" />
                    <stop offset="0.510417" stopColor="#D0C0F2" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <clipPath id="rect_main">
                    <rect width="1440" height="1000" fill="white" />
                </clipPath>
                <linearGradient id="rect-main_blue-gradient" x1="720" y1="0" x2="720" y2="1000" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0F072C" />
                    <stop offset="1" stopColor="#092477" />
                </linearGradient>
            </defs>
            <defs>
                <filter id="vertical-left-line_blue" x="-157" y="-157" width="899.769" height="1331" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="13.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_854_5361" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="20" dy="20" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_854_5361" result="effect2_dropShadow_854_5361" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_854_5361" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="37" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_854_5361" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_854_5361" />
                </filter>
                <filter id="filter1_ddif_854_5361" x="-153" y="-151" width="929" height="1323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-10" dy="2" />
                    <feGaussianBlur stdDeviation="21.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_854_5361" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="58" dy="22" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_854_5361" result="effect2_dropShadow_854_5361" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_854_5361" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="140" dy="4" />
                    <feGaussianBlur stdDeviation="42" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_854_5361" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_854_5361" />
                </filter>
                <filter id="filter2_f_854_5361" x="-350" y="334" width="952" height="1016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_854_5361" />
                </filter>
                <filter id="filter3_f_854_5361" x="-225" y="18.2869" width="1890" height="585.213" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="62.5" result="effect1_foregroundBlur_854_5361" />
                </filter>
                <filter id="filter4_ddif_854_5361" x="-157" y="-155" width="1832" height="489.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-10" dy="2" />
                    <feGaussianBlur stdDeviation="21.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_854_5361" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="58" dy="22" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_854_5361" result="effect2_dropShadow_854_5361" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_854_5361" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="37" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_854_5361" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_854_5361" />
                </filter>
                <filter id="filter5_ddif_854_5361" x="921.426" y="272.004" width="819.574" height="903.996" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-10" dy="2" />
                    <feGaussianBlur stdDeviation="21.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_854_5361" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="58" dy="22" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_854_5361" result="effect2_dropShadow_854_5361" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_854_5361" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="37" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_854_5361" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_854_5361" />
                </filter>
                <filter id="filter6_f_854_5361" x="1083.18" y="170.906" width="772.817" height="1156.09" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_854_5361" />
                </filter>
                <linearGradient id="paint0_linear_854_5361" x1="720" y1="0" x2="720" y2="1000" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0F072C" />
                    <stop offset="1" stopColor="#092477" />
                </linearGradient>
                <clipPath id="clip0_854_5361">
                    <rect width="1440" height="1000" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}


export default Rays;