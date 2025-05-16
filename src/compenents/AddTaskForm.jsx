import { useState } from "react";
import taskData from '../utilities/taskData.jsx'

export default function NewTaskForm({ toDoList, setToDoList }) {
  const [formData, setFormData] = useState({
    id: "",
    task: "",
    completed: "false",
  });

  function handleChange(e) {
    if (e.target.name == "completed") {
      setFormData({ ...formData, completed: !formData.completed });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

      let newTaskData = taskData.append(formData)

      setToDoList(newTaskData);

  }

  return (
    <>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            name="task"
            placeholder="Ex: find that missing sock"
            onChange={handleChange}
            value={formData.task}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={formData.completed}
            name="completed"
            onChange={handleChange}
          />
          Completed:
        </label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
