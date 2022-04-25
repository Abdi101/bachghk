import axios from 'axios';

const getAll = (url, params) =>{
 return axios.get(`http://localhost:1337/api/${url}/${params}`);
}

const getOne = (url, id) =>{
 return axios.get(`http://localhost:1337/api/${url}/${id}`);
}




export { getAll, getOne };