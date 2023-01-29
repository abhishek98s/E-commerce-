import { useEffect, useState } from 'react';
import { Slidedown } from '../../public/svg';
import LazyLoading from '../laxy loading';
import styles from './styles.module.scss';
import axios from "axios";
import Products from './Products';

export default function LandingPage() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((data) => setProductData(data.data));
    };

    apiData();
  }, []);

  function isdata() {
    if (productData[0] == undefined) {
      return true;
    } else {
      return false;
    }
  }

  function topFunction() {
    document.body.scrollTop = window.innerHeight;
    document.documentElement.scrollTop = window.innerHeight;
  }

  return (
    <>
      <main className={styles.backgroundimg}>

        <h1 className={styles.slogen}>
          Cool and Exciting Products
        </h1>

        <p>Place to buy the products of your choice</p>

        <div onClick={topFunction} className={styles.button} >
          <button>Learn More</button>
          <Slidedown styles={styles} />
        </div>
        
      </main>

      {isdata() && <LazyLoading />}

      <section className={styles.products}>
        {productData
          .map((product) => (
            <Products
              key={product.id}
              className={styles.productcard}
              items={product}
            />
          ))}
      </section>
    </>
  )
}