
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: 'DELETE_TASK',
    payload: taskId,
  };
};

export const toggleTaskCompletion = (taskId) => {
  return {
    type: 'TOGGLE_TASK_COMPLETION',
    payload: taskId,
  };
};
