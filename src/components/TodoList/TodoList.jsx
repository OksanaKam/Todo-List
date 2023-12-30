import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import styles from './styles.module.scss'

const TodoList = ({ handleEditTodoClick }) => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleEditTodoClick={handleEditTodoClick}
        />
      ))}
    </ul>
  );
};

export default TodoList;
