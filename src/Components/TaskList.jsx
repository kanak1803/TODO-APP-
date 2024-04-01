// TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../actions";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatching the action
  };
  const handleToggleTaskCompletion = (taskId, completed) => {
    dispatch(toggleTaskCompletion(taskId, !completed)); // Toggle completion state
  };

  return (
    <div className="task-list">
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "20px", color: "white" }}>
            <span style={{ fontSize: "20px" }}>{task.text}</span>
            <button
              style={{
                backgroundColor: "green",
                color: "#ffffff",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onClick={() =>
                handleToggleTaskCompletion(task.id, task.completed)
              }
            >
              {task.completed ? "Completed" : "Did it ?"}
            </button>
            <button
              style={{
                backgroundColor: "#ff0000",
                color: "#ffffff",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
