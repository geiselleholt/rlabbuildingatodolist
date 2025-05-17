import ToDoRow from "./ToDoRow";

export default function ToDoTable({ toDoList, dispatch }) {
  const sortedToDoList = [...toDoList].sort((a, b) => b.id - a.id);

  const rows = sortedToDoList.map((task) => (
    <ToDoRow key={task.id} {...task} dispatch={dispatch} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Completed</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
