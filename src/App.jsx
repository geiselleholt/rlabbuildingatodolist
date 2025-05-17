import "./App.css";
import { useReducer } from "react";
import taskData from "./utilities/taskData";
import ToDoTable from "./compenents/ToDoTable";
import taskReducer from "./reducers/taskReducer";
import AddTaskForm from "./compenents/AddTaskForm";

function App() {
  const [toDoList, dispatch] = useReducer(taskReducer, taskData);

  return (
    <>
      <h1>To Do List</h1>
      <div id="mainDiv">
        <AddTaskForm dispatch={dispatch} />
        <br />
        <ToDoTable toDoList={toDoList} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
