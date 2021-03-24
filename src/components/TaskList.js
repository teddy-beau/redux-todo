import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
   const tasks = useSelector((state) => {
      return state.tasks;
   });
   return (
      <div className="container">
         <h2>My tasks:</h2>
         {tasks.length > 0 ? (
            <ul>
               {tasks.map((elem, index) => {
                  console.log(elem);
                  return <Task task={elem} index={index} key={index} />;
               })}
            </ul>
         ) : (
            <p>No tasks yet!</p>
         )}
      </div>
   );
};
export default TaskList;
