import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>ADD</button>
      <div>
        <ul>
          {props.array.map((arrayy) => (
            <li key={arrayy.id}>
              {arrayy.value}
              <button onClick={(e) => props.deleteTODO(e,arrayy.id)} className="btn-dlt">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
