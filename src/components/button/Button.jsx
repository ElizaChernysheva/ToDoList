import React from 'react';
import style from './Button.module.css';

function Button({ children, ...props }) {
  return (
    <button className={style.button} {...props} type="button">
      {children}
    </button>
  );
}

export default Button;
