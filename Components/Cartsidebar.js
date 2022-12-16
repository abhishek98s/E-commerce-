import cn from 'classnames'
import styles from "../styles/Home.module.css"
import books from '../public/images/books.jpg'
import { useContext, useState } from "react"
import AppContext from './AppContext'

export default function Cart(props) {
    const cart = useContext(AppContext);

    let clicked_products = props.value;
    let clicked_products_index = props.filter;
    // console.log(clicked_products_index)

    const setIndex = props.func;

    const myArrayFiltered = clicked_products.filter((el) => {
        return clicked_products_index.some((f) => {
            return f == el.id;
        });
    });

    // console.log(myArrayFiltered);

    function cartToggle() {
        cart.setCartContext(!cart.cartContext)
    }

    function removeItem(e){
        let remove_index = e.target.getAttribute("name");   //get the value 

        let original = clicked_products_index; //copy the array
        // console.log(original);

        original = original.filter((item) => {  //removet the value in array
            return item != remove_index;
        })
        
        setIndex(original);     //set the array after removing the value
     
    }

    return (
        <div className={cn({
            [styles.cartSidebar]: cart.cartContext === false,
            [styles.cartSidebar_active]: cart.cartContext === true,
        })}>
            <div className={styles.cart_top_side}>
                <button className={styles.cart_top_side_close_button} onClick={cartToggle}>
                    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_103_2)">
                            <path d="M76 25.64L70.36 20L48 42.36L25.64 20L20 25.64L42.36 48L20 70.36L25.64 76L48 53.64L70.36 76L76 70.36L53.64 48L76 25.64Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_103_2">
                                <rect width="96" height="96" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <section className={styles.cartLogo}>
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
                    <p>0</p>
                </section>
                <h2>Cart</h2>
            </div>


            
            <div class={styles.clicked_products}>
                {myArrayFiltered.map((pro) => {
                    return (

                        <section key={pro.id} className={styles.cart_products}>
                            <div className={styles.image_bg}>
                                <img src={pro.image} />
                            </div>
                            <h2>{pro.title}</h2>

                            <div className={styles.cart_price}>
                                <button className={styles.close_button} refs='index' >
                                    <svg className={styles.close_svg} name={pro.id} onClick={removeItem} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_103_2)">
                                            <path d="M76 25.64L70.36 20L48 42.36L25.64 20L20 25.64L42.36 48L20 70.36L25.64 76L48 53.64L70.36 76L76 70.36L53.64 48L76 25.64Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_103_2">
                                                <rect width="96" height="96" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <div className={styles.price_as}>
                                    <p>$<span>{pro.price}</span></p>
                                    <div className={styles.plus_minus}>
                                        <button>-</button>
                                        <span>0</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        </section>)
                })}
            </div>

            <section className={styles.total_price}>
                <p>Total</p>
                <p>$<span>23</span></p>
            </section>
        </div>
    )
}