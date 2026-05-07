import { useState } from "react";
export default function NewTodoForm({ onCreateClick }) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          onCreateClick(inputText);
          setInputText("");
        }}
      >
        Create Todo
      </button>
    </div>
  );
}
