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

export function mouseState(state = {barVisible:false,volumeBarVisible:false,settingVisible:false},action){
    switch(action.type){
        case actionType.MOVEOVERVIDEO:{
            return {...state,barVisible:true}
        }
        case actionType.MOVEOUTVIDEO:{
            return {...state,barVisible:false}
        }
        case actionType.CLICKONVIDEO:{
            return {...state,barVisible:true,settingVisible:false}
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

