const initialState = { filter: "all" };

const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case "SHOW_ALL":
         return {
            ...state,
            filter: "all",
         };
      case "SHOW_ACTIVE":
         return {
            ...state,
            filter: "active",
         };
      case "SHOW_COMPLETED":
         return {
            ...state,
            filter: "completed",
         };
      default:
         return state;
   }
};

export default filterReducer;
