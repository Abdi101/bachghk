import axios from 'axios';

const getAll = (url, params) =>{
 return axios.get(`http://localhost:1337/api/${url}/?sort=publishedAt:desc`);
}

const getOne = (url, id) =>{
 return axios.get(`http://localhost:1337/api/${url}/${id}`);
}




export { getAll, getOne };