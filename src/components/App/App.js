import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, editToDo, setQuery } from '../../store/todoSlice';
import TodoList from '../TodoList/TodoList';
import styles from './styles.module.scss'
import Header from '../Header/Header';
import Sorting from '../Sorting/Sorting';
import SearchForm from '../SearchForm/SearchForm';
import Popup from '../Popup/Popup';

function App() {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const [statusTask, setStatusTask] = useState('Обычный');
  const [id, setId] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [validMessage, setValidMessage] = useState('');
  const dispatch = useDispatch();
  const query = useSelector(state => state.query);
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  useEffect(() => {
    setValidMessage('');
  }, [query]);

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addToDo({ id: new Date().toISOString(), text, deadline, statusTask }));
      setText('');
      setDeadline('');
      setStatusTask('');
      closePopup();
    }
  }

  const handleUpdateTodo = () => {
    if (text.trim().length) {
      dispatch(editToDo({ id, text, deadline, statusTask }));
      setText('');
      setDeadline('');
      setStatusTask('Обычный');
      setIsEdit(false);
      closePopup();
    }
  }
/*
  const onChange = (e) => {
    dispatch(setQuery(e.target.value));
  }
*/
  const handleEditTodoClick = ({ id, text, deadline, statusTask }) => {
    setIsEdit(true);
    dispatch(editToDo({ id, text, deadline, statusTask }));
    setIsPopupOpen(true);
    setId(id);
    setText(text);
    setDeadline(deadline);
    setStatusTask(statusTask);
  }

  const handleAddTodoClick = () => {
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  }

  return (
    <>
      <Header />
      <div className={styles.main}>
        <button
          className={styles.button}
          type='button'
          onClick={handleAddTodoClick}
          aria-label='Добавить задачу'
        >
          Добавить задачу
        </button>
        <SearchForm query={query} validMessage={validMessage} onChange={(e) => dispatch(setQuery(e.target.value))}  />
        <Sorting />
        <TodoList
          handleEditTodoClick={handleEditTodoClick}
        />
        <Popup
          isOpen={isPopupOpen}
          onClose={closePopup}
          isEdit={isEdit}
          id={id}
          text={text}
          deadline={deadline}
          statusTask={statusTask}
          updateText={setText}
          updateDeadline={setDeadline}
          updateStatus={setStatusTask}
          handleAction={handleAction}
          handleUpdateTodo={handleUpdateTodo}
        />
      </div>
    </>
  );
}

export default App;
