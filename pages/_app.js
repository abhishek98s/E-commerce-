import '../styles/globals.css';
import Layout from '../Components/Layout'
import { useState, createContext } from 'react';
import AppContext from '../Components/AppContext'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const [cartContext, setCartContext] = useState(false);
  const [itemsnum, setItemsnum] = useState(1);


  return (
    <AppContext.Provider value={{cart: [ cartContext, setCartContext ], no: [itemsnum, setItemsnum]}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
