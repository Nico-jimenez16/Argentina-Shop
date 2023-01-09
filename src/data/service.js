import axios from 'axios';

export async function Login(user){
    return await axios.post(url , user)
}

export async function Register(user){
    return await axios.post(url , user)
}