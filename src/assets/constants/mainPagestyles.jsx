
export const divAnimation = {
    hidden: {
        opacity: 0,
        transition: {
            delay: '.1',
            duration: '.6'
        }
    },
    visible: {
        opacity: 1,
        transition: {
            delay: '.1',
            duration: '.6'
        }
    }
}
export const hideHeader = {
    visible: {
        transform: 'translateY(0%)',
        transition: { duration: .2 }
    },
    hidden: {
        transform: 'translateY(100%)',
        transition: { duration: .2 }
    }
}
export const hideHeaderSec = {
    visible: {
        transform: 'translateY(0%)',
        transition: { duration: .2, delay: .1 }
    },
    hidden: {
        transform: 'translateY(100%)',
        transition: { duration: .2, delay: .1 }
    }
}
export const rays = {
    visible: {
        transform: 'scale(1)',
        transition: { duration: .8, delay: .1 }
    },
    hidden: {
        transform: 'scale(3)',
        transition: { duration: .8, delay: .1 }
    }
}
export const imageAnimation = {
    hidden: {
        transform: 'translateX(0%)',
        clipPath: 'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)',
        transition: {
            transform: {
                duration: .41,
                delay: 1.5
            },
            opacity: {
                duration: .5,
                delay: 2
            },
            clipPath: { delay: 2, duraion: .4 }
        }
    },
    visible: {
        transformOrigin: 'center',
        transform: 'translateX(35%)',
        clipPath: 'polygon(37% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 15% 50%)',
        transition: {
            transform: {
                duration: .41,
                delay: 1.5,
            },
            opacity: {
                duration: .5,
                delay: 2.5
            },
            clipPath: { delay: 2, duraion: .4 }
        }
    }
}
export const imageInnerAnimation = {
    hidden: {
        opacity: 1,
        transition: { delay: 1.3 }
    },
    visible: {
        opacity: 0.5,
        transition: { delay: 1.3 }
    }
}
export const pinkSpanContainer = {
    hidden: {
        animation: '',
        duration: 2.3,
    },
    visible: {
        animation: 'b 0.7s infinite steps(1) both, t calc(220 * 0.015s) steps(220) both',
        transition: {

            when: "beforeChildren",
        }
    }
}
export const pinkSpan = {
    visible: {
        // color: '#F11952',
        transition: {
            color: { delay: 3.3, }
        }
    },
    hidden: {
        color: ""
    }
}