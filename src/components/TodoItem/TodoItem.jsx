import { useDispatch } from "react-redux";
import { toggleToDo, removeToDo } from "../../store/todoSlice";
import styles from './styles.module.scss'

const TodoItem = ({ id, text, deadline, status, completed }) => {
    const dispatch = useDispatch();

    return (
        <li className={styles.item}>
            <input
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(toggleToDo({ id }))}
            />
            <span>{text}</span>
            <span>{deadline}</span>
            <span>{status}</span>
            <span className={styles.item__delete} onClick={() => dispatch(removeToDo({ id }))}>&times;</span>
        </li>
    );
};

export default TodoItem;
