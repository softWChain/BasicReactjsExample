import "./styles.css";
import * as React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const { useState} = React;

export default function App(props) {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  const handleClick = (e) => {
    if (input !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: input,
        isCompleted: false
      };
      setArray([...array, taskDetails]);

      setInput("");
      e.preventDefault();
    }
  };

  const deleteTODO = (e,id) => {
    e.preventDefault();
    if(array !== []){
      setArray(array.filter((t) => t.id != id));
    }
  }

  const handleChange = e => setInput(e.target.value);
  

  return (
    <div className="App">
      <h1>This is CodeSandbox</h1>
      <h2>Lets ADD some TASK!</h2>
      <form>
        <TodoForm handleChange={handleChange} input={input} setInput={setInput} />
        <TodoList deleteTODO={deleteTODO} array={array} handleClick={handleClick} />
      </form>
    </div>
  );
}
