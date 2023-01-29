import { Slidedown } from '../../public/svg';
import styles from './styles.module.scss'

export default function LandingPage() {

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
    </>
  )
}