import { useState } from "react";

export default function EditTaskForm({ task, completed, id, setIsEditing, setToDoList}) {
  const [formData, setFormData] = useState({
      task: task,
      completed: completed
  });

  function handleChange(e) {
    if (e.target.task == "completed") {
      setFormData({ ...formData, completed: !formData.completed });
    } else {
      setFormData({ ...formData, [e.target.task]: e.target.value });
    }
  }

  function handleSave(e) {
    const updatedTaskData = taskData.filter((u) => u.id !== e.target.id);
    setToDoList(updatedTaskData);
    alert("Task Updated");
    setIsEditing((t) => !t);
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          task="task"
          onChange={handleChange}
          value={formData.task}
        />
      </td>
      <td>
        completed:
        <input
          type="checkbox"
          onChange={handleChange}
          name="completed"
          checked={formData.completed}
        />
      </td>
      <td>
        <button onClick={handleSave}>Save</button>
      </td>
    </tr>
  );
}
