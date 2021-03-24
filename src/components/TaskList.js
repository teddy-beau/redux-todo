import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
   const tasks = useSelector((state) => {
      return state.todoReducer.tasks;
   });

   const filter = useSelector((state) => {
      return state.filterReducer.filter;
   });

   let filteredTasks = [];
   if (filter === "all") {
      filteredTasks = [...tasks];
   } else if (filter === "active") {
      for (let i = 0; i < tasks.length; i++) {
         if (tasks[i].active) {
            filteredTasks.push(tasks[i]);
         }
      }
   } else {
      for (let i = 0; i < tasks.length; i++) {
         if (!tasks[i].active) {
            filteredTasks.push(tasks[i]);
         }
      }
   }

   return (
      <div className="container">
         <h2>My tasks</h2>
         {tasks.length > 0 ? (
            <ul>
               {filteredTasks.map((elem, index) => {
                  return <Task task={elem} index={index} key={index} />;
               })}
            </ul>
         ) : (
            <p>No tasks</p>
         )}
      </div>
   );
};
export default TaskList;
