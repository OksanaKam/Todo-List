import { useDispatch } from "react-redux";
import { toggleToDo, removeToDo, editToDo } from "../../store/todoSlice";
import styles from './styles.module.scss';
// import Popup from "../Popup/Popup";

const TodoItem = ({
  todo,
  handleEditTodoClick,
  isOpen,
  onClose,
  updateText,
  updateDeadline,
  updateStatus
}) => {
  const dispatch = useDispatch();
  const { id, text, deadline, completed, statusTask } = todo;
  console.log(todo);

  return (
    <>
      <li className={styles.item}>
        <input
          className={styles.item__checkbox}
          type="checkbox"
          id="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleToDo({ id }))}
        />
        <label className={styles.item__label} htmlFor="checkbox"></label>
        <span className={styles.item__text}>{text}</span>
        <span className={styles.item__deadline}>{deadline}</span>
        <span className={styles.item__statusTask}>{statusTask}</span>
        <button className={styles.item__edit} onClick={() => handleEditTodoClick(todo)}></button>
        <button className={styles.item__delete} onClick={() => dispatch(removeToDo({ id }))}></button>
      </li>
    </>
  );
};

export default TodoItem;
