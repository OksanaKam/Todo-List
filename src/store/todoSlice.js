import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        query: '',
        status: 'Все',
        sortingName: 'Без сортировки',
        sortingDate: 'Без сортировки'
    },
    reducers: {
        addToDo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                deadline: action.payload.deadline,
                status: action.payload.status,
                completed: false,
            })
        },
        getToDo(state, action) {
          state.todos = action.payload.todos;
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
          state.status = action.payload.status;
          // state.todos = state.todos.filter(todo => todo.status === state.status);
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
  toggleToDo,
  removeToDo,
  setQuery,
  selectStatus,
  sortName,
  sortFinishedDate
} = todoSlice.actions;

export default todoSlice.reducer;
