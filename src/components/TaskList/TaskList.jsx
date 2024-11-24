import React, { useState } from "react";
import { PiCloudSunDuotone } from "react-icons/pi";
import "../../styles/TaskList.css";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Deck Log 1200-1600", completed: true },
    {
      id: 2,
      title: "COVID-19 Health Guidelines",
      completed: false,
      due: "2 days",
    },
    { id: 3, title: "Steering Check", completed: false, due: "2 hour" },
    { id: 4, title: "ECDIS  Check", completed: false, due: "6 hour" },
  ]);
  const [taskinput, setTaskInput] = useState("");
  const currentDate = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: taskinput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="tasklist">
      <div className="taskList-header">
        <div>
          <h3>My Day</h3>
          <p>{formattedDate}</p>
        </div>
        <button className="cloud-icon">
          <PiCloudSunDuotone />
        </button>
      </div>

      <div className="tasklist-content">
        <TaskItem tasks={tasks} toggleTask={toggleTask} />
        <div className="addtask">
          <button className="task-btn" onClick={addTask}>
            +
          </button>
          <input
            type="text"
            value={taskinput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="task-input"
            placeholder="Add Todo Riminder"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
