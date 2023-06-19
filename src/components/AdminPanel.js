import React, { useState } from 'react';

const AdminPanel = ({ createProject }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(projectName);
    setProjectName('');
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AdminPanel;
