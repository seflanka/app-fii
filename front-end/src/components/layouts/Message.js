import styles from './Message.module.css';
import bus from '../../utils/bus';
import { useState, useEffect } from 'react';

function Message() {
    const [ visibility, setVisibility ] = useState(false);
    const [ type, setType] = useState('');
    const [ message, setMessage] = useState('');

    useEffect(() => {
        
        bus.addListener('flash', ({ message, type }) => {

            setVisibility(true);
            setMessage(message);
            setType(type);

            setTimeout(() => {
                setVisibility(false);
            }, 1000);
        });
    }, []);

    return (
        visibility && (
            <div className={styles.message_background}>
            <div className={`${styles.message} ${styles[type]}`}><h4>{message}</h4></div>
            </div>
        )
    )
}

export default Message 