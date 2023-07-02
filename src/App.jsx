import { useEffect, useState } from 'react'
import './App.css'
import 'react-icons/fa'
import Header from './Components/Header'
import Task from './Components/Task'
import TaskList from './Components/TaskList'
import TaskEdit from './Components/TaskEdit'
const TASKS = [
  {
    id: 1,
    task: 'ir al gym'
  },
  {
    id: 2,
    task: 'ir de compras'
  },
  {
    id: 3,
    task: 'ir a la cita medica'
  }
];

function App() {
  const [todos, setTodos] = useState([]);

  const addTask =(taskName) => {
    console.log(`task add from ${taskName}`);

    let newTask = [...todos];

    if (!todos. includes(taskName)) {
      newTask = [...newTask, taskName];
    } else {
      newTask= newTask.filter((task) => taskName !=task);
    }

    setTodos(newTask);
    localStorage.setItem("todos", JSON,stringify(newTask));
  }

  useEffect(() =>{
    const localStorageData = localStorage.getItem("todos");
    const storedTodos = JSON.parse(localStorageData);

    setTodos(storedTodos);
  },[])
  
  return (
    <>
      <div>
       <Header/>
       <Task todos={TASKS}/>
       <TaskEdit
       key={TASKS.name}
       name={TASKS.name}
       onAddtask = {addTask}
       />
       <TaskList/>

      </div>
    </>
  )
}

export default App
