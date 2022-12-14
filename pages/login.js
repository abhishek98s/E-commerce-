import { useEffect, useState } from 'react';
import axios from 'axios'
const json = require('../public/db.json')
import Link from 'next/link'
import styles from '../styles/Login.module.css'

function Login(){
    const [data, setData] = useState([
        {
            "id": 1,
            "email": "abhishek@gmail.com",
            "password" : "abhishek123"
        },
        
        {
            "id": 2,
            "email": "jhon@gmail.com",
            "password" : "jhon123"   
        }
        ])  
    
    useEffect(()=>{
        // axios
        // .get("https://app.fakejson.com/q/A9pVo0Pp?token=jDPRaJetqhMzm7Icq7-_fg")
        // .then(data => setData(data.data.data))
        // .catch(error => console.log(error));
    }, []);

    // console.log(data)
        
    
    const[email, setEmail] = useState("")
    const [error, setError] =useState(null)

    const[pass, setPass] = useState("")
    const[perror, setPerror] = useState(null)

    
    function isValidEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPass(pass){
        return /(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[a-zA-Z]).{5,}$/.test(pass);
    }

    const handleEmailChange=(e)=>{

        if(email==12){
            setError(null)
        }

        if(!isValidEmail(e.target.value)){
            setError("Email is invalid");
            e.target.style.outline = "1px solid red";
        }else{
            setError(null);
            e.target.style.outline = "none";
        }

        setEmail(e.target.value);
    }

    const handlePassChange=(e)=>{

        if(!isValidPass(e.target.value)){
            setPerror("Password must be 5 character long and must contain alphabets and number");
            e.target.style.outline = "1px solid red";
        }else{
            setPerror(null);
            e.target.style.outline = "none";
        }

        setPass(e.target.value);
    }
    

    const submit = (e) =>{
        // console.log(data[0].email)
        console.log("email")
        e.preventDefault()

        if(email !== "" && pass !== ""){
            for (let i=0; i < data.length; i++){
                console.log(data[i].email)
                console.log(email)
                console.log(data[i].password)
                
                if(data[i].email === email && data[i].password === pass){
                    alert("Loged in")
                    setError(null)
                    setPerror(null)
                    break;
                }
                
                if(data[i].email !== email && data[i].password !== pass){
                    setError("Email is incorrect")
                    setPerror("Password is incorrect")
                    console.log("y")
                }
            }
        }else{
            setError("fill the box")
            setPerror("Fill the passowrd")
        }   
        
    }

    const loginClick=(e)=>{
        e.target.style.backgroundImage= "red";
    }
    return(
        <>  
            <br/>
            <br/>
        <br/>
            <br/>
            <form className={styles.login_box} onSubmit={submit}>
                <h1>Login</h1>

                <label htmlFor="email">Email</label>
                <input className={styles.input} id="email" value={email} 
                onChange={handleEmailChange}></input>
                <p className={styles.error}>{error}</p>

                <label className={styles.label} htmlFor="password">Password</label>
                <input className={styles.input} id="password" type='password'
                value={pass}
                onChange={handlePassChange} />
                <p className={styles.error}>{perror}</p>
                

                <input className={styles.input} onClick={loginClick} type='submit' value="Login" />
                <p>Don't have a account? <Link href='./register' legacyBehavior><a className={styles.register}>Register here</a></Link></p>
                

            </form>
        </>
    )
}

export default Login;