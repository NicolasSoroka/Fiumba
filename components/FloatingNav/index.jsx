import React from "react";
import styles from "./FloatingNav.module.css";
import { AiOutlineHome, AiOutlineFolderOpen, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineSetting } from "react-icons/Ai";
import { BsChat } from "react-icons/Bs";
import cs from 'classnames';
import { useState } from "react";

const FloatingNav = () => {
  
  const [isActive, setActive] = useState(1);
  const handleToggle = (number) => {
    setActive(number);
  };

  const indicatorClasses = cs( styles.indicator, 
    { [styles.indicator__1 ] : isActive === 1 },
    { [styles.indicator__2 ] : isActive === 2 },
    { [styles.indicator__3 ] : isActive === 3 },
    { [styles.indicator__4 ] : isActive === 4 },
    { [styles.indicator__5 ] : isActive === 5 });

  const textClasses = cs( styles.container__icons__text, {
    [styles.container__icons__text__active] : isActive
  });
  
  const iconClasses = cs( styles.container__icons__icon, {
    [styles.container__icons__icon__active] : isActive
  });

  return (
    <div className={styles.container}>
      <ul className={styles.container__icons}>
        <li onClick={()=>{handleToggle(1)}}>
          <a href="#">
            <span className={ isActive === 1 ? iconClasses : styles.container__icons__icon }><AiOutlineHome/></span>
            <span className={ isActive === 1 ? textClasses : styles.container__icons__text }>Home</span>
          </a>
        </li>
        <li onClick={()=>{handleToggle(2)}}>
          <a href="#">
            <span className={isActive === 2 ? iconClasses : styles.container__icons__icon }><AiOutlineFolderOpen/></span>
            <span className={isActive === 2 ? textClasses : styles.container__icons__text }>Portfolio</span>
          </a>
        </li>
        <li onClick={()=>{handleToggle(3)}}>
          <a href="#">
            <span className={isActive === 3 ? iconClasses : styles.container__icons__icon }><AiOutlineSetting/></span>
            <span className={isActive === 3 ? textClasses : styles.container__icons__text }>Tecnologías</span>
          </a>
        </li>
        <li className="test" onClick={()=>{handleToggle(4)}}>
          <a href="#">
            <span className={isActive === 4 ? iconClasses : styles.container__icons__icon }><BsChat/></span>
            <span className={isActive === 4 ? textClasses : styles.container__icons__text }>Contacto</span>
          </a>
        </li>
        <li onClick={()=>{handleToggle(5)}}>
          <a href="#">
            <span className={isActive === 5 ? iconClasses : styles.container__icons__icon }><AiOutlineWhatsApp/></span>
            <span className={isActive === 5 ? textClasses : styles.container__icons__text }>Whatsapp</span>
          </a>
        </li>
        <div className={indicatorClasses}></div>
      </ul>
    </div>
  );
};

export default FloatingNav;
