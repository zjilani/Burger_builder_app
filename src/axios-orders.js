import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-592e4.firebaseio.com/'
});

export default instance;