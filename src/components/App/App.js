import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, getToDo, editToDo, setQuery } from '../../store/todoSlice';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './styles.module.scss'
import Header from '../Header/Header';
import Sorting from '../Sorting/Sorting';
import SearchForm from '../SearchForm/SearchForm';
import Popup from '../Popup/Popup';

function App() {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const [statusTask, setStatusTask] = useState('');
  // const [editingId, setEditingId] = useState(null);
  const [validMessage, setValidMessage] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const query = useSelector(state => state.query);
  const [allTodos, setAllTodos] = useState(todos);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
/*
  useEffect(() => {
    setAllTodos(todos);
  }, [todos]);
*/
  useEffect(() => {
    setValidMessage('');
  }, [query]);

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addToDo({ text, deadline, statusTask }));
      setText('');
      setDeadline('');
      setStatusTask('Обычный');
    }
  }

  const handleEditTodo = () => {
    dispatch(editToDo({ text, deadline, statusTask }));
    setText(text);
    setDeadline(deadline);
    setStatusTask(statusTask);
  }

  const handleUpdateTodo = () => {
    if (text.trim().length) {
      dispatch(editToDo({ text, deadline, statusTask }));
      console.log(text, deadline, statusTask);
      setText('');
      setDeadline('');
      setStatusTask('Обычный');
    }
  }

  const onChange = (e) => {
    dispatch(setQuery(e.target.value));
  }

  const handleEditTodoClick = ({ id, text, deadline, statusTask }) => {
    dispatch(editToDo({ id, text, deadline, statusTask }));
    setIsPopupOpen(true);
    setText(text);
    setDeadline(deadline);
    setStatusTask(statusTask);
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
