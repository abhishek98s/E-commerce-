import React, { useContext } from "react"
import styles from "../styles/Home.module.css"
import Image from "next/image";
import axios from 'axios'
import Cart from '../Components/Cartsidebar'

import { useEffect, useState } from 'react';
import AppContext from "../Components/AppContext";

function Products() {
    const [productData, setProductData] = useState([]);
    const apiData = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(data => setProductData(data.data))
    }

    useEffect(() => {
        apiData();
    }, [])
    console.log(productData)



    return (
        <>
            <section className={styles.products_box}>
                <div className={styles.categoty}>
                    {/* <h2>Product Categories</h2> */}

                    <div className={styles.product_category}>

                        {productData.map((product) =>


                            <div key={product.id} className={styles.productcard}>
                                <div className={styles.product_top}>
                                    <div className={styles.product_img}>
                                        <Image src={product.image} priority='true' alt={product.title} width="200" height="200" />
                                    </div>
                                </div>

                                <div className={styles.product_down}>
                                    <h2>{product.title}</h2>
                                    <p>$ <span>{product.price}</span></p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </section>
            {/* Cart sidebar */}
            <Cart />
        </>
    )
}

export default Products