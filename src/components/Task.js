import { useDispatch } from "react-redux";

const Task = ({ task, index }) => {
   const dispatch = useDispatch();

   return (
      <li
         className="container"
         style={{ textDecorationLine: task.active ? "none" : "line-through" }}
         onClick={() =>
            dispatch({
               type: "SET_STATUS",
               payload: { index: index },
            })
         }
      >
         {task.title}
      </li>
   );
};
export default Task;
