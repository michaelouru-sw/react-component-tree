import React, { useState } from "react";

function ToDoItem(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick(event) {
    setClicked(!clicked);
  }

  return clicked ? (
    <li onClick={props.removeItem} style={{ textDecoration: "line-through" }}>
      {props.content}
    </li>
  ) : (
    <li onClick={props.removeItem}>{props.content}</li>
  );
}

export default ToDoItem;
