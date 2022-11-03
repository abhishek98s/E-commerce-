import Link from 'next/link';
import  fstyles from '../styles/Footer.module.css'

function Footer(){
    return(
        <>
            <div className={fstyles.footer_box}>
                <Link href='/' legacyBehavior><a className={fstyles.logo}>ACEHOP</a></Link>        

                <Link href="/" legacyBehavior><a>Home</a></Link>
                <Link href="/hg" legacyBehavior><a>Products</a></Link>
                <Link href="" legacyBehavior><a>Blogs</a></Link>
                <Link href="/about" legacyBehavior><a>About Us</a></Link>    
            </div>
        </>
    )
}

export default Footer;