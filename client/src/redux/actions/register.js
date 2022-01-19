import axios from 'axios'

export const register= async (user)=> await axios.post("http://localhost:5050/api/register" ,user)