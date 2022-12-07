//import imgGrafico from '../../../assets/img/grafico.ico';
import imgCarteira from '../../../assets/img/carteira.ico';
import imgEditar from '../../../assets/img/editar.png'
import { Link } from 'react-router-dom'
import styles from './Carteira.module.css'
// import api from '../../../utils/api'
import { useState }  from 'react'

function Carteira() {
    // const [ token ] = useState(localStorage.getItem('token') || '' );
    const [cadastroFii, setCadastroFii]  = useState({}) || '';
    const [ totalInvestidoCarteira, setTotalInvestidoCarteira ] = useState() || '';

    useState(() => {
        const cadastroFii = JSON.parse(localStorage.getItem('cadastroFii'));
        const totalInvestidoCarteira = JSON.parse(localStorage.getItem('totalInvestidoCarteira'))
        if(cadastroFii) {
            setCadastroFii(cadastroFii)
        }
        if(totalInvestidoCarteira) {
            setTotalInvestidoCarteira(totalInvestidoCarteira)
        }
    }, [cadastroFii, totalInvestidoCarteira]); 
    
    return (
        <section>
            <div className={styles.responsive_container_title_master}>
                <div className={styles.content_title_master_carteira}>
                    <div className={styles.title_master}>
                        <img src={imgCarteira} alt="Total-Aplicado" />
                            <div className={styles.title_master_p}>
                                <h1>Total Aplicado</h1>
                                <p  >R$ {totalInvestidoCarteira}</p>
                            </div>
                    </div>
                </div>
            </div>            
        <div className={styles.container_master_carteira}>
            <div className={styles.content_itens}>
                {cadastroFii.length > 0  && 
                cadastroFii.map((fii) => (
                    <div className={styles.content_iten}>
                        <div className={styles.display_block}>
                        <div className={styles.iten}>
                            <p className={styles.contents_title}>Fundo</p>
                            <p className={styles.contents_iten} key={fii.codigo} >{fii.codigo}</p>
                        </div>
                        </div>
                        <div className={styles.display_block}>
                        <div className={styles.iten}>
                            <p className={styles.contents_title}>Cotas</p>
                            <p className={styles.contents_iten} key={fii.quantidade} >{fii.quantidade}</p>
                        </div>
                        </div>
                        <div className={styles.display_block}>
                        <div className={styles.iten}>
                            <p className={styles.contents_title}>VL.Aplicado</p>
                            <p className={styles.contents_iten} key={fii.totalInvestido} >R$ {fii.totalInvestido}</p>
                        </div>
                        </div>
                        <div className={styles.display_block}>
                        <div className={styles.iten}>
                            <p className={styles.contents_title}>P.Atual</p>
                            <p className={styles.contents_iten} key={fii.cotacaoBase} >R$ {fii.cotacaoBase}</p>
                        </div>
                        </div>
                        <div className={styles.iten}>
                            <Link to={`/remove/${fii._id}`}>
                                <img src={imgEditar} alt="Editar" />
                            </Link>
                        </div>
                    </div>
                    ))  
                }

            </div>
        </div>
        </section>
    )
}

export default Carteira