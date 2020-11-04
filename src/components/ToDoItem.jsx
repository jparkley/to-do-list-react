import React, { useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li>
        <span
          onClick={handleClick}
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {props.toDoItem}{" "}
        </span>
        <DeleteOutlineIcon
          style={{
            fontSize: "1.05rem",
            color: "gray",
            verticalAlign: "middle",
            display: "inline-flex"
          }}
        />
      </li>
    </div>
  );
}

export default ToDoItem;
