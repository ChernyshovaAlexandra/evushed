import React from "react";

const BgWithPolygon = () => {
    return (
        <svg className="relative w-full" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1440" height="1000" fill="url(#paint0_linear_854_5942)" />
            <g opacity="0.5" filter="url(#filter0_f_854_5942)">
                <path d="M352 837.859L-100 684V1200H352V837.859Z" fill="#2EB7F2" />
            </g>
            <g filter="url(#filter1_f_854_5942)">
                <path d="M660 500L-39.75 638.564L-39.75 361.436L660 500Z" fill="#0C32A5" />
            </g>
            <g filter="url(#filter2_f_854_5942)">
                <path d="M1852.45 480C1859.6 492.376 1859.6 507.624 1852.45 520L1574.55 1001.35C1567.4 1013.72 1554.2 1021.35 1539.91 1021.35L984.094 1021.35C969.803 1021.35 956.598 1013.72 949.453 1001.35L671.547 520C664.402 507.624 664.402 492.376 671.547 480L949.453 -1.34733C956.598 -13.7234 969.803 -21.3473 984.094 -21.3473L1539.91 -21.3473C1554.2 -21.3473 1567.4 -13.7233 1574.55 -1.3473L1852.45 480Z" fill="#0C32A5" />
            </g>
            <defs>
                <filter id="filter0_f_854_5942" x="-350" y="434" width="952" height="1016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_854_5942" />
                </filter>
                <filter id="filter1_f_854_5942" x="-119.75" y="281.436" width="859.75" height="437.128" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_854_5942" />
                </filter>
                <filter id="filter2_f_854_5942" x="586.188" y="-101.347" width="1351.62" height="1202.69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_854_5942" />
                </filter>
                <linearGradient id="paint0_linear_854_5942" x1="720" y1="0" x2="720" y2="1000" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0F072C" />
                    <stop offset="1" stopColor="#092477" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default BgWithPolygon;