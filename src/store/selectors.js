import { createSelector } from '@reduxjs/toolkit';

export const selectAllTodos = state => state.todos.todos;
export const selectActiveFilter = state => state.filters;
console.log(selectAllTodos);
console.log(selectActiveFilter);

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, activeFilter) => {
  
  },
);
