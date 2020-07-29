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

export function mouseState(state = {barVisible:false,volumeBarVisible:false,maskVisible:false,settingVisible:false},action){
    switch(action.type){
        case actionType.MOVEOVERVIDEO:{
            return {...state,barVisible:true}
        }
        case actionType.MOVEOUTVIDEO:{
            console.log("mouse out")
            if(state.maskVisible)return {...state,barVisible:true}
            return {...state,barVisible:false}
        }
        case actionType.CLICKONVIDEO:{
            console.log("click on video")
            return {...state,barVisible:true}
        }
        case actionType.CLICKMASK:{
            return {...state,maskVisible:false,settingVisible:false}
        }
        case actionType.HOVERONVOLUME:{
            return {...state,volumeBarVisible:true}
        }
        case actionType.LEAVEVOLUME:{
            return {...state,volumeBarVisible:false}
        }
        case actionType.CLICKSETTING:{
            return {...state,maskVisible:true,settingVisible:!state.settingVisible}
        }
        default:{
            return state
        }
    }
}
export const authState = (state={status:0,userName:null,userID:null},action)=>{
    switch(action.type){
        case actionType.LOGIN:{
            return {status:1,userName:action.content.username,userID:action.content.userid}
        }
        case actionType.LOGOUT:{
            return {status:0,userName:null,userID:null}
        }
        default:{
            return state
        }
    }
}
