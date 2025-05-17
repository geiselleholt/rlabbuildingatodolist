import { useState } from "react";

export default function NewTaskForm({ dispatch }) {
  const [formData, setFormData] = useState({
    task: "",
  });

  function handleChange(e) {
    // console.log(e.target)
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      task: formData.task,
      completed: false,
    };

    dispatch({ type: "addTask", payload: newTask });

    setFormData({
      task: "",
    });
  }

  return (
    <div>
      <h2>Add A New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task:</label>
          <input
            id="task"
            type="text"
            name="task"
            placeholder="Ex: find that missing sock"
            onChange={handleChange}
            value={formData.task}
            required
          />
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
