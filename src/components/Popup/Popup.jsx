import styles from './styles.module.scss';
import { STATUS } from '../../utils/status';
import { usePopupClose } from '../../hooks/usePopupClose';

const Popup = ({
  id,
  text,
  deadline,
  statusTask,
  updateText,
  updateDeadline,
  updateStatus,
  handleAction,
  handleUpdateTodo,
  isOpen,
  onClose,
  isEdit
}) => {

  usePopupClose(isOpen, onClose);
  console.log(id, text, deadline, statusTask);

  const popupClassName = (
    `${styles.popup} ${isOpen && styles.popup_opened}`
  );

  const handleChangeStatus = (e) => {
    updateStatus(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (isEdit) {
      handleUpdateTodo();
    } else {
      handleAction()
    }
  }

  return (
    <div className={popupClassName}>
      <div className={styles.popup__modal}>
        <button
          className={styles.popup__close}
          type='button'
          onClick={onClose}
          aria-label='Закрыть'
        >
        </button>
        <form className={styles.form} onSubmit={handleClick}>
          <input
            className={styles.form__input}
            name='text-popup'
            type='text'
            placeholder="Новая задача"
            value={text}
            onChange={(e) => updateText(e.target.value)}
          />
          <input
            className={styles.form__input}
            name='deadline-popup'
            type='datetime-local'
            value={deadline}
            onChange={(e) => updateDeadline(e.target.value)}
          />
          <select
            className={styles.form__input}
            name='status-popup'
            id='status-popup'
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
          <button className={styles.form__button}>
            {isEdit ? 'Изменить' : 'Добавить'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
