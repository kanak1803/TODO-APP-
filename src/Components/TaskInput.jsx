import React, { useState } from "react";
import { addTask } from "../actions";
import { useDispatch } from "react-redux";

function TaskInput() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="task-input m-8   w-[500px] h-[50px] p-8 text-2xl rounded-2xl">
      <input
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px",
          width: "300px",
        }}
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
      />
      <button
        style={{
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          border: "solid 2px white",
          marginLeft: "20px",
        }}
        onClick={handleAddTask}
        onMouseOver={(e) => (e.target.style.backgroundColor = "darkgreen")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
