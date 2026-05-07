import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      {
        text: "Go to the store",
        isCompleted: true,
      },
      {
        text: "New Todo",
        isCompleted: false,
      },
    ],
  },
  reducers: {
    createTodo: (state) => {
      state.value = [
        ...state.value,
        {
          text: "New Todo",
          isCompleted: false,
        },
      ];
    },
    markTodoAsCompleted: (state) => {
      const text = "New Todo";
      const todo = state.value.find((t) => t.text === text);
      todo.isCompleted = true;
    },
    deleteTodo: (state) => {
      const text = "New Todo";
      state.value = state.value.filter((t) => t.text !== text);
    },
  },
});

export const { createTodo, markTodoAsCompleted, deleteTodo } =
  todoSlice.actions;
