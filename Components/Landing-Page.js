import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function LandingPage(){
  const[productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(data => setProductData(data.data))
  }, [])
  console.log(productData)


  function topFunction() {
      document.body.scrollTop = window.innerHeight;
      document.documentElement.scrollTop = window.innerHeight;
  }

  return (
    <>
      <div className={styles.backgroundimg}>
        <h1 className={styles.slogen}>
          Cool and Exciting Products
        </h1>
        <p>Place to buy the products of your choice</p>

        <div onClick={topFunction} className={styles.button} >
          <button>Learn More</button>
          <svg id={styles.down_arrow} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_11_2)">
            <path d="M29.64 34.36L48 52.68L66.36 34.36L72 40L48 64L24 40L29.64 34.36Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_11_2">
            <rect width="96" height="96" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>  
      </div>


      <div className={styles.categoty}>
          <h2>Product Categories</h2>

          <div className={styles.product_category}>
              
              {productData.map((product)=>
              
              <>
                <div key={product.price} className={styles.productList} style={{
                  backgroundImage: `url(${product.image})`}
                }>
                  <button className={styles.addToCart}>Add to cart</button>
                </div>
              </>
              )}
          </div>
      </div>
    </>
  )
}












