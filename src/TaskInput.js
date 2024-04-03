// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, toggleViewCompleted } from './redux/actions';


const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };

  const handleViewTasks = () => {
    dispatch(toggleViewCompleted());
  };

  return (
    <div className="add-task-button">
      <input type="text" placeholder="Input task here" value={task} onChange={handleInputChange} />
      <button className="btn btn-primary rounded-pill mx-1 " onClick={handleSubmit}><span className='bold'>Add Task 📝</span></button>
      <button className="btn btn-primary rounded-pill mx-1" onClick={handleViewTasks}><span className='bold'>View Tasks 🔍</span></button>
    </div>
  );
};

export default TaskInput;
