import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import { Context } from '../../context/UserContext'
import { useContext } from 'react'

import logomarca from '../../assets/img/logomarca.png'
import carteira from '../../assets/img/carteira.ico'
import proventos from '../../assets/img/proventos.ico'
import grafico from '../../assets/img/grafico.ico'
import usuario from '../../assets/img/usuario.ico'
import imgLogout from '../../assets/img/imgLogout.png'
import imgLogin from '../../assets/img/imgLogin.png'

function Footer() {
    // logout vai ao lado do contexto de authentiated
    const { authenticated, logout } = useContext(Context)

    return (
        <nav>
            <div>
                {authenticated ? (
                <>
                    <div className={styles.navbar_logado}>
                        <li>                       
                            <Link to='/carteira'><img src={carteira} alt="carteira"/>Carteira</Link>
                        </li>
                        <li>
                            <Link to='/proventos'><img src={proventos} alt="proventos"/> Proventos</Link>
                        </li>
                        <li className={styles.botao_cadastro_content}>                            
                            <Link to='/cadastro'><h1 className={styles.botao_cadastro}>+</h1></Link>
                        </li>
                        <li>
                            <Link rel="stylesheet" type="text/css" href={grafico} to='/analise'><img src={grafico} alt="grafico"/>Analise</Link>
                        </li>
                        <li>
                            <Link rel="stylesheet" type="text/css" href={usuario} to='/profile'><img src={usuario} alt="grafico"/>Profile</Link>
                        </li>
                    </div> 
                    <div className={styles.navbar_content}>
                        <img  className={styles.navbar_logomarca} src={logomarca} alt="logomarca" />
                        <div className={styles.navbar_logs}>
                        </div>
                        <p className={styles.navbar_p} onClick={logout}><img className={styles.navbar_menu_img_logout_login} src={imgLogout} alt="img"/>Sair</p>                       
                    </div>
                </>
                ) : (
                <>
                    <div className={styles.navbar_content}>
                        <img  className={styles.navbar_logomarca} src={logomarca} alt="logomarca" />
                        <div className={styles.navbar_logs}>
                            <Link className={styles.navbar_logs_link} to='/login'><img className={styles.navbar_menu_img_logout_login} src={imgLogin} alt="img" />Login</Link> 
                        </div>

                    </div>
                </>
                )}
            </div>
        </nav>
    )
}

export default Footer