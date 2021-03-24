import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
   const [input, setInput] = useState("");

   const dispatch = useDispatch();

   return (
      <div>
         <input
            type="text"
            // value={input}
            onChange={(e) => setInput(e.target.value)}
         />
         &nbsp;
         <button
            onClick={() =>
               dispatch({
                  type: "ADD",
                  payload: { title: input, active: true },
               })
            }
         >
            Add task
         </button>
      </div>
   );
};
export default AddTask;
