import cn from "classnames";
import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import { CartSvg, Close } from "../../public/svg";

export default function Cart(props) {
  const { cart, no } = useContext(AppContext);
  const [cartContext, setCartContext] = cart;
  const [itemsnum, setItemsnum] = no;
  const [total_price, setTotal_price] = useState(0);

  let clicked_products = props.value;
  let clicked_products_index = props.filter;
  // console.log(clicked_products_index)

  const setIndex = props.func; //index of clicked items in the array

  const myArrayFiltered = clicked_products.filter((el) => {
    return clicked_products_index.some((f) => {
      return f == el.id;
    });
  });

  let total_array = myArrayFiltered.map((el) => el.price);

  let sum = total_array.reduce((partialSum, a) => partialSum + a, 0);

  useEffect(() => {
    setTotal_price(sum);
  }, [sum]);

  useEffect(() => {
    setItemsnum(myArrayFiltered.length);
  }, [myArrayFiltered]);

  function cartToggle() {
    setCartContext(!cartContext);
  }

  function removeFromCart(e) {
    removeItem(e);
  }

  function removeItem(e) {
    let remove_index = e.target.getAttribute("names"); //get the value

    let original = clicked_products_index; //copy the array
    // console.log(original);

    original = original.filter((item) => {
      //removet the value in array
      return item != remove_index;
    });

    setIndex(original); //set the array after removing the value

    // if(total_price <= 0){
    //     return;
    // }
    // let price = parseFloat(e.currentTarget.parentNode.nextElementSibling.children[0].children[0].innerHTML);
    // let nums = parseFloat(e.currentTarget.parentNode.nextElementSibling.children[1].children[1].innerHTML);

    // let minus_value = price * nums;

    // setTotal_price(total_price - minus_value)
  }

  // function minus_removeItem(e){

  //         let remove_index = e.target.getAttribute("names");   //get the value

  //         let original = clicked_products_index; //copy the array
  //         // console.log(original);

  //         original = original.filter((item) => {  //removet the value in array
  //             return item != remove_index;
  //         })

  //         setIndex(original);
  // }
  // function increase(e) {
  //     e.currentTarget.previousElementSibling.innerHTML++;
  //     let price = parseFloat(e.currentTarget.parentNode.previousElementSibling.children[0].innerHTML);
  //     setTotal_price(total_price + price);
  // }

  // function decrease(e) {
  //     let price = parseFloat(e.currentTarget.parentNode.previousElementSibling.children[0].innerHTML);
  //     if (e.currentTarget.nextElementSibling.innerHTML <= 1) {
  //         setTotal_price(total_price - price);
  //         minus_removeItem(e);
  //     }
  //     e.currentTarget.nextElementSibling.innerHTML--;
  //     setTotal_price(total_price - price);
  // }

  return (
    <div
      className={cn({
        [styles.cartSidebar]: cartContext === false,
        [styles.cartSidebar_active]: cartContext === true,
      })}
    >
      <div className={styles.cart_top_side}>
        <button
          className={styles.cart_top_side_close_button}
          onClick={cartToggle}
        >
          <Close />
        </button>
        <section className={styles.cartLogo}>
          <CartSvg />
          <p>{itemsnum}</p>
        </section>
        <h2>Cart</h2>
      </div>

      <div className={styles.clicked_products}>
        {myArrayFiltered.map((pro) => {
          return (
            <section key={pro.id} className={styles.cart_products}>
              <div className={styles.image_bg}>
                <img src={pro.image} />
              </div>
              <h2>{pro.title}</h2>

              <div className={styles.cart_price}>
                <button className={styles.close_button} refs="index">
                  <svg
                    className={styles.close_svg}
                    names={pro.id}
                    onClick={removeFromCart}
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_103_2)">
                      <path
                        d="M76 25.64L70.36 20L48 42.36L25.64 20L20 25.64L42.36 48L20 70.36L25.64 76L48 53.64L70.36 76L76 70.36L53.64 48L76 25.64Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_103_2">
                        <rect width="96" height="96" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                {/* <div className={styles.price_as}>
                                    <p>$<span>{pro.price}</span></p>
                                    <div className={styles.plus_minus}>
                                        <button names={pro.id}>-</button> 
                                        <span>1</span>
                                        <button names={pro.id} >+</button> 
                                    </div>
                                </div> */}
              </div>
            </section>
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
