import Input from '../../form/Input'
import '../../form/Form.module.css'
import styles from '../../form/Form.module.css'

import { Link } from 'react-router-dom'


import { useState, useContext } from 'react'
import { Context } from '../../../context/UserContext'

function Login() {
    const [ user, setUser ] = useState({})
    const { login } = useContext(Context)

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    function handleSubmit(e) {
        e.preventDefault()
        login(user)
    }

    return (
        <section className={styles.form_container}>
            <div>
                <form onSubmit={handleSubmit} className="form-register">
                <h2>Login</h2>
                    <Input 
                        text="Email"
                        type="email"
                        name="email"
                        placeholder="Digite o seu e-mail"
                        handleOnChange={handleChange}
                    />
                    <Input 
                        text="Password"
                        type="password"
                        name="password"
                        placeholder="Digite a senha"
                        handleOnChange={handleChange}
                    />
                    <input type="submit" value="Entrar"/>
                </form>

            </div>
            <br />
            <h5>Não possui conta? <Link to='/register'>Registrar</Link></h5>
        </section>
    )
}

export default Login