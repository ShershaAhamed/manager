import React from 'react';
import { Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import ManagerPanel from './components/ManagerPanel';
import DeveloperPanel from './components/DeveloperPanel';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Route exact path="/" component={AdminPanel} />
      <Route path="/manager" component={ManagerPanel} />
      <Route path="/developer" component={DeveloperPanel} />

    </div>
  );
};

export default App;
