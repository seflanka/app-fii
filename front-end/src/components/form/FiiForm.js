import styles from './FiiForm.module.css'
import { useState, useEffect } from 'react'
import InputCadastro from './InputCadastro'
import db from '../../utils/db.json'

function FiiForm({handleSubmit, fiiData}) {
    const [ fii, setFii ] = useState(fiiData || {});
    const [ user ] = useState(localStorage.getItem('userId')  || '' );

    const [codigo, setCodigo] = useState("")
    const [filterSearch, setFilterSearch] = useState([])

    const handleFilter = (event) => {
        setCodigo(event.target.value)

        const newFilter = db.filter(value => {
            return value.fundo.toLowerCase().includes(codigo.toLowerCase())
        })

        setFilterSearch(newFilter)

    }

    useEffect(() => {

        if (codigo === "") {
            setFilterSearch([])
        }

    }, [codigo])

    function handleClickAutoComplete(value) {
        setCodigo(value.fundo)
        setFilterSearch([])
    }

    function handleChange(e) {
        setFii({...fii, user, codigo, [e.target.name]: e.target.value });
    };


    function submit(e) {
        e.preventDefault();
        handleSubmit(fii);
        setFii(fii.value = '');
        setCodigo("");
    };
    
    return (
    <form onSubmit={submit} className={styles.form_fii_container}>
        <label className={styles.label_input_codigo} htmlFor="">Codigo:</label>
        <input
            className={styles.input_upercase}
            text="Codigo"
            type="text"
            name="codigo"
            autoComplete="off"
            placeholder="Digite o codigo"
            onChange={handleFilter}
            value={codigo}   
        />
        {filterSearch.length !== 0 &&
            <div className={styles.searchbar}>
                {filterSearch.slice(0, 15).map(value => (
                    <div key={value} className={styles.searchbar_item} onClick={() => handleClickAutoComplete(value)}>
                        <p>{value.fundo}</p>
                    </div>
                ))}
            </div>
        }        
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