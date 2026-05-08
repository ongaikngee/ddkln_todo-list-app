import axios from "axios";
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from "./loadingSlice";
import { todosUpdated } from "./todoSlice";

export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  try {
    const response = await axios.get("http://localhost:3000/api/todos");
    const todos = response.data;
    console.log(todos);
    dispatch(loadingCompleted(todos));
  } catch (e) {
    loadingFailed(e);
  }
};


export const createTodo = (newToDoText) => async (dispatch, getState) => {
    try {
        const response = await axios.post("http://localhost:3000/api/todos", {text: newToDoText});
        const newTodo = response.data;
        const updatedTodos = getState().todos.value.concat(newTodo)
        dispatch(todosUpdated(updatedTodos));
    } catch(e) {
        console.log(e)
    }
}

export const deleteTodo = (todoId) => async (dispatch, getState) => {
    try {
        await axios.delete("http://localhost:3000/api/todos/" + todoId);
        const updatedTodos = getState().todos.value.filter(t => t.id !== todoId)
        dispatch(todosUpdated(updatedTodos));
    } catch(e) {
        console.log(e)
    }
}

export const markTodoAsCompleted = (todoId) => async (dispatch, getState) => {
    try {
        const response = await axios.put("http://localhost:3000/api/todos/" + todoId, {isCompleted: true});
        const updateTodo = response.data;
        const updatedTodos = getState().todos.value.map(t=>t.id === todoId ? updateTodo : t)
        dispatch(todosUpdated(updatedTodos));
    } catch(e) {
        console.log(e)
    }
}