import styles from "../styles/Home.module.css"
import Image from "next/image";
import axios from 'axios'

import { useEffect, useState } from 'react';

function Products() {
    const [productData, setProductData] = useState([]);

    const apiData = async() =>{
        await axios.get('https://fakestoreapi.com/products')
            .then(data => setProductData(data.data))

    }

    useEffect(() => {
        apiData();
        // const json = JSON.stringify({
        //     user: {
        //         username: "as",
        //         password: "sd"
        //     }
        // });
        // console.log(json)

    }, [])
    console.log(productData)




    return (
        <>
            <div className={styles.categoty}>
                {/* <h2>Product Categories</h2> */}

                <div className={styles.product_category}>

                    {productData.map((product) =>

                        <>
                            <div className={styles.productcard}>
                                <div className={styles.product_top}>
                                    <div className={styles.product_img}>
                                        <Image src={product.image} alt={product.title} width="200" height="200"/>
                                    </div>
                                </div>

                                <div className={styles.product_down}>
                                    <h2>{product.title}</h2>
                                    <p>$ <span>{product.price}</span></p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Products