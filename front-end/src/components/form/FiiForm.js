import styles from './FiiForm.module.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputCadastro from './InputCadastro'


function FiiForm({handleSubmit, fiiData}) {
    const [ fii, setFii ] = useState(fiiData || {});
    const [ user ] = useState(localStorage.getItem('userId')  || '' );

    
    function handleChange(e) {
        setFii({...fii, user, [e.target.name]: e.target.value });
    };


    function submit(e) {
        e.preventDefault()
        handleSubmit(fii)
        setFii(fii.value = '',);
    };

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
        <input type="submit"  className={styles.form_fii_container_submit} value="Cadastrar" />
    </form>
    )
}

export default FiiForm