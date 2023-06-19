import React, { useState } from 'react';

const Project = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to fetch tasks for the project
  const fetchTasks = async () => {
    try {
      // Make an API call to fetch tasks for the project
      const response = await fetch('/api/projects/:projectId/tasks');
      const data = await response.json();

      // Update the tasks state with the fetched data
      setTasks(data);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  // Function to create a new task
  const createTask = async () => {
    try {
      // Make an API call to create a new task for the project
      const response = await fetch('/api/projects/:projectId/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTask }),
      });

      const data = await response.json();

      // Update the tasks state with the newly created task
      setTasks((prevTasks) => [...prevTasks, data]);

      // Reset the newTask state
      setNewTask('');
    } catch (error) {
      console.log('Error creating task:', error);
    }
  };

  return (
    <div>
      <h2>Project Page</h2>

      <button onClick={fetchTasks}>Fetch Tasks</button>

      <h3>Tasks</h3>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} - {task.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task title"
        />
        <button onClick={createTask}>Create Task</button>
      </div>
    </div>
  );
};

export default Project;
