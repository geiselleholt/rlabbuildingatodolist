import { useState } from "react";

export default function EditTaskForm({
  id,
  task,
  completed,
  setIsEditing,
  dispatch,
}) {
  const [formData, setFormData] = useState({
    task: task,
    completed: completed,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSave() {
    dispatch({
      type: "updateTask",
      payload: {
        id: id,
        updatedTask: formData,
      },
    });

    setIsEditing(false);
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
        />
      </td>
      <td>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </td>
    </tr>
  );
}
