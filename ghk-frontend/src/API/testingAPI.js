import axios from 'axios';

const getAll = (url, params) => {
    return axios.get(`http://localhost:1337/api/${url}/${params}`);
}

const getOne = (url, id) => {
    return axios.get(`http://localhost:1337/api/${url}/${id}?populate=*`);
}

const getSlugged = (url, slug) => {
    console.log(`http://localhost:1337/api/${url}?filters\[Slug\][$eq]=${slug}`);
    return axios.get(`http://localhost:1337/api/${url}?filters\[Slug\][$eq]=${slug}`);
}


export {
    getAll,
    getOne,
    getSlugged
};