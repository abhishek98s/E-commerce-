import React from 'react'
import Image from 'next/image'
import styles from './lazy loading.module.scss'

const LazyLoading = () => {

    let lazyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
        <section className={styles.LazyLoadingBox}>
            {lazyData.map((item) => (

                <div key={item} className={styles.productcard}>
                    <div className={styles.product_top}>
                        <div className={styles.product_img}>
                            <div className={styles.img}>

                            </div>
                        </div>
                    </div>

                    <div className={styles.product_down}>
                        <h2></h2>
                        <p>

                        </p>
                        <button></button>
                    </div>
                </div>
            )
            )}</section>
    )
}

export default LazyLoading