import styles from './FiiRemove.module.css'
import imgLixeira from '../../assets/img/lixeira.png'

import InputCadastro from './InputCadastro'

import api from '../../utils/api';

import { useState } from 'react'

import { useParams,  } from 'react-router-dom';

// Hoks inernos 
import useFlashMessage from '../../hooks/useFlashMessage';


function FiiRemove({handleSubmit, fiiData}) {
    const [ fii, setFii ] = useState(fiiData || {});
    const { setFlashMessage } = useFlashMessage();
    const { id } = useParams();
    const [ token ] = useState(localStorage.getItem('token')  || '' );
    // const navigate = useNavigate();

    useState(() => {
        api.get(`/cadastro/${id}`)
        .then((response) => {
            setFii(response.data.fii)
        })
    }, [id]);
    

    function handleChange(e) {
        setFii({...fii, [e.target.name]: e.target.value });
    };


    function submit(e) {
        e.preventDefault();
        handleSubmit(fii);
        setFii(fii.value = '')
    };


    async function removeFii(id) {
        let msgType = 'success';

        const data = await api.delete(`/cadastro/${id}`,{
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            msgType = 'error';
            return err.reponse.data;
        });

        setFlashMessage(data.message, msgType);


        api.get('/cadastro/getallfii', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            },
        })
        .then((response) => {
            localStorage.setItem('cadastroFii', JSON.stringify(response.data.cadastroFii))
            localStorage.setItem('totalInvestidoCarteira', JSON.stringify(response.data.totalInvestidoCarteira))
            localStorage.setItem('totalproventos', JSON.stringify(response.data.totalproventos))
        })
        
    }

    return (
    <form onSubmit={submit} className={styles.form_fii_container}>
        <InputCadastro
            text="Codigo"
            type="Text"
            name="codigo"
            placeholder="Digite o codigo"
            handleOnChange={handleChange}      
            value={fii.codigo || ''}
        />
        <InputCadastro
            text="Quantidade"
            type="number"
            name="quantidade"
            placeholder="Digite a quantidade"
            handleOnChange={handleChange}
            value={fii.quantidade || ''}
        />
        <button onClick={() => {
            removeFii(fii._id)
        }}>
            <img className={styles.form_fii_button_lixeira} src={imgLixeira} alt="lixeira" />
        </button>       
        <input type="submit"  className={styles.form_fii_container_submit} value="Atualizar" />
    </form>
    )
}

export default FiiRemove