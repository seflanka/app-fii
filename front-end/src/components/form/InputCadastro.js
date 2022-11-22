import styles from './InputCadastro.module.css'


function InputCadastro({
    type,
    text,
    name,
    placeholder,
    handleOnChange,
    value,
}) {
    return (
        <div className={styles.InputCadastro}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}

export default InputCadastro