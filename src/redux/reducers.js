// reducers.js
import { ADD_TASK, DELETE_TASK, TOGGLE_VIEW_COMPLETED, TOGGLE_TASK_COMPLETED, LOAD_TASKS } from './actions';

const initialState = {
  tasks: [],
  showCompleted: false, // Initially hide completed tasks
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case TOGGLE_VIEW_COMPLETED:
      return {
        ...state,
        showCompleted: !state.showCompleted,
      };
    case TOGGLE_TASK_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
