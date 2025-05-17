import { useState } from "react";
import EditTaskForm from "./EditTaskForm";

export default function ToDoRow({ id, task, completed, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleToggleCompleted() {
    dispatch({ type: "toggleCompleted", payload: { id: id } });
  }

  function handleDelete() {
    let answer = confirm("Are you sure you want to delete this task?");
    if (!answer) {
      return;
    }
    dispatch({ type: "deleteTask", payload: { id: id } });
  }

  return (
    <>
      {isEditing ? (
        <EditTaskForm
          id={id}
          task={task}
          completed={completed}
          setIsEditing={setIsEditing}
          dispatch={dispatch}
        />
      ) : (
        <tr>
          <td>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleToggleCompleted}
            />
          </td>
          <td>{task}</td>
          <td>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete} disabled={!completed}>
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
