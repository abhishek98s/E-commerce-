import Link from 'next/link';
import  styles from './styles.module.scss';
import { useRouter } from 'next/router';

function Footer(){
    const {pathname} = useRouter();
   
    if(pathname === "/login" || pathname === "/register"){
        return;
    }else{
        return(
            <>
                <div className={styles.footer_box}>
                    <Link href='/' legacyBehavior><a className={styles.logo}>ACEHOP</a></Link>        

                    <Link href="/" legacyBehavior><a>Home</a></Link>
                    <Link href="/products" legacyBehavior><a>Products</a></Link>
                    <Link href="" legacyBehavior><a>Blogs</a></Link>
                    <Link href="/about" legacyBehavior><a>About Us</a></Link>    
                </div>
            </>
        )
    }    
}

export default Footer;
