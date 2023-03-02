import React from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import Button from '../button/Button';

const modal = document.getElementById('modal');

function Modal({ todo, closeModal }) {
  return createPortal(
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.modalHeader}>{todo.title}</h2>
        <div>
          <h3>Description</h3>
          <p>{todo.description}</p>
        </div>
        <div className={style.statusWrapper}>
          <h3>Status</h3>
          <input type="checkbox" name="key" checked={todo.status} />
        </div>
        <Button onClick={closeModal}>Close</Button>
      </div>
    </div>,
    modal,
  );
}

export default Modal;
