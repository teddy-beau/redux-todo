import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TaskList from "./components/TaskList";
import todoReducer from "./reducers/todoReducer";
import AddTask from "./components/AddTask";
import ToggleButtons from "./components/ToggleButtons";

function App() {
   const store = createStore(
      todoReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__()
   );
   return (
      <Provider store={store}>
         <h1>Todo List</h1>
         <AddTask />
         <TaskList />
         <ToggleButtons />
      </Provider>
   );
}

export default App;
