import styles from './styles.module.scss';
import { STATUS } from '../../utils/status';

const NewTodoForm = ({
  text,
  deadline,
  updateText,
  updateDeadline,
  updateStatus,
  handleAction
}) => {

  const handleChangeStatus = (e) => {
    updateStatus(e.target.value)
  }

  return (
    <label className={styles.form}>
      <input
        className={styles.form__input}
        type='text'
        placeholder="Новая задача"
        value={text}
        onChange={(e) => updateText(e.target.value)}
      />
      <input
        className={styles.form__input}
        type='datetime-local'
        value={deadline}
        onChange={(e) => updateDeadline(e.target.value)}
      />
      <select
        className={styles.form__input}
        name='status'
        id='status'
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
      <button className={styles.form__button} onClick={handleAction}>Добавить</button>
    </label>
  );
};

export default NewTodoForm;
