import axios from 'axios';
import config from '../config';
// import router from '../router';

let baseUrl = config.baseUrl.pro
if (process.env.NODE_ENV == 'development') {    
    baseUrl= config.baseUrl.dev;
}
// 创建axios实例
const service = axios.create({
    // 基础的请求地址
    baseURL: baseUrl,
    timeout: 30000 // 请求超时时间                                   
})
// 添加request拦截器 
service.interceptors.request.use(config => {
    // // headers头部加token
    // if (localStorage.getItem('token')) {
    //     config.headers.ACCESS_TOKEN = localStorage.getItem('token');
    // }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})
// 添加respone拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            let res = {};
            res.status = response.status
            res.data = response.data;
            if(res.data.code==1){
                return res;
            }else{
                alert(res.data.msg)
            }
        }else{
            return Promise.reject(response);
        }
    },
    error => {
        // 添加超时后的处理（axios中需要你根据error信息来进行判断）
        const { message } = error;
        if (error.code === 'ECONNABORTED' && message.indexOf('timeout') > -1) {
            // 超时处理，可以直接弹出错误或者重新发起一次请求
            alert("Request timed out! Please check for network problems");
            //  let newHttp= new Promise(function (resolve){
            //      resolve()
            //  })
            //  newHttp实例执行完成后会再次执行
            //  返回一个promise实例，同时重新发起请求，config请求配置，包扩请求头和请求参数
            //  return newHttp.then(function (){
            //      return  axios.create({baseURL: 'https://some-domain.com/api/',timeout: 5000});
            //  })

        }
        // 错误拦截
        console.log(error.response);
        if (error.response.status>=400&& error.response.status<500) {
             alert("User information expired, please log in again");
             // 清除token
             // localStorage.removeItem("token");
             // 跳转登录
             setTimeout(() => {
             //   window.location.href = "/login";
             }, 1000);
         } else {
             if (error.response.status >= 500) {
                 if (error.response.data.message) {
                     alert("The server is out of service. Please try again later! err:"+error.response.data.message);
                 }else{
                     alert("The server is out of service. Please try again later!");
                 }
             } else {
                 alert("The server is out of service. Please try again later!");
                 return Promise.reject(error)
             }
         }

    }
)

export default {
    get:function (url, params = {},config={}) {
        params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
        return service({
            url: url,
            method: 'get',
            headers: {
            },
            params,
            ...config
        })
    },
    post: function (url, data = {},config={}) {
        //默认配置 
        let sendObject = {
            url: url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: data,
            ...config
        };
        sendObject.data = JSON.stringify(data);
        return service(sendObject)
    },
    //封装put方法 (resfulAPI常用)
    put: function (url, data = {}) {
        return service({
            url: url,
            method: 'put',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(data)
        })
    },
    //删除方法(resfulAPI常用)
    deletes: function (url) {
        return service({
            url: url,
            method: 'delete',
            headers: {}
        })
    }
    
}