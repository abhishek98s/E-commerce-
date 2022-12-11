import '../styles/globals.css';
import Layout from '../Components/Layout'
import { useState, createContext } from 'react';
import AppContext from '../Components/AppContext'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const [cartContext, setCartContext] = useState(false);


  return (
    <AppContext.Provider value={{ cartContext, setCartContext }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
