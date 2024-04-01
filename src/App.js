import React from "react";
import "./App.css";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App flex min-h-screen flex-col items-center p-24 ">
      <h1 className="text-6xl m-5 text-white">Welcome to TODO App</h1>
      <p className="text-2xl mt-[10px] mb-[50px] text-white">
        "Get your things done first!"
      </p>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
