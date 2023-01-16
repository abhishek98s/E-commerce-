import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import axios from "axios";
import Head from "next/head";
import Cart_Sidebar from "../Components/Cart Sidebar";

import { useEffect, useState } from "react";
import AppContext from "../Components/AppContext";

function Products() {
  const [productData, setProductData] = useState([]);
  const [filterArr, setFilterArr] = useState("");
  const apiData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProductData(data.data));
  };

  const [clicked_products_index, setIndex] = useState([]);

  useEffect(() => {
    apiData();
  }, []);
  console.log(productData);

  function getatt(e) {
    let att = e.target.getAttribute("name");
    setIndex([...clicked_products_index, att]);
    // console.log(clicked_products_index)
  }

  function filter_func(productData) {
    if (!filterArr) {
      return productData;
    }
    return productData.category === filterArr;
  }

  const filterAll = () => setFilterArr("");
  const filterMen = () => setFilterArr("men's clothing");
  const filterWomen = () => setFilterArr("women's clothing");
  const filterJewelery = () => setFilterArr("jewelery");
  const filterElectornics = () => setFilterArr("electronics");

  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <section className={styles.products_box}>
        <div className={styles.category}>
          {/* <h2>Product Categories</h2> */}

          <div className={styles.category_filters}>
            <ul>
              <li onClick={filterAll}>All</li>
              <li onClick={filterMen}>Men's Clothing</li>
              <li onClick={filterWomen}>Women's Clothing</li>
              <li onClick={filterJewelery}>Jewelery</li>
              <li onClick={filterElectornics}>Electronics</li>
            </ul>
          </div>

          <div className={styles.product_category}>
            {productData
              .filter((productData) => {
                return filter_func(productData);
              })
              .map((product) => (
                <div key={product.id} className={styles.productcard}>
                  <div className={styles.product_top}>
                    <div className={styles.product_img}>
                      <Image
                        src={product.image}
                        priority="true"
                        alt={product.title}
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>

                  <div className={styles.product_down}>
                    <h2>{product.title}</h2>
                    <p>
                      $ <span>{product.price}</span>
                    </p>
                    <button name={product.id} onClick={getatt}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Cart sidebar */}
      <Cart_Sidebar
        value={productData}
        filter={clicked_products_index}
        func={setIndex}
      />
    </>
  );
}

export default Products;
