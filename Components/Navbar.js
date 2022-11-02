import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { useState } from 'react';
import cn from 'classnames'

export default function Navbar(){
    const [toggle, setToggle] = useState(false)

    function onToggle(){
        setToggle(!toggle);
    }
    return(
        <>
        <div className={styles.navbar}>
            <Link href="/"><h1>ACEHOP</h1></Link>

            <div className={cn({
                [styles.navbarList]: toggle === false,
                [styles.active]: toggle === true,
                })}>

                <Link href="/" legacyBehavior><a onClick={onToggle}>Home</a></Link>
                <Link href="/hg" legacyBehavior><a onClick={onToggle}>Products</a></Link>
                <Link href="" legacyBehavior><a onClick={onToggle}>Blogs</a></Link>
                <Link href="/about" legacyBehavior><a onClick={onToggle}>About Us</a></Link>
            </div>

            <div className={styles.side_menu} onClick={onToggle}>
                <span className={styles.sidebar}></span>
                <span className={styles.sidebar}></span>
                <span className={styles.sidebar}></span>
            </div>


        </div>     
        </>
    )
};