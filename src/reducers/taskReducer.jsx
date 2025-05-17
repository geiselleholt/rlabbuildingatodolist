const taskReducer = (state, action) => {
  switch (action.type) {
    case 'addTask':
      return [...state, action.payload];

    case 'deleteTask':
      return state.filter(task => task.id !== action.payload.id);

    case 'toggleCompleted':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );

    case 'updateTask':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
      );

    default:
      return state;
  }
};

export default taskReducer;