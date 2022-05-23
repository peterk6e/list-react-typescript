import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import Task from "./components/Task";
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
    if (task) {
      const newTask = { taskText: task, days: days };
      setList([...list, newTask]);
      setDays(0);
      setTask("");
    }
  };

  const completeTask = (TaskToDelete: string): void => {
    setList(list.filter((task) => task.taskText !== TaskToDelete));
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            className="task-input"
            type="text"
            placeholder="What do you have to do?"
            value={task}
            name="task"
            onChange={handleChange}
          />
          <input
            className="days-input"
            type="number"
            placeholder="in how many days?"
            value={days}
            name="days"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}> + Add </button>
      </div>
      <div className="list">
        {list.map((task: ITask, key: number) => {
          return <Task key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
