import "./App.css";
import TodoList from "./todolist";

function App() {
  function createTodo(text) {
    setIncompleteTodos([...incompleteTodos, { text, isCompleted: false }]);
  }

  return (
    <>
      <TodoList
        onCreateClick={createTodo}
      />
    </>
  );
}

export default App;
