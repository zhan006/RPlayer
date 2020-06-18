import {PLAY,PAUSE,MOVEOVERVIDEO,MOVEOUTVIDEO,CLICKONVIDEO} from "./actionType"

const initialState = {
    play:false,
}

export function togglePlay(state = initialState,action){
    switch(action.type){
        case PLAY:{
            return {...state,play : true}
        }
        case PAUSE:{
            return {...state,play : false}
        }
        default:
            return state;
    }
}

export function mouseState(state = {barVisible:true},action){
    switch(action.type){
        case MOVEOVERVIDEO:{
            return {barVisible:true}
        }
        case MOVEOUTVIDEO:{
            return {barVisible:false}
        }
        case CLICKONVIDEO:{
            return {barVisible:true}
        }
        default:{
            return state
        }
    }
}

