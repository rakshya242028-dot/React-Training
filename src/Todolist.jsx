import { useState } from "react";
import "./App.css";
import { useFormState } from "react-dom";


import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}



function App() {    //creates a component named App??
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([
    
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

