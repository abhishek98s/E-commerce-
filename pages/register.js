import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Login.module.css'

export default function Register(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function onEmailChange(e){
        setEmail(e.target.value)
    }

    function onPasswordChange(e){
        setPassword(e.target.value)
    }
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <form className={styles.register_box}>
            <h1>Register</h1>
            
            <label htmlFor="name">Full Name</label>
            <input className={styles.registerinput} id="name" />

            <label htmlFor="number">Phone Number</label>
            <input className={styles.registerinput} id="number" />

            <label htmlFor="email">Email</label>
            <input className={styles.registerinput}
                   onChange={onEmailChange} id="email" value={email} />

            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.registerinput} 
                   onChange={onPasswordChange} 
                   id="password" 
                   type='password'
            value={password} />

            

            <input className={styles.input} type='submit' value="Register" />
        </form>
        </>
    )
}