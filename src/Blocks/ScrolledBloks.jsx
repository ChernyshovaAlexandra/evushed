import React, { useEffect, useState } from "react";
import Rays from '../components/Rays'
import Block4 from '../Blocks/Block4'



const ScrolledBlocks = () => {
    const [y, setY] = useState(0)

    const scroll = (e) => {
        const rays = document.getElementsByClassName('rays')[0];
        setY(window.scrollY)
        console.log(window.scrollY, rays.clientHeight)
    }

    useEffect(() => {

        window.addEventListener('scroll', scroll)
    }, [])
    return (

        <section style={{ height: '300vh' }}>
            <div className={`${y > 0 && y < 5000 ? 'fixed' : ''} top-0 left-0 w-full`}>
                <Rays animate={y > 500 && y < 1000} />
                
            </div>
        </section >
    )
}


export default ScrolledBlocks