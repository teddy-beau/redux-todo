import { useDispatch, useSelector } from "react-redux";

const ToggleButtons = () => {
   const filter = useSelector((state) => {
      return state.filterReducer.filter;
   });
   const dispatch = useDispatch();
   return (
      <div>
         <h2>Filters</h2>
         <div>
            Show:{" "}
            <button
               onClick={() => dispatch({ type: "SHOW_ALL" })}
               disabled={filter === "all" && true}
            >
               All
            </button>
            &nbsp;
            <button
               onClick={() => dispatch({ type: "SHOW_ACTIVE" })}
               disabled={filter === "active" && true}
            >
               Active
            </button>
            &nbsp;
            <button
               onClick={() => dispatch({ type: "SHOW_COMPLETED" })}
               disabled={filter === "completed" && true}
            >
               Completed
            </button>
         </div>
      </div>
   );
};
export default ToggleButtons;
