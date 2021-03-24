const initialState = { tasks: [] };

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD":
         const addTask = [...state.tasks];
         addTask.push(action.payload);
         return {
            ...state,
            tasks: addTask,
         };
      case "SET_STATUS":
         const setTask = [...state.tasks];
         if (setTask[action.payload.index].active) {
            setTask[action.payload.index].active = false;
         } else {
            setTask[action.payload.index].active = true;
         }
         return {
            ...state,
            tasks: setTask,
         };
      default:
         return state;
   }
};

export default todoReducer;
