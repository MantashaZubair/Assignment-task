import React from "react";
import { BsThreeDots } from "react-icons/bs";
const TaskItem = ({ tasks, toggleTask }) => {
  return (
    <div className="task-item">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <div className="threedot-icon">
            <BsThreeDots />
          </div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span
            className={task.completed ? "complete-task" : "incomplete-task"}
          >
            {task.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
