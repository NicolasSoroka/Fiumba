import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__waves}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={styles.container__social}>
        <li>
          <a href="#">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineMail />
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlinePhone />
          </a>
        </li>
      </ul>
      <ul className={styles.container__menu}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
      </ul>
      <p>Since 2019 | All rights reserved.</p>
    </div>
  );
};

export default Footer;
