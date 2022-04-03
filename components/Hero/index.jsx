import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import logo from "../../public/images/logo_color.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <div className={styles.container__main__text}>
          <h1>Da el proximo paso.</h1>
          <h1>Tene hoy mismo tu sitio web</h1>
          <h1>Y no pares de crecer!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ad
            dolore architecto, voluptatem saepe expedita voluptates eum
          </p>
        </div>
        <div className={styles.container__main__buttons }>
          <button>Ver nuestros trabajos</button>
          <button>Contactanos!</button>
        </div>
      </div>
      <div className={styles.container__image}>
        <div className={styles.container__logo}>
          <Image src={logo} layout="fill" alt="Logo" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
