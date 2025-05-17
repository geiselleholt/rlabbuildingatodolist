import ToDoCategoryRow from "./ToDoCategoryRow";
import ToDoRow from "./ToDoRow";

export default function ToDoTable({ todoList }) {
    let rows = []; //array to put all table rows as they are built
    let toDo =  todoList 
    console.log(`Table: ${toDo}`)
  toDo.forEach((el, i) => {
    rows.push(<ToDoCategoryRow key={el.category} category={el.category} />);
    rows.push(<ToDoRow key={i} {...el} />); //push new task to rows array
  });

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
