const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];

    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.id);

    case 'TOGGLE_COMPLETED':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );

    case 'UPDATE_TASK':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
      );

    default:
      return state;
  }
};

export default taskReducer;