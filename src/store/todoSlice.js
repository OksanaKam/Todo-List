import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    query: '',
    statusTask: 'Все',
    sortingName: 'Без сортировки',
    sortingDate: 'Без сортировки'
  },
  reducers: {
    addToDo(state, action) {
      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
        deadline: action.payload.deadline,
        statusTask: action.payload.statusTask,
        completed: false,
      })
    },
    getToDo(state, action) {
      state.todos = action.payload;
    },
    editToDo(state, action) {
      console.log(action);
      //state.todos = todoArray.map((item) => item.id === action.payload.id ? action.payload : item)

      const editedTodo = state.todos.find(todo => todo.id === action.payload.id ? action.payload : todo);
      if (editedTodo) {
        editedTodo.text = action.payload.text;
        editedTodo.deadline = action.payload.deadline;
        editedTodo.statusTask = action.payload.statusTask;
      }

    },
    toggleToDo(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;

    },
    removeToDo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    setQuery(state, action) {
      state.query = action.payload.query;
    },
    selectStatus(state, action) {
      console.log(state);
      console.log(action);
      state.statusTask = action.payload.statusTask;
      // state.todos = state.todos.filter(todo => todo.statusTask === state.statusTask);
    },
    sortName(state, action) {
      state.sortingName = action.payload.sortingName;

    },
    sortFinishedDate(state, action) {
      console.log(state);
      console.log(action);
      state.sortingDate = action.payload.sortingDate;
    }
  },
});

export const {
  addToDo,
  getToDo,
  editToDo,
  toggleToDo,
  removeToDo,
  setQuery,
  selectStatus,
  sortName,
  sortFinishedDate
} = todoSlice.actions;

export default todoSlice.reducer;
