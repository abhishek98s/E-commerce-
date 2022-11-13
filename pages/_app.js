import '../styles/globals.css';
import Layout from '../Components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <> 
    <Layout> 
    
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
