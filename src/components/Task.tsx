import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
}

const Task = ({ task }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskText}</span>
        <span>{task.days}</span>
      </div>
      <button>X</button>
    </div>
  );
};

export default Task;
