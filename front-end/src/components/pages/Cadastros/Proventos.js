import styles from  './Proventos.module.css';
import imgProventos from '../../../assets/img/proventos.png';

// import api from '../../../utils/api'
import { useState }  from 'react'

function Proventos() {
    // const [ token ] = useState(localStorage.getItem('token') || '');
    const [cadastroFii, setCadastroFii]  = useState({});
    const [ totalproventos, setTotalproventos ] = useState();

    useState(() => {
        const cadastroFii = JSON.parse(localStorage.getItem('cadastroFii'));
        const totalproventos = JSON.parse(localStorage.getItem('totalproventos'));
        if(cadastroFii) {
            setCadastroFii(cadastroFii)
        }
        if(totalproventos) {
            setTotalproventos(totalproventos)
        }
    }, [totalproventos, cadastroFii]);

    return (
    <section>
        <div className={styles.container_proventos_master}>
            <div className={styles.container_proventos_content}>
                <div className={styles.content_proventos_display}>
                    <img src={imgProventos} alt="imagem proventos" />
                    <div className={styles.content_itens_title}>
                        <p className={styles.p_proventos_title}>Agenda dividendos do mês</p>
                        <p className={styles.p_proventos_recebido} key={totalproventos}>R$ {totalproventos}</p>
                    </div>
                </div>
                <div className={styles.content_itens_fundos}>
                {cadastroFii.length > 0 && 
                    cadastroFii.map((fii) => ( 
                    <div className={styles.iten_fundo}>
                        <p className={styles.iten_fundo_p_codigo}>{fii.codigo}</p>
                        <p className={styles.iten_fundo_p_preco}>R$ {fii.totalReceber}</p>
                        <p className={styles.iten_fundo_p_data}>{fii.dataPagamento}</p>
                        <p className={styles.iten_fundo_p_dias}>{fii.diasParaReceber}</p>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    </section>
    )
}

export default Proventos