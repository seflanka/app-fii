import api from '../utils/api'

import  useFlashMessage  from './useFlashMessage'
import { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'




export default function useAuth() {
    const [ authenticated, setAuthenticated ] = useState(false)
    const { setFlashMessage } = useFlashMessage()
    const navigate = useNavigate()

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])

    async function authUser(data) {

        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('cadastroFii', JSON.stringify(data.cadastroFii))
        localStorage.setItem('totalInvestidoCarteira', JSON.stringify(data.totalInvestidoCarteira))
        localStorage.setItem('totalproventos', JSON.stringify(data.totalproventos))
        localStorage.setItem('userId', JSON.stringify(data.userId))

        navigate('/')
    }


    async function register(user) {
        
        let msgText = 'Cadastro realizado com sucesso!'
        let msgType = 'success'

        try {
            const data = await api.post('/user/register', user).then((response) => {
                return response.data
            }) 

            await authUser(data) // pega o token salva no localstorage e volta

        } catch (error) {
            // tratar o errro
            msgText = error.response.data.message
            msgType = 'error'
        }

        setFlashMessage(msgText, msgType)
    }

    function logout() {

        const msgText = 'Logout realizado com sucesso!';
        const msgType = 'success';

        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('cadastroFii');
        localStorage.removeItem('totalInvestidoCarteira');
        localStorage.removeItem('totalproventos');
        localStorage.removeItem('userId');
        api.defaults.headers.Authorization = undefined;

        navigate('/');

        setFlashMessage(msgText, msgType);
    };

    async function login(user, data) {

        let msgText = 'Login realizado com sucesso!';
        let msgType = 'success';

        try {

            const data = await api.post('user/login', user)
            .then((response) => {
                return response.data;
            });
            
            await authUser(data);

        } catch (error) {
            
            msgText = error.response.data.message;
            msgType = 'error';
        };

        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true);
        };

        setFlashMessage(msgText, msgType);
    };
    

    return { register, authenticated, logout, login };
};