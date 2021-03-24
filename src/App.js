import "./App.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import TaskList from "./components/TaskList";
import todoReducer from "./reducers/todoReducer";
import AddTask from "./components/AddTask";
import ToggleButtons from "./components/ToggleButtons";
import filterReducer from "./reducers/filterReducer";

function App() {
   const store = createStore(
      combineReducers({ todoReducer, filterReducer }),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__()
   );
   return (
      <Provider store={store}>
         <h1>Todo List</h1>
         <h2>Made with React x Redux</h2>
         <AddTask />
         <TaskList />
         <ToggleButtons />
      </Provider>
   );
}

export default App;
