import axios from 'axios';
const BASE_URL = 'https://reqres.in/api/'


export const post = (data, url)=>{
    return axios.post(`${BASE_URL}${url}`,data)
      .then(function (response) {
        return {status:'success', data:response, message:'Success'};
      })
      .catch(function (error) {
        return {status:'fail', data:{}, message:error.message};
      });
}

export const update = (data, url)=>{
    return axios.put(`${BASE_URL}${url}`,data)
      .then(function (response) {
        return(response);
      })
      .catch(function (error) {
        return {status:'fail', data:{}, message:error.message};
    
      });
}


export const get = (data, url)=>{
    return axios.get(`${BASE_URL}${url}`)
    .then(function (response) {
        // handle success
        return(response);
      })
      .catch(function (error) {
        return {status:'fail', data:{}, message:error.message};
      })
}