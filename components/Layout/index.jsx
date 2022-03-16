import Head from 'next/head';
import styles from './Layout.module.css';
import { Header, Footer } from '../index';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Fiumba</title>
      </Head>
      <Header/>
      <motion.main className={ styles.layout__main }>{children}</motion.main>
      <Footer/>
    </div>
  )
}

export default Layout;