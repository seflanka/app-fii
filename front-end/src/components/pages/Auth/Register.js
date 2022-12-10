import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../form/Input'
import '../../form/Form.module.css'
import styles from '../../form/Form.module.css'

// import from context
import { Context } from '../../../context/UserContext'


function Register() {

    const [ user, setUser ] = useState({})
    const { register } = useContext(Context)

    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        // Enviar o usuio para o banco 
        register(user)
    }

    return (
        
        <section className={styles.form_container}>
            <div>
                <h2>Registrar</h2>
                <form onSubmit={handleSubmit}>
                    <Input 
                        text="Nome"
                        type="text"
                        name="userName"
                        placeholder="Digite o seu nome"
                        handleOnChange={handleChange}
                    />
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
                    <input type="submit" value="Cadastrar"/>
                </form>
            </div>
            <h5>Já possui conta? <Link to='/login'>Entrar</Link></h5>
        </section>
    )
}

export default Register