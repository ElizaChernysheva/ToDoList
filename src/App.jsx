import Form from './components/form/Form';
import style from './App.module.css';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className={style.app}>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
