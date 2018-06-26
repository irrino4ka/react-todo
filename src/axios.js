import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-list-9adca.firebaseio.com'
})

instance.defaults.headers.common['Authorization'] = 'Auth Token';
// instance.defaults.crossDomain = true;

export default instance;