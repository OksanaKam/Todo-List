import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../store/todoSlice';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './styles.module.scss'
import Header from '../Header/Header';
import Sorting from '../Sorting/Sorting';

function App() {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addToDo({ text, deadline, status }));
      setText('');
      setDeadline('');
      setStatus('Обычный')
    }
  }


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
        <Sorting />
        <TodoList />
      </div>
    </>
  );
}

export default App;
