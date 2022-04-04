import Head from "next/head";
import styles from "./Layout.module.css";
import { Header, Footer, FloatingNav } from "../index";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap&apos;);
        </style>
        <link rel="icon" href="/favicon.ico" />
        <title>Fiumba</title>
      </Head>
      <Header />
      <motion.main>{children}</motion.main>
      <FloatingNav />
      <Footer />
    </div>
  );
};

export default Layout;
