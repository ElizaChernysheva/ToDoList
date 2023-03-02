import React from 'react';
import style from './Input.module.css';

function Input({ errorText, label, ...props }) {
  return (
    <div className={style.inputWrapper}>
      <label className={style.inputLabel} htmlFor={props.name}>
        {label}
      </label>
      <input
        id={props.name}
        type="text"
        {...props}
        className={errorText && style.error}
      />
      {errorText && <div className={style.inputError}>{errorText}</div>}
    </div>
  );
}

export default Input;
