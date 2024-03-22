import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input id={props.id}  onChange={props.uponChange} type="text" value={props.value} />
      <button onClick={props.uponClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;