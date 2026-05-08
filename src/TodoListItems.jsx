import { useDispatch } from "react-redux";
import { markTodoAsCompleted } from "./todoSlice";
import { deleteTodo } from "./thunks";

export default function TodoListItems({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Completed!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item</button>
      ) : (
        <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>
          Mark as Completed
        </button>
      )}
    </div>
  );
}
