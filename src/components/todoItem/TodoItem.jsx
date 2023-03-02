import React, { useState } from 'react';
import Modal from '../modal/Modal';
import style from './TodoItem.module.css';

function TodoItem({ todo, onStatusChange }) {
  const [isOpened, setIsOpened] = useState(false);
  const onInputChange = () => {
    onStatusChange(todo.id);
  };

  const showModal = () => {
    setIsOpened(true);
  };
  const closeModal = () => {
    setIsOpened(false);
  };

  const stopProp = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <tr onClick={showModal} className={style.item}>
        <td className={style.itemData}>{todo.id}</td>
        <td className={style.itemData}>{todo.title}</td>
        <td className={style.itemData}>{todo.description}</td>
        <td className={style.itemData}>
          <input
            onChange={onInputChange}
            type="checkbox"
            name="key"
            checked={todo.status}
            className="key"
            onClick={stopProp}
          />
        </td>
      </tr>
      {isOpened && <Modal todo={todo} closeModal={closeModal} />}
    </>
  );
}

export default TodoItem;
