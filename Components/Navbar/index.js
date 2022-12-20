import styles from './styles.module.scss';
import Link from 'next/link'
import { useContext, useState } from 'react';
import cn from 'classnames'
import { useRouter } from 'next/router';
import AppContext from '../AppContext';
// import products from '../pages/products';

export default function Navbar() {
    const {cart, no} = useContext(AppContext);
    const [cartContext, setCartContext] = cart;
    const [itemsnum, setItemsnum] = no;

    const [toggle, setToggle] = useState(false);
    const router = useRouter();
    ;
    function onToggle() {
        setToggle(!toggle);
    }

    function cartToggle(){
        setCartContext(!cartContext)
    }

    if (router.pathname == '/products') {
        return (
            <>
                <div className={styles.navbar} style={{position: 'fixed'}}>
                    <Link href="/"><h1>ACEHOP</h1></Link>

                    <div className={styles.shoppingcart} onClick={cartToggle}>
                        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_101_2)">
                                <path d="M28 72C23.6 72 20.04 75.6 20.04 80C20.04 84.4 23.6 88 28 88C32.4 88 36 84.4 36 80C36 75.6 32.4 72 28 72ZM4 8V16H12L26.4 46.36L21 56.16C20.36 57.28 20 58.6 20 60C20 64.4 23.6 68 28 68H76V60H29.68C29.12 60 28.68 59.56 28.68 59L28.8 58.52L32.4 52H62.2C65.2 52 67.84 50.36 69.2 47.88L83.52 21.92C83.84 21.36 84 20.68 84 20C84 17.8 82.2 16 80 16H20.84L17.08 8H4ZM68 72C63.6 72 60.04 75.6 60.04 80C60.04 84.4 63.6 88 68 88C72.4 88 76 84.4 76 80C76 75.6 72.4 72 68 72Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_101_2">
                                    <rect width="96" height="96" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>{itemsnum}</p>
                    </div>

                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={styles.navbar}>
                    <Link href="/"><h1>ACEHOP</h1></Link>

                    <div className={cn({
                        [styles.navbarList]: toggle === false,
                        [styles.active]: toggle === true,
                    })}>

                        <Link href="/" legacyBehavior><a onClick={onToggle}>Home</a></Link>
                        <Link href="/products" legacyBehavior><a onClick={onToggle}>Products</a></Link>
                        <Link href="" legacyBehavior><a onClick={onToggle}>Blogs</a></Link>
                        <Link href="/about" legacyBehavior><a onClick={onToggle}>About Us</a></Link>
                        <Link href="/login" legacyBehavior><a onClick={onToggle}>Login</a></Link>
                    </div>

                    <div className={styles.side_menu} onClick={onToggle}>
                        <span className={styles.sidebar}></span>
                        <span className={styles.sidebar}></span>
                        <span className={styles.sidebar}></span>
                    </div>
                </div>
            </>
        )
    }
};