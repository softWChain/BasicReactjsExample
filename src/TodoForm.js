const TodoForm = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.input}
        onChange={props.handleChange}
        name="todo"
        placeholder="TODO List"
      ></input>
    </div>
  );
};

export default TodoForm;
