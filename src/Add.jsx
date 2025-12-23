import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, value: "Hi" },
    { id: 2, value: "Bye" },
  ]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), value: input }]);
      setInput("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addTodo}>Add</button>

      <ul style={{ listStylePosition: "inside", padding: 0 }}>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;