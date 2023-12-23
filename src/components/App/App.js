import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, getToDo, setQuery } from '../../store/todoSlice';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './styles.module.scss'
import Header from '../Header/Header';
import Sorting from '../Sorting/Sorting';
import SearchForm from '../SearchForm/SearchForm';

function App() {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');
  const [validMessage, setValidMessage] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const query = useSelector(state => state.query)

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addToDo({ text, deadline, status }));
      setText('');
      setDeadline('');
      setStatus('Обычный')
    }
  }

  const onChange = (e) => {
    dispatch(setQuery(e.target.value));
  }

  useEffect(() => {
    if (query) {
      dispatch(getToDo(todos?.text ? todos.text : []));
    }
  }, [todos, dispatch, query]);

  useEffect(() => {
    setValidMessage('');
  }, [query]);


  return (
    <>
      <Header />
      <div className={styles.main}>
        <NewTodoForm
          text={text}
          deadline={deadline}
          status={status}
          updateText={setText}
          updateDeadline={setDeadline}
          updateStatus={setStatus}
          handleAction={handleAction}
        />
        <SearchForm query={query} validMessage={validMessage} onChange={onChange}  />
        <Sorting />
        <TodoList />
      </div>
    </>
  );
}

export default App;
