import axios from 'axios';
const HOST = 'https://localhost:7023';
export  function post(endpoint, request){
    let config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }
      
     return axios.post(`${HOST}/api/${endpoint}`,request,config);

}
export  function get(endpoint, parametersObject){
  let config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      params:parametersObject
    }
    
   return axios.get(`${HOST}/api/${endpoint}`, config);

}