import '../styles/globals.css';
import Layout from '../Components/Layout'
import { useState, createContext } from 'react';
import AppContext from '../Components/AppContext'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const [cartContext, setCartContext] = useState(false);
  const [numOfItems, setNumOfItems] = useState(1);


  return (
    <AppContext.Provider value={{showCart: [ cartContext, setCartContext ], totalNumOfItems: [numOfItems, setNumOfItems]}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
