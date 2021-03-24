import { useDispatch } from "react-redux";

const ToggleButtons = () => {
   const dispatch = useDispatch();
   return (
      <div>
         Show:{" "}
         <button onClick={() => dispatch({ type: "SHOW_ALL" })}>All</button>
         &nbsp;
         <button onClick={() => dispatch({ type: "SHOW_ACTIVE" })}>
            Active
         </button>
         &nbsp;
         <button onClick={() => dispatch({ type: "SHOW_COMPLETED" })}>
            Completed
         </button>
      </div>
   );
};
export default ToggleButtons;
