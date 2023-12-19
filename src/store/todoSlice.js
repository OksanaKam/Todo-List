import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
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
        toggleToDo(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;

        },
        removeToDo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        selectStatus(state, action) {
          state.todos = state.todos.filter(todo => todo.status === action.payload);
        },
        sortName(state, action) {

        },
        sortFinishedDate(state, action) {
          const filteredTasks =  state.todos.sort((a,b) => {
            return a.action.payload.deadline - b.action.payload.deadline;
          });
          state.todos = filteredTasks;
        }
    },
});

export const { addToDo, toggleToDo, removeToDo, selectStatus, sortName, sortDate } = todoSlice.actions;

export default todoSlice.reducer;
