import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a7c9c.firebaseio.com/'
});

export default instance;