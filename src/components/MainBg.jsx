import React, { useEffect, useState } from "react";
// style={{ mixBlendMode: "color-dodge" }} 

const MainBg = () => {
    const h = window.innerHeight; // 100% h (1200)  
    const [w, setW] = useState(0); // x%  w
    useEffect(() => {
        setW((document.querySelector('#rays').getBoundingClientRect().width - window.innerWidth) / 2)
    }, [])
    return (
        <svg className="h-full absolute" style={{ left: -w }} viewBox="0 0 2197 1200" fill="none" xmlns="http://www.w3.org/2000/svg" id="rays">
            <g clip-path="url(#clip0_947_552)">
                <rect width="2197" height="1200" fill="url(#paint0_linear_947_552)" />
                <g opacity="0.5" filter="url(#filter0_ddif_947_552)">
                    <path d="M1017 1200L2194.5 245V1200H1017Z" fill="#0F072C" />
                    <path d="M2196.5 245V240.803L2193.24 243.447L1015.74 1198.45L1011.36 1202H1017H2194.5H2196.5V1200V245Z" stroke="#443EFF" stroke-width="4" />
                </g>
                <g opacity="0.5" filter="url(#filter1_f_947_552)">
                    <path d="M2199 1200H1233L2199 587V1200Z" fill="#B32EF2" />
                </g>
                <g style={{ mixBlendMode: "color-dodge" }} opacity="0.52" filter="url(#filter2_f_947_552)">
                    <path d="M1447.75 901.204C1160.37 953.679 1047.51 1168.27 1027 1269H2199V452H2028.47C1954.64 579.87 1735.12 848.728 1447.75 901.204Z" fill="#0C32A5" />
                </g>
                <g opacity="0.5" filter="url(#filter3_ddif_947_552)">
                    <path d="M545.223 0H3V1200H745L545.223 0Z" fill="#0F072C" />
                    <path d="M3 -2H1V0V1200V1202H3H745H747.36L746.973 1199.67L547.196 -0.328441L546.918 -2H545.223H3Z" stroke="#443EFF" stroke-width="4" />
                </g>
                <g opacity="0.2" filter="url(#filter4_ddif_947_552)">
                    <path d="M545.223 0H-1.5V1200H745L545.223 0Z" fill="#0F072C" />
                </g>
                <g opacity="0.5" filter="url(#filter5_f_947_552)">
                    <path d="M468.135 709.079L15 409V1334H549L468.135 709.079Z" fill="#2EB7F2" />
                </g>
                <g filter="url(#filter6_f_947_552)">
                    <path d="M1779 1200L-1.5 738.5V1200H1779Z" fill="#150B3D" />
                </g>
                <g opacity="0.2" filter="url(#filter7_ddif_947_552)">
                    <path d="M1779 1200L0 735V1200H1779Z" fill="#0F072C" />
                </g>
                <g style={{ mixBlendMode: "color-dodge" }} opacity="0.52" filter="url(#filter8_f_947_552)">
                    <ellipse cx="900.49" cy="224.127" rx="1339.49" ry="624.035" transform="rotate(-24.4284 900.49 224.127)" fill="#0C32A5" />
                </g>
                <g style={{ mixBlendMode: "color-dodge" }} opacity="0.52" filter="url(#filter9_f_947_552)">
                    <ellipse cx="486.647" cy="-66.8784" rx="1339.49" ry="624.035" transform="rotate(-24.4284 486.647 -66.8784)" fill="#0C32A5" />
                </g>
                <g opacity="0.5" filter="url(#filter10_ddif_947_552)">
                    <path d="M356 0L2197 699.5L2199 0H356Z" fill="#0F072C" />
                    <path d="M2196.29 701.37L2198.99 702.396L2199 699.506L2201 0.00571835L2201.01 -2H2199H356L355.29 1.86959L2196.29 701.37Z" stroke="#443EFF" stroke-width="4" />
                </g>
                <g opacity="0.45" filter="url(#filter11_ddif_947_552)">
                    <path d="M356 0L2197 699V0H356Z" fill="#092477" />
                </g>
                <g style={{ mixBlendMode: "color-dodge" }} opacity="0.65" filter="url(#filter12_f_947_552)">
                    <path d="M1879 695L305.5 0L1879 595.5L1879 695Z" fill="#CB2EF2" />
                </g>
            </g>
            <defs>
                <filter id="filter0_ddif_947_552" x="952.718" y="183.605" width="1338.78" height="1113.39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="13.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_947_552" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="20" dy="20" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_947_552" result="effect2_dropShadow_947_552" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_947_552" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="37" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_947_552" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_947_552" />
                </filter>
                <filter id="filter1_f_947_552" x="983" y="337" width="1466" height="1113" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_947_552" />
                </filter>
                <filter id="filter2_f_947_552" x="777" y="202" width="1672" height="1317" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_947_552" />
                </filter>
                <filter id="filter3_ddif_947_552" x="-54" y="-57" width="896.721" height="1354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="13.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_947_552" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="20" dy="20" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_947_552" result="effect2_dropShadow_947_552" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_947_552" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="37" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_947_552" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_947_552" />
                </filter>
                <filter id="filter4_ddif_947_552" x="-54.5" y="-51" width="930.5" height="1346" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-10" dy="2" />
                    <feGaussianBlur stdDeviation="21.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_947_552" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="58" dy="22" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_947_552" result="effect2_dropShadow_947_552" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_947_552" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="140" dy="4" />
                    <feGaussianBlur stdDeviation="42" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_947_552" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_947_552" />
                </filter>
                <filter id="filter5_f_947_552" x="-235" y="159" width="1034" height="1425" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_947_552" />
                </filter>
                <filter id="filter6_f_947_552" x="-17.5" y="722.5" width="1812.5" height="493.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_947_552" />
                </filter>
                <filter id="filter7_ddif_947_552" x="-84" y="573" width="2086" height="672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="180" dy="2" />
                    <feGaussianBlur stdDeviation="21.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.266944 0 0 0 0 0.241667 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_947_552" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="58" dy="-89" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.243137 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_947_552" result="effect2_dropShadow_947_552" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_947_552" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-216" dy="4" />
                    <feGaussianBlur stdDeviation="42" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.243137 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_947_552" />
                    <feGaussianBlur stdDeviation="8" result="effect4_foregroundBlur_947_552" />
                </filter>
                <filter id="filter8_f_947_552" x="-596.345" y="-819.396" width="2993.67" height="2087.05" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_947_552" />
                </filter>
                <filter id="filter9_f_947_552" x="-1010.19" y="-1110.4" width="2993.67" height="2087.05" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_947_552" />
                </filter>
                <filter id="filter10_ddif_947_552" x="301.579" y="-57" width="1994.43" height="855.293" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="13.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_947_552" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="20" dy="20" />
                    <feGaussianBlur stdDeviation="36.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.658333 0 0 0 0 1 0 0 0 0 0.959 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_947_552" result="effect2_dropShadow_947_552" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_947_552" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="37" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.226458 0 0 0 0 0.577784 0 0 0 0 0.990208 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_947_552" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_947_552" />
                </filter>
                <filter id="filter11_ddif_947_552" x="214" y="-178" width="2241" height="1099" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-10" dy="2" />
                    <feGaussianBlur stdDeviation="21.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.51899 0 0 0 0 0.493785 0 0 0 0 0.997882 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_947_552" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="58" dy="22" />
                    <feGaussianBlur stdDeviation="100" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.44 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_947_552" result="effect2_dropShadow_947_552" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_947_552" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="34" dy="4" />
                    <feGaussianBlur stdDeviation="58.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.772033 0 0 0 0 0.0883334 0 0 0 0 0.883333 0 0 0 0.76 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_947_552" />
                    <feGaussianBlur stdDeviation="4.5" result="effect4_foregroundBlur_947_552" />
                </filter>
                <filter id="filter12_f_947_552" x="55.5" y="-250" width="2073.5" height="1195" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_947_552" />
                </filter>
                <linearGradient id="paint0_linear_947_552" x1="1098.5" y1="0" x2="1098.5" y2="1200" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0F072C" />
                    <stop offset="1" stop-color="#092477" />
                </linearGradient>
                <clipPath id="clip0_947_552">
                    <rect width="2197" height="1200" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default MainBg;