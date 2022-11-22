import styles from './Cadastro.module.css';
import api from '../../../utils/api';
import { useState } from 'react'

import { useNavigate  } from "react-router-dom";

// Componentes
import FiiForm from '../../form/FiiForm';

// Hoks inernos 
import useFlashMessage from '../../../hooks/useFlashMessage'

function Cadastro() {
    const [ token ] = useState(localStorage.getItem('token')  || '' );
    const { setFlashMessage } = useFlashMessage();
    const navigate = useNavigate();


    async function registerFii(fii) {
        let msgType = 'success';

        // Aqui nesta rota return response.data serve para desestruturar o fii no header
        const data = await api
        .post(`/cadastro/${fii.codigo}`,fii, {

            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            msgType = 'error'
            return error.response.data

        });
        

        api.get('/cadastro/getallfii', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            },
        })
        .then((response) => {                
            localStorage.setItem('cadastroFii', JSON.stringify(response.data.cadastroFii))
            localStorage.setItem('totalInvestidoCarteira', JSON.stringify(response.data.totalInvestidoCarteira))
            localStorage.setItem('totalproventos', JSON.stringify(response.data.totalproventos))
        });
    
  

        setFlashMessage(data.message, msgType, );


        if(msgType !== 'error') {
            navigate("/carteira");
            return
        };
    };

    return (
        <section className={styles.cadastro_section}>
            <FiiForm handleSubmit={registerFii}/>
        </section>
    );
};

export default Cadastro