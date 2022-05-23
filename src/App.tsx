import React, { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            className="task-input"
            type="text"
            placeholder="What do you have to do?"
          />
          <input
            className="days-input"
            type="number"
            placeholder="in how many days?"
          />
        </div>
        <button> + Add </button>
      </div>
      <div className="list"></div>
    </div>
  );
};

export default App;
