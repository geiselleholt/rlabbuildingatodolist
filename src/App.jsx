import { useState } from 'react'
import './App.css'
import NewTaskForm from './compenents/NewTaskForm'
import ToDoTable from './compenents/ToDoTable'
import taskData from './utilities/taskData'

function App() {
  const [toDoList, setToDoList] = useState(taskData);


  console.log(`App: ${toDoList}`)
  return (
    <>
      <h1>To Do List</h1>
      <NewTaskForm toDoList={toDoList} setToDoList={setToDoList} />
      <br />
      <ToDoTable toDoList={toDoList}/>
    </>
  )
}

export default App
