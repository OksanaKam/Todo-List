import { useDispatch } from "react-redux";
import { toggleToDo, removeToDo } from "../../store/todoSlice";
import styles from './styles.module.scss';

const TodoItem = ({
  id,
  text,
  deadline,
  completed,
  statusTask,
  handleEditTodoClick,
}) => {
  const dispatch = useDispatch();

  const textClassName = (
    `${styles.item__text} ${completed && styles.item__text_completed}`
  );

  return (
    <>
      <li className={styles.item}>
        <input
          className={styles.item__checkbox}
          name="checkbox-item"
          type="checkbox"
          id="checkbox-item"
          checked={completed}
          onChange={() => dispatch(toggleToDo({ id }))}
        />
        <label className={styles.item__label} htmlFor="checkbox-item"></label>
        <span className={textClassName}>{text}</span>
        <span className={styles.item__deadline}>{deadline}</span>
        <span className={styles.item__statusTask}>{statusTask}</span>
        <button className={styles.item__edit} onClick={() => handleEditTodoClick({ id, text, deadline, completed, statusTask })}></button>
        <button className={styles.item__delete} onClick={() => dispatch(removeToDo({ id }))}></button>
      </li>
    </>
  );
};

export default TodoItem;
