import EditTaskForm from "./EditForm";
import { useState } from "react";
import taskData from "../utilities/taskData";

export default function ToDoRow({ id, task, completed, setToDoList }) {
  const [toggle, setToggle] = useState(true);

  function handleDelete(e) {
    let answer = confirm("Are you sure you want to delete this item?");
    if (!answer) {
      return;
    }

    const updatedTaskData = taskData.filter((u) => u.id !== e.target.id);
    setToDoList(updatedTaskData);
    alert("Successfully Deleted!");
  }

  return (
    <>
      {toggle ? (
        <tr>
          <td>{task}</td>
          <td>
            <button onClick={() => setToggle((t) => !t)}>Edit</button>
          </td>
          <td>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </tr>
      ) : (
        <EditTaskForm
          setToggle={setToggle}
          id={id}
          task={task}
          completed={completed}
        />
      )}
    </>
  );
}
