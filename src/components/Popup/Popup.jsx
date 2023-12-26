import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editToDo } from '../../store/todoSlice';
import { STATUS } from '../../utils/status';
import { usePopupClose } from '../../hooks/usePopupClose';
import { useForm } from '../../hooks/useForm';

const Popup = ({
  todo,
  updateText,
  updateDeadline,
  updateStatus,
  isOpen,
  onClose
}) => {

  const dispatch = useDispatch();
  const { id, text, deadline, completed, statusTask } = todo;
  usePopupClose(isOpen, onClose);
  const { setFormValue } = useForm({});
  console.log( id, text, deadline, statusTask);

  const popupClassName = (
    `${styles.popup} ${isOpen && styles.popup_opened}`
  );

  useEffect(() => {
  }, [text, deadline, updateText, updateDeadline, dispatch, statusTask]);

  const handleChangeStatus = (e) => {
    updateStatus(e.target.value)
  }

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    console.log('click update');
    if (text.trim().length) {
    dispatch(editToDo({ id, text, deadline, statusTask }));
    console.log(id, text, deadline, statusTask);
    updateText('');
    updateDeadline('');
    updateStatus('Обычный');
    onClose();
    }
  }

  return (
    <div className={popupClassName}>
      <div className={styles.popup__modal}>
        <button className={styles.popup__close} type='button' onClick={onClose} aria-label='Закрыть'></button>
        <form className={styles.form}>
          <input
            className={styles.form__input}
            name='text'
            type='text'
            placeholder="Новая задача"
            value={text}
            onChange={(e) => updateText(e.target.value)}
          />
          <input
            className={styles.form__input}
            name='deadline'
            type='datetime-local'
            value={deadline}
            onChange={(e) => updateDeadline(e.target.value)}
          />
          <select
            className={styles.form__input}
            name='status-popup'
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
          <button className={styles.form__button} onClick={handleUpdateTodo}>
            Изменить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;