import React from 'react';
import cs from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Button = ({
  label,
  path,
  primary,
  secondary,
  small,
  round,
  disabled,
  arrow
}) => {
  const router = useRouter();
  const handlePressButton = (link: string) => {
    if (link) {
      router.push(link);
    }
  };

  const classNames = cs(styles.button, {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.small]: small,
    [styles.round]: round,
    [styles.disabled]: disabled
  });

  return (
    <motion.button whileTap={{ scale: 0.95 }} className={classNames} onClick={ () => handlePressButton(path) } >
      <span>{label}</span>
      {arrow && (
        <svg width="40" height="40" xmlSpace="preserve" version="1.0" viewBox="0 0 44.5 44.5">
          <path
            fill="#F0F0EF"
            d="m31 22-3.8-3.8c-.1-.1-.2-.1-.3-.1-.1 0-.2.1-.3.1-.2.2-.2.4 0 .6l2.9 2.9H14c-.2 0-.5.2-.5.5s.2.5.5.5h15.5l-2.9 2.9c-.2.2-.2.5 0 .6.1.1.2.1.3.1.1 0 .2 0 .3-.1l3.8-3.8c.1.1.1-.2 0-.4z"
          />
        </svg>
      )}
    </motion.button>
  );
};

export default Button;