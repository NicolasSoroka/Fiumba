import Head from 'next/head';
import styles from './Layout.module.css';
import { Header, Footer } from '../index';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Fiumba</title>
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout;