
import React, { useState } from 'react';

const DeveloperPanel = () => {
  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks assigned to the developer
  const fetchTasks = async () => {
    try {
      // Make an API call to fetch tasks assigned to the logged-in developer
      const response = await fetch('/api/tasks');
      const data = await response.json();

      // Update the tasks state with the fetched data
      setTasks(data);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  // Function to mark a task as complete
  const completeTask = async (taskId) => {
    try {
      // Make an API call to mark the task as complete
      await fetch(`/api/tasks/${taskId}/complete`, {
        method: 'PUT',
      });

      // Update the tasks state to reflect the completed task
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, status: 'completed' };
          }
          return task;
        })
      );
    } catch (error) {
      console.log('Error completing task:', error);
    }
  };

  return (
    <div>
      <h2>Developer Panel</h2>

      <button onClick={fetchTasks}>Fetch Tasks</button>

      <h3>Tasks Assigned</h3>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} - {task.status === 'completed' ? 'Completed' : 'Not Completed'}
              {task.status !== 'completed' && (
                <button onClick={() => completeTask(task.id)}>Complete Task</button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned.</p>
      )}
    </div>
  );
};

export default DeveloperPanel;
