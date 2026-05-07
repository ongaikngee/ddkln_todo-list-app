import TodoListItems from "./TodoListItems";

export default function TodoList({ completedTodos, incompletedTodos }) {
  return (
    <div>
      <h1>My Todos</h1>
      <p>New todo fom will go here....</p>

      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItems todo={todo} key={index} />
      ))}
      <h3>Incomplete:</h3>
      {incompletedTodos.map((todo, index) => (
        <TodoListItems todo={todo} key={index} />
      ))}
    </div>
  );
}
