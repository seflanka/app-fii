import styles from './Analise.module.css'
import imgGrafico from '../../../assets/img/grafico.png'

import api from '../../../utils/api'
import { useState, useEffect }  from 'react'


function Analise() {
    const [ token ] = useState(localStorage.getItem('token') || '');
    const [ cadastroFii, setCadastroFii ] = useState({});
    const codigo = 'teste'
    useEffect(() => {

        api.get(`/dbceltral/${codigo}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            },
        })
        .then((response) => {
            setCadastroFii(response.data.cadastroFii);
        })
        .catch((error) => {
            return error.data;
        });

    },[token])

    
    return (
<section>
    <div className={styles.container_master_analise}>
        <div className={styles.content_title_analise}>
            <img src={imgGrafico} alt="grafico" />
            <div className={styles.content_title_analise_display}>
                <h2>Selecione o Fundo</h2>
                <h1>RBRM11</h1>
            </div>
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