// actions.js

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_VIEW_COMPLETED = 'TOGGLE_VIEW_COMPLETED';
export const TOGGLE_TASK_COMPLETED = 'TOGGLE_TASK_COMPLETED';
export const LOAD_TASKS = 'LOAD_TASKS';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleViewCompleted = () => ({
  type: TOGGLE_VIEW_COMPLETED,
});

export const toggleTaskCompleted = (taskId) => ({
  type: TOGGLE_TASK_COMPLETED,
  payload: taskId,
});

// Action creator for loading tasks from local storage
export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: tasks,
});
