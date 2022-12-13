import styles from './AnaliseCodigo.module.css'
import imgGrafico from '../../../assets/img/grafico.png'
import imgBack from '../../../assets/img/back.png'

import api from '../../../utils/api'
import { useState }  from 'react'
import { useParams, Link  } from 'react-router-dom';


function Analise(handleSubmit, fiiData) {
    const [ fii, setFii ] = useState(fiiData || {});
    const { codigo } = useParams();
    

    useState(() => {
        api.get(`/dbcentral/${codigo}`)
        .then((response) => {
            setFii(response.data.fii)
        })
    },[fii, codigo]);
    
    
    return (
<section>
    <div className={styles.container_master_analise}>
        <div className={styles.content_title_analise}>
            <img src={imgGrafico} alt="grafico" />
            <h3>{fii.codigo}</h3>
            <Link className={styles.container_master_analise_Link} to={'/analise'}>
                <img src={imgBack} className={styles.container_master_analise_imgBack} alt="Voltar para Analise" />
            </Link>
        </div>
        <div className={styles.content_sub_title_analise}>
            <h3>{fii.administrador}</h3>
        </div>
        <div className={styles.content_indicadores_analise}>
            <div className={styles.content_paragrafos_indicadores_analise}>
                <h2>{fii.dy  || ""}%</h2>
                <p>Dividend Yield</p>
            </div>
            <div className={styles.content_paragrafos_indicadores_analise}>
                <h2>R$ {fii.dividendo}</h2>
                <p>Último Rendimento</p>
            </div>
            <div className={styles.content_paragrafos_indicadores_analise}>
                <h2>R$ {fii.patrimonioLiq}</h2>
                <p>Património Líquido</p>
            </div>
            <div className={styles.content_paragrafos_indicadores_analise}>
                <h2>R$ {fii.cotacaoBase}</h2>
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
                    <td>{fii.dataPagamento}</td>
                    <td>{fii.dy  || ""}%</td>
                    <td>R$ {fii.dividendo}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento1}</td>
                    <td>{fii.dy1  || ""}%</td>
                    <td>R$ {fii.dividendo1}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento2}</td>
                    <td>{fii.dy2  || ""}%</td>
                    <td>R$ {fii.dividendo2}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento3}</td>
                    <td>{fii.dy3  || ""}%</td>
                    <td>R$ {fii.dividendo3}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento4}</td>
                    <td>{fii.dy4  || ""}%</td>
                    <td>R$ {fii.dividendo4}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento5}</td>
                    <td>{fii.dy5  || ""}%</td>
                    <td>R$ {fii.dividendo5}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento6}</td>
                    <td>{fii.dy6  || ""}%</td>
                    <td>R$ {fii.dividendo6}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento7}</td>
                    <td>{fii.dy7  || ""}%</td>
                    <td>R$ {fii.dividendo7}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento8}</td>
                    <td>{fii.dy8  || ""}%</td>
                    <td>R$ {fii.dividendo8}</td>
                </tr>
                <tr>
                    <td>{fii.dataPagamento9}</td>
                    <td>{fii.dy9  || ""}%</td>
                    <td>R$ {fii.dividendo9}</td>
                </tr>
            </table>
        </div> 
    </div>
</section>
    )
}

export default Analise