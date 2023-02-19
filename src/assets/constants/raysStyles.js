export const mainRect = {
    blue: { fill: '#051647', transition: { delay: .2 } },
    white: { fill: '#B8A6FC', transition: { delay: .2 } }
}
export const bgProps = {
    blue: animate => ({ fill: animate ? 'url(#rect-main)' : 'url(#rect-main_blue-gradient)', transition: { delay: .2 } }),
    white: animate => ({ fill: animate ? 'url(#rect-main)' : 'url(#rect-main_blue-gradient)', transition: { delay: .2 } })
}
export const st8 = {
    white: animate => ({
        filter: animate ? 'url(#vertical-left-line)' : 'url(#vertical-left-line_blue)', transition: { delay: .2 }
    }),
    blue: animate => ({
        filter: animate ? 'url(#vertical-left-line)' : 'url(#vertical-left-line_blue)', transition: { delay: .2 }
    })
}

export const bgPathProps = {
    blue: animate => ({
        fill: animate ? 'white' : '#051647', transition: { delay: .2 }
    }),
    white: animate => ({
        fill: animate ? 'white' : '#051647', transition: { delay: .2 }
    })
}
export const bgPath2Props = {
    blue: animate => ({
        stroke: animate ? '#443EFF' : '#0C32A5', transition: { delay: .2 }
    }),
    white: animate => ({
        stroke: animate ? '#443EFF' : '#0C32A5', transition: { delay: .2 }
    }),
}
export const st = {
    blue: animate => ({
        fill: animate ? 'white' : '#0C32A5', stroke: animate ? '#8B17B4' : '#0C32A5', strokeWidth: animate ? '' : 4, transition: { delay: .2 }
    }),
    white: animate => ({
        fill: animate ? 'white' : '#0C32A5', stroke: animate ? '#8B17B4' : '#0C32A5', strokeWidth: animate ? '' : 4, transition: { delay: .2 }
    }),
}

export const st2 = {
    blue: animate => ({ filter: animate ? 'url(#horizintal-top-line)' : 'url(#filter4_ddif_854_5361)', transition: { delay: .2 } }),
    white: animate => ({ filter: animate ? 'url(#horizintal-top-line)' : 'url(#filter4_ddif_854_5361)', transition: { delay: .2 } })
}
export const st3 = {
    blue: animate => ({ fill: animate ? 'url(#horizintal-top-line_2)' : '#051647', transition: { delay: .2 } }),
    white: animate => ({ fill: animate ? 'url(#horizintal-top-line_2)' : '#051647', transition: { delay: .2 } }),
}
export const st4 = {
    blue: animate=>({ stroke: animate ? 'url(#horizintal-top-line_bg_shadow)' : '#0C32A5', strokeWidth: animate ? 2 : 4, transition: { delay: .2 } }),
    white: animate=>({ stroke: animate ? 'url(#horizintal-top-line_bg_shadow)' : '#0C32A5', strokeWidth: animate ? 2 : 4, transition: { delay: .2 } }),
}
export const st5 = {
    blue: animate => ({ filter: animate ? 'url(#horizintal-top-line-shadow)' : 'url(#filter3_f_854_5361)', transition: { delay: .2 } }),
    white: animate => ({ filter: animate ? 'url(#horizintal-top-line-shadow)' : 'url(#filter3_f_854_5361)', transition: { delay: .2 } }),
}
export const st6 = {
    blue: animate => ({ filter: animate ? 'url(#vertical-left-polygon)' : 'url(#filter1_ddif_854_5361)', transition: { delay: .2 } }),
    white: animate => ({ filter: animate ? 'url(#vertical-left-polygon)' : 'url(#filter1_ddif_854_5361)', transition: { delay: .2 } }),
}
export const st7 = {
    blue: animate => ({ filter: animate ? 'url(#vertical-left-polygon_round)' : 'url(#filter2_f_854_5361)', transition: { delay: .2 } }),
    white: animate => ({ filter: animate ? 'url(#vertical-left-polygon_round)' : 'url(#filter2_f_854_5361)', transition: { delay: .2 } }),
}