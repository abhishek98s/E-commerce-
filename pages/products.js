import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Cart_Sidebar from "../Components/Cart Sidebar";

import { useEffect, useState } from "react";
import AppContext from "../Components/AppContext";
import Cards from "../Components/Cards";
import LazyLoading from "../Components/laxy loading";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


function Products({data}) {
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // const apiData = async () => {
    //   await axios
    //     .get("https://fakestoreapi.com/products")
    //     .then((data) => setProductData(data.data));
    // };

    // apiData();
    setProductData(data);
  }, []);

  function AddToCart(items) {
    if (cart.indexOf(items) !== -1) return;

    if(items.amount == undefined){
      items.amount = 1;
    }

    setCart([...cart, items]);
    console.log(cart);
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;

    if(arr[ind].amount == undefined){
      arr[ind].amount = 1;
    }
    arr[ind].amount += d;

    // if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    console.log(cart);
  }

  // filter the data and show it accordingly
  function filter_func(productData) {
    if (!filterData) {
      return productData;
    }
    return productData.category === filterData;
  }

  const filterAll = () => setFilterData("");
  const filterMen = () => setFilterData("men's clothing");
  const filterWomen = () => setFilterData("women's clothing");
  const filterJewelery = () => setFilterData("jewelery");
  const filterElectornics = () => setFilterData("electronics");


  function isdata(){
    if(productData[0] == undefined){
      return true;
    }else{
      return false;
    }
  }
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

          {isdata() && <LazyLoading />}

          <div className={styles.product_category}>
            {productData
              .filter((productData) => {
                return filter_func(productData);
              })
              .map((product) => (
                <Cards
                  key={product.id}
                  className={styles.productcard}
                  items={product}
                  AddToCart={AddToCart}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
          </div>
        </div>
      </section>
      {/* Cart sidebar */}
      <Cart_Sidebar
        value={productData}
        handleChange={handleChange}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default Products;
