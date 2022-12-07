import styles from './Analise.module.css'
import imgGrafico from '../../../assets/img/grafico.png'
import imgSearch from '../../../assets/img/search.png'
import db from '../../../utils/db.json'
import api from '../../../utils/api'
import { useState, useEffect }  from 'react'


function Analise(handleSubmit, fiiData) {
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



    const [ cadastroFii, setCadastroFii ] = useState({});
    
    useEffect(() => {
        const codigo = 'ANCR11'
        api.get(`/dbceltral/${codigo}`,)
        .then((response) => {
            setCadastroFii(response.data.cadastroFii);
        })
        .catch((error) => {
            return error.data;
        },[codigo]);

    })
    
        function submit(e) {
            e.preventDefault();
            handleSubmit(cadastroFii);
            setCadastroFii(cadastroFii.value = '');
      
        };

    


    
    return (
<section>
    <div className={styles.container_master_analise}>
        <div className={styles.content_title_analise}>
            <img src={imgGrafico} alt="grafico" />
            <form onSubmit={submit} className={styles.form_analise} >       
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
                    <button type="submit" >
                        <img src={imgSearch} alt="" />
                    </button>
                {filterSearch.length !== 0 &&
                <div className={styles.searchbar}>
                    {filterSearch.slice(0, 15).map(value => (
                        <div key={value} className={styles.searchbar_item} onClick={() => handleClickAutoComplete(value)}>
                            <p>{value.fundo}</p>
                        </div>
                    ))}
                </div>
                }    
                </div>
            </form>         
        </div>
        <div className={styles.content_sub_title_analise}>
            <h3>RBR Desenvolvimento</h3>
        </div>
        <div className={styles.content_indicadores_analise}>
            <div className={styles.content_paragrafos_indicadores_analise}>
                <h2>1,30%</h2>
                <p>Dividend Yield</p>
            </div>
            <div className={styles.content_paragrafos_indicadores_analise}>
                <h2>R$ 224,54</h2>
                <p>Último Rendimento</p>
            </div>
            <div className={styles.content_paragrafos_indicadores_analise}>
                <h2>R$ 27,59 M</h2>
                <p>Património Líquido</p>
            </div>
            <div className={styles.content_paragrafos_indicadores_analise}>
                <h2>R$ 2.224,54</h2>
                <p>Valor Patrimonial p/Cota</p>
            </div>
        </div>
        <div className={styles.content_table_display}>
            <h1>Últimos dividendos do RBRM11</h1>
            <table>
                <tr>
                    <th>Data base</th>
                    <th>Dy</th>
                    <th>Dividendo</th>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
                <tr>
                    <td>19/09/2022</td>
                    <td>1.39%</td>
                    <td>R$ 259,00</td>
                </tr>
            </table>
        </div> 
    </div>
</section>
    )
}

export default Analise