import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './styles.css';


function App() {
  return (
    <div className='text-center'>
       <h1 >To-Do List 📖</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;