import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const type = (event) => {
    let value = event.target.value > setInput(value);
  };
  return (
    <>
      <h1>{input}</h1>
      <input type="text" onChange={type} />
      <button>reset</button>
    </>
  );
}
export default Input;