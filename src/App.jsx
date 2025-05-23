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
        <section class="task">
          <AddTaskForm dispatch={dispatch} />
        </section>
        <br />
        <section class="task">
          <ToDoTable toDoList={toDoList} dispatch={dispatch} />
        </section>
      </div>
    </>
  );
}

export default App;
