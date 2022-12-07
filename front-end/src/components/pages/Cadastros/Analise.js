import styles from './Analise.module.css'
import imgGrafico from '../../../assets/img/grafico.png'
import imgSearch from '../../../assets/img/search.png'
import db from '../../../utils/db.json'
import { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'

function Analise(fiiData) {
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

    
    return (
<section>
    <div className={styles.container_master_analise}>
        <div className={styles.content_title_analise}>
            <img src={imgGrafico} alt="grafico" />
            <form  className={styles.form_analise} >       
                <div className={styles.content_title_analise_display}>
                    <input
                        className={styles.input_analise}
                        text="Codigo"
                        type="text"
                        name="codigo"
                        autoComplete="off"
                        placeholder="Digite o codigo"
                        onChange={handleFilter}
                        value={codigo}   
                    />
                    <Link to={`/analise/${codigo}`}>
                        <img src={imgSearch} alt="" />
                    </Link>
                {filterSearch.length !== 0 &&
                <div className={styles.searchbar}>
                    {filterSearch.slice(0, 15).map(value => (
                        <div key={value} className={styles.searchbar_item} onClick={() => handleClickAutoComplete(value)}>
                            <Link to={`/analise/${value.fundo}`}>
                                <p>{value.fundo}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                }    
                </div>
            </form>         
        </div>
    </div>
</section>
    )
}

export default Analise