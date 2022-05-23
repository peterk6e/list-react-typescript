import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
}

const Task = ({ task }: Props) => {
  return <div>{task.taskText}</div>;
};

export default Task;
