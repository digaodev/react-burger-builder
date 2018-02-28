import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-a6b5c.firebaseio.com/'
});

export default instance;