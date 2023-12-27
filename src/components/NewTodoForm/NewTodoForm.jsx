import styles from './styles.module.scss';
import { STATUS } from '../../utils/status';

const NewTodoForm = ({
  text,
  deadline,
  updateText,
  updateDeadline,
  updateStatus,
  handleAction,
  handleUpdateTodo,
  isEdit
}) => {

  const handleChangeStatus = (e) => {
    updateStatus(e.target.value)
  }

  return (
    <label className={styles.form}>
      <input
        className={styles.form__input}
        type='text'
        name='text-form'
        placeholder="Новая задача"
        value={text}
        onChange={(e) => updateText(e.target.value)}
      />
      <input
        className={styles.form__input}
        type='datetime-local'
        name='deadline-form'
        value={deadline}
        onChange={(e) => updateDeadline(e.target.value)}
      />
      <select
        className={styles.form__input}
        name='status-form'
        id='status-form'
        onChange={handleChangeStatus}
      >
        {STATUS.map((item) => (
          <option
            key={item.id}
            value={item.category}
          >
            {item.category}
          </option>
        ))}
      </select>
      <button className={styles.form__button} onClick={isEdit ? handleUpdateTodo : handleAction}>
        {isEdit ? 'Изменить' : 'Добавить'}
      </button>
    </label>
  );
};

export default NewTodoForm;
