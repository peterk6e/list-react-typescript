import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [days, setDays] = useState<number>(0);
  const [list, setList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDays(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskText: task, days: days };
    setList([...list, newTask]);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            className="task-input"
            type="text"
            placeholder="What do you have to do?"
            name="task"
            onChange={handleChange}
          />
          <input
            className="days-input"
            type="number"
            placeholder="in how many days?"
            name="days"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}> + Add </button>
      </div>
      <div className="list"></div>
    </div>
  );
};

export default App;
