import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:5000/',
    // baseURL: 'http://ec2-54-208-72-108.compute-1.amazonaws.com:5000/',
})