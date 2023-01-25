import cn from "classnames";
import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import { CartSvg, Close } from "../../public/svg";
import CartCards from "./Cart Cards/index,";

export default function Cart({ cart, setCart, handleChange }) {
  const { showCart, totalNumOfItems } = useContext(AppContext);
  const [cartContext, setCartContext] = showCart;
  const [numOfItems, setNumOfItems] = totalNumOfItems;
  const [total_price, setTotal_price] = useState(0);
  
  //Set the total number of items present in the cart in navbar
  useEffect(() => {
    setNumOfItems(cart.length);
  }, [cart])

  //Toggle the sidebar
  function cartToggle() {
    setCartContext(!cartContext);
  }

  function removeItem(id){
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }

  function handlePrice(){
    let price =0;
    cart.map((item) => (price += item.amount * item.price));
    setTotal_price(price);
  }

  useEffect(() => {
    handlePrice();
  })

  return (
    <div
      className={cn({
        [styles.cartSidebar]: cartContext === false,
        [styles.cartSidebar_active]: cartContext === true,
      })}
    >
      <div className={styles.cart_top_side}>

        <button className={styles.cart_top_side_close_button} onClick={cartToggle}>
          <Close />
        </button>

        <section className={styles.cartLogo}>
          <CartSvg />
          <p>{numOfItems}</p>
        </section>

        <h2>Cart</h2>

      </div>

      <div className={styles.clicked_products}>
        {cart.map((items) => {
          return (
            <CartCards key={items.id} items={items} handleChange={handleChange} removeItem={removeItem} handlePrice={handlePrice}/>
          );
        })}
      </div>

      <section className={styles.total_price}>
        <p>Total</p>
        <p>
          $ <span>{total_price.toFixed(2)}</span>
        </p>
      </section>
    </div>
  );
}
