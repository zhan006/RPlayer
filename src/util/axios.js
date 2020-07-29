import axios from 'axios'
axios.interceptors.request.use(req=>{
    let token = localStorage.getItem("token");
    console.log(token)
    req.headers.Authorization = token;
    return req
})
export default axios