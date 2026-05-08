import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItems from "./TodoListItems";

export default function TodoList() {
  const todosAreLoading = useSelector(
    (state) => !state.loading.value.completed,
  );
  const todos = useSelector((state) => state.todos.value);
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {todos.map((todo, index) => (
            <TodoListItems todo={todo} key={index} />
          ))}
          <h3>Incomplete:</h3>
          {todos.map((todo, index) => (
            <TodoListItems todo={todo} key={index} />
          ))}
        </>
      )}
    </div>
  );
}
