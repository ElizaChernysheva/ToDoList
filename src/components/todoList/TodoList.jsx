import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import { toggleStatus } from '../../redux/todos/actionCreators';
import style from './TodoList.module.css';

function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
  const onStatusChange = (id) => {
    dispatch(toggleStatus(id));
  };
  return (
    <table className={style.table}>
      <tbody>
        <tr className={style.tableRow}>
          <th className={style.tableHeader}>ID</th>
          <th className={style.tableHeader}>Title</th>
          <th className={style.tableHeader}>Description</th>
          <th className={style.tableHeader}>Status</th>
        </tr>
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onStatusChange={onStatusChange} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
