const initialState = { tasks: [] };

const buttonReducer = (state = initialState, action) => {
   switch (action.type) {
      case "SHOW_ALL":
         return {
            ...state,
         };
      case "SHOW_ACTIVE":
         const activeTasks = [];
         for (let i = 0; i < state.tasks.length; i++) {
            if (state.tasks[i].active) {
               activeTasks.push(state.tasks[i]);
            }
         }
         return {
            ...state,
            tasks: activeTasks,
         };
      case "SHOW_COMPLETED":
         const completedTasks = [];
         for (let i = 0; i < state.tasks.length; i++) {
            if (!state.tasks[i].active) {
               completedTasks.push(state.tasks[i]);
            }
         }
         return {
            ...state,
            tasks: completedTasks,
         };

      // case "INACTIVE_BUTTON":

      default:
         return state;
   }
};

export default buttonReducer;
