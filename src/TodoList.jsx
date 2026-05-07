import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItems from "./TodoListItems";

export default function TodoList({
  onCreateClick,
  onDeleteClicked,
  onCompletedClicked,
}) {

  const todos = useSelector(state => state.todos.value)
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm onCreateClick={onCreateClick} />
      <h3>Completed:</h3>
      {todos.map((todo, index) => (
        <TodoListItems
          todo={todo}
          key={index}
          onDeleteClicked={onDeleteClicked}
        />
      ))}
      <h3>Incomplete:</h3>
      {todos.map((todo, index) => (
        <TodoListItems
          todo={todo}
          key={index}
          onCompletedClicked={onCompletedClicked}
        />
      ))}
    </div>
  );
}
