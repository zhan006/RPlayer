import axios from './axios'
import * as url from '../apiUrl'
function request(url,option={method:"get",data:{}}){
    return new Promise((resolve,reject)=>{
        axios({
            method:option.method,
            url,
            data:option.data    
        }).then(response=>{
            if(response && response.status == '200'){
                resolve(response.data)
            }
            else{
                console.log(response.data)
                reject(response.data)
            }
        }).catch(err=>{console.log(err)})
        }        
    )
}

export function login(data){
    return request(url.LOGIN,{method:'post',data})
}
export function getMessage(){
    return request(url.GET_MESSAGE)
}
export default request