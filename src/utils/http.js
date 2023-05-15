import axios from "axios";
import querystring from 'querystring';

const httpClient = axios.create({
    //网络请求的配置
    timeout:5000
})

//拦截器是最常用的
//1、发送请求前的拦截器
httpClient.interceptors.request.use(
    cnofig => {
        return cnofig   //config包含网络请求所有信息
    },
    error => {
        return Promise.reject(error)
    }
)

//2、获取响应的拦截器
httpClient.interceptors.response.use(
    resp => {
        return resp.status  === 200 ? Promise.resolve(resp) : Promise.reject(resp)
    },
    error => {
        console.log("获取响应失败：")
        console.log("------------")
        console.log(error)
        console.log("------------")
    }
)



export default httpClient;