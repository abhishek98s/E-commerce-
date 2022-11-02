import '../styles/globals.css';
import Layout from '../Components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <> 
    <Layout> 
    <Head>
    <link href="http://fonts.cdnfonts.com/css/anurati" rel="stylesheet" />
    </Head>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
