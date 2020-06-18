import {PLAY,PAUSE,MOVEOUTVIDEO,MOVEOVERVIDEO,CLICKONVIDEO} from './actionType'

export const play = content =>(
    {
        type: PLAY
    }
)

export const pause = content =>({
    type:PAUSE
})

export const moveoutvideo = content =>({
    type:MOVEOUTVIDEO
})
export const moveovervideo = content =>({
    type:MOVEOVERVIDEO
})
export const clickonvideo = content =>({
    type:CLICKONVIDEO
})