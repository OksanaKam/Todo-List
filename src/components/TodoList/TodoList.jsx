import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import styles from './styles.module.scss'

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);

    return (
        <ul className={styles.list}>
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                {...todo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
