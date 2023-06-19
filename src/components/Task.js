import React, { useState } from 'react';

const Task = ({ task }) => {
  const [status, setStatus] = useState(task.status);

  // Function to start the task
  const startTask = async () => {
    try {
      // Make an API call to start the task
      await fetch(`/api/tasks/${task.id}/start`, {
        method: 'PUT',
      });

      // Update the status state to reflect the task as started
      setStatus('started');
    } catch (error) {
      console.log('Error starting task:', error);
    }
  };

  // Function to end the task
  const endTask = async () => {
    try {
      // Make an API call to end the task
      await fetch(`/api/tasks/${task.id}/end`, {
        method: 'PUT',
      });

      // Update the status state to reflect the task as ended
      setStatus('ended');
    } catch (error) {
      console.log('Error ending task:', error);
    }
  };

  // Function to complete the task
  const completeTask = async () => {
    try {
      // Make an API call to complete the task
      await fetch(`/api/tasks/${task.id}/complete`, {
        method: 'PUT',
      });

      // Update the status state to reflect the task as completed
      setStatus('completed');
    } catch (error) {
      console.log('Error completing task:', error);
    }
  };

  return (
    <div>
      <h3>Task: {task.title}</h3>
      <p>Status: {status}</p>

      {status === 'not completed' && (
        <button onClick={startTask}>Start Task</button>
      )}

      {status === 'started' && (
        <button onClick={endTask}>End Task</button>
      )}

      {status === 'ended' && (
        <button onClick={completeTask}>Complete Task</button>
      )}
    </div>
  );
};

export default Task;
