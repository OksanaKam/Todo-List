import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, getToDo, editToDo, setQuery } from '../../store/todoSlice';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './styles.module.scss'
import Header from '../Header/Header';
import Sorting from '../Sorting/Sorting';
import SearchForm from '../SearchForm/SearchForm';
// import Popup from '../Popup/Popup';

function App() {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const [statusTask, setStatusTask] = useState('');
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
      setStatusTask('Обычный');
    }
  }

  const handleUpdateTodo = () => {
      dispatch(editToDo({ id: id, text, deadline, statusTask }));
      console.log('updateTodo', isEdit);
      console.log(id, text, deadline, statusTask);
      setText('');
      setDeadline('');
      setStatusTask('Обычный');
      setIsEdit(false);
  }

  const onChange = (e) => {
    dispatch(setQuery(e.target.value));
  }

  const handleEditTodoClick = ({ id, text, deadline, statusTask }) => {
    setIsEdit(true);
    dispatch(editToDo({ id, text, deadline, statusTask }));
    // setIsPopupOpen(true);
    setText(text);
    setDeadline(deadline);
    setStatusTask(statusTask);
    console.log('editTodo', isEdit);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  }

  return (
    <>
      <Header />
      <div className={styles.main}>
        <NewTodoForm
          text={text}
          deadline={deadline}
          statusTask={statusTask}
          updateText={setText}
          updateDeadline={setDeadline}
          updateStatus={setStatusTask}
          handleAction={handleAction}
          handleUpdateTodo={handleUpdateTodo}
          isEdit={isEdit}
        />
        <SearchForm query={query} validMessage={validMessage} onChange={onChange}  />
        <Sorting />
        <TodoList
          handleEditTodoClick={handleEditTodoClick}
          isOpen={isPopupOpen}
          onClose={closePopup}
          updateText={setText}
          updateDeadline={setDeadline}
          updateStatus={setStatusTask}
        />
      </div>
    </>
  );
}

export default App;
