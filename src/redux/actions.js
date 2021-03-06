import * as actionType from './actionType'

export const play = content =>(
    {
        type: actionType.PLAY
    }
)

export const pause = content =>({
    type:actionType.PAUSE
})

export const moveoutvideo = content =>({
    type:actionType.MOVEOUTVIDEO
})
export const moveovervideo = content =>({
    type:actionType.MOVEOVERVIDEO
})
export const clickonvideo = content =>({
    type:actionType.CLICKONVIDEO
})
export const turndown_volume = content =>({
    type:actionType.TURNDOWN
})
export const turnon_volume = content =>({
    type:actionType.TURNON
})
export const turnup_volume = content =>({
    type:actionType.TURNUP
})
export const turnoff_volume = content =>({
    type:actionType.TURNOFF
})
export const hoveron_volume = content =>({
    type:actionType.HOVERONVOLUME
})
export const leave_volume = content =>({
    type:actionType.LEAVEVOLUME
})
export const click_setting = ()=>({
    type:actionType.CLICKSETTING
})
export const click_mask =()=>({
    type:actionType.CLICKMASK
})
