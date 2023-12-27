import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import styles from './styles.module.scss'

const TodoList = ({ handleEditTodoClick, isOpen, onClose, updateText, updateDeadline, updateStatus }) => {
    const todos = useSelector(state => state.todos.todos);
    console.log(todos);

    return (
        <ul className={styles.list}>
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                /*{...todo}*/
                todo={todo}
                handleEditTodoClick={handleEditTodoClick}
                isOpen={isOpen}
                onClose={onClose}
                updateText={updateText}
                updateDeadline={updateDeadline}
                updateStatus={updateStatus}
                />
            ))}
        </ul>
    );
};

export default TodoList;
