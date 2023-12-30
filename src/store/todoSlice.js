import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    query: '',
    statusTask: '',
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
    editToDo(state, action) {
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
    },
    toggleToDo(state, action) {
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed} : todo);
    },
    removeToDo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    setQuery(state, action) {
      state.query = action.payload.query;
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
