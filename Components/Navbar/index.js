import styles from './styles.module.scss';
import Link from 'next/link'
import { useContext, useState } from 'react';
import cn from 'classnames'
import { useRouter } from 'next/router';
import AppContext from '../AppContext';
import { CartSvg } from '../../public/svg';
// import products from '../pages/products';

export default function Navbar() {
    const { showCart, totalNumOfItems } = useContext(AppContext);
    const [cartContext, setCartContext] = showCart;
    const [numOfItems, setNumOfItems] = totalNumOfItems;

    const [toggle, setToggle] = useState(false);
    const router = useRouter();
    ;
    function onToggle() {
        setToggle(!toggle);
    }

    function cartToggle() {
        setCartContext(!cartContext)
    }

    if (router.pathname == '/products') {
        return (
            <>
                <div className={styles.navbar} style={{ position: 'fixed' }}>
                    <Link href="/"><h1>ACEHOP</h1></Link>

                    <div className={styles.shoppingcart} onClick={cartToggle}>
                        <CartSvg />
                        <p>{numOfItems}</p>
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