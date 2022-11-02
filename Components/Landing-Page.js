import styles from '../styles/Home.module.css'


export default function LandingPage(){
    function topFunction() {
        document.body.scrollTop = screen.height;
        document.documentElement.scrollTop = screen.height;
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
                  <g clip-path="url(#clip0_11_2)">
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


            <div>
                <h2>Product Categories</h2>

                <div className={styles.product_category}>
                    <div>
                        <p>Some Text</p>
                    </div>

                    <div>
                        <p>Some Text</p>
                    </div>

                    <div>
                        <p>Some Text</p>
                    </div>

                    <div>
                        <p>Some Text</p>
                    </div>

                    <div>
                        <p>Some Text</p>
                    </div>

                    <div>
                        <p>Some Text</p>
                    </div>
                </div>
            </div>
      
            </>
        )
}












