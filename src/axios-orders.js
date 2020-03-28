import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-c7e71.firebaseio.com/'
});

export default instance;