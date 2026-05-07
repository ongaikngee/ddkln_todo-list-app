import NewTodoForm from "./NewTodoForm";
import TodoListItems from "./TodoListItems";

export default function TodoList({
  completedTodos,
  incompletedTodos,
  onCreateClick,
  onDeleteClicked,
  onCompletedClicked,
}) {
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm onCreateClick={onCreateClick} />
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItems
          todo={todo}
          key={index}
          onDeleteClicked={onDeleteClicked}
        />
      ))}
      <h3>Incomplete:</h3>
      {incompletedTodos.map((todo, index) => (
        <TodoListItems
          todo={todo}
          key={index}
          onCompletedClicked={onCompletedClicked}
        />
      ))}
    </div>
  );
}
