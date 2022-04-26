import axios from 'axios';

const getAll = (url, params) =>{
 return axios.get(`http://localhost:1337/api/${url}/?populate=*&sort=publishedAt:desc`);
}

const getOne = (url, id) =>{
 return axios.get(`http://localhost:1337/api/${url}/${id}?populate=*`);}




export { getAll, getOne };