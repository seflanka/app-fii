import styles from './Remove.module.css'
import api from '../../../utils/api';

import { useState, useEffect } from 'react'

import { useParams  } from 'react-router-dom';

// Componentes
import FiiRemove from '../../form/FiiRemove';

// Hoks inernos 


function Remove() {
    const [ fii, setFii ] = useState({});
    const { id } = useParams();

    

    useEffect(() => {
        api.get(`/cadastro/${id}`)
        .then((response) => {
            setFii(response.data.fii)
        })
    }, [id])

    

    async function Remove(fii) {

    };

    return (
        <section className={styles.cadastro_section}>
            <FiiRemove handleSubmit={Remove}/>
        </section>
    );
}

export default Remove