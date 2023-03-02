import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
  const todoList = useSelector((state) => state.todos);
  console.log(todoList);
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {todoList.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
              <input type="checkbox" name="key" className="key" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
