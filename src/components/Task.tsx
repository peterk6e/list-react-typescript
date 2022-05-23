import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(TaskToDelete: string): void;
}

const Task = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskText}</span>
        <span>{task.days} day(s)</span>
      </div>
      <button onClick={() => completeTask(task.taskText)}>X</button>
    </div>
  );
};

export default Task;
