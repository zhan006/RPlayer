import * as actionType from "./actionType"

const initialState = {
    play:false,
}

export function togglePlay(state = initialState,action){
    switch(action.type){
        case actionType.PLAY:{
            return {...state,play : true}
        }
        case actionType.PAUSE:{
            return {...state,play : false}
        }
        default:
            return state;
    }
}
export function volumeControl(state = {old_volume:100,volume:100},action){
    switch(action.type){
        case actionType.TURNUP:{
            if(state.volume ==100){return {volume:100}}
            else{let new_volume = state.volume+1;return {old_volume:state.volume,volume:new_volume}}
        }
        case actionType.TURNDOWN:{
            if(state.volume == 0){return {volume:0}}
            else{let new_volume = state.volume-1;return {old_volume:state.volume,volume:new_volume}}
        }
        case actionType.TURNOFF:{
            return {old_volume:state.volume,volume:0}
        }
        case actionType.TURNON:{
            return {old_volume:state.volume,volume:state.old_volume}
        }
        default:
            return state
    }
}
export function mouseState(state = {barVisible:false,volumeBarVisible:false},action){
    switch(action.type){
        case actionType.MOVEOVERVIDEO:{
            return {...state,barVisible:true}
        }
        case actionType.MOVEOUTVIDEO:{
            return {...state,barVisible:false}
        }
        case actionType.CLICKONVIDEO:{
            return {...state,barVisible:true}
        }
        case actionType.HOVERONVOLUME:{
            return {...state,volumeBarVisible:true}
        }
        case actionType.LEAVEVOLUME:{
            return {...state,volumeBarVisible:false}
        }
        default:{
            return state
        }
    }
}

