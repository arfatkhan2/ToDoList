// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompleted } from './redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const showCompleted = useSelector(state => state.showCompleted);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => showCompleted || !task.completed);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleCompleted = (taskId) => {
    dispatch(toggleTaskCompleted(taskId));
  };

  return (
    <div>
      {showCompleted && (
        <ul className="list-group">
          {filteredTasks.map(task => (
            <li key={task.id} className="list-group-item mb-2">
              <div className="rounded d-flex flex-column align-items-center">
                <span className={`bold mb-2 ${task.completed ? 'completed' : ''}`}>{task.text}</span>
                <button className="btn btn-danger rounded-pill mr-2" onClick={() => handleDelete(task.id)}>Delete</button>
                <button className="btn btn-secondary rounded-pill" onClick={() => handleToggleCompleted(task.id)}>
                  {task.completed ? 'Mark Incomplete ❎' : 'Mark Complete ✅'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
