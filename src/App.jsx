import './App.css'
import 'react-icons/fa'
import Header from './Components/Header'
import Task from './Components/Task'
import TaskList from './Components/TaskList'
import { useTask } from './hooks/useTask'


function App() {

  const {task,
    taskCount,
    pendingTaskCount,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask} 
    = useTask ();

   return (
    <>
    <div className='counter-todos'>
      <h3>N° Tareas: {taskCount}</h3>
      <h3>Pendientes: {pendingTaskCount}</h3>
    </div>
      <div>
       <Header/>
       <Task handleNewTask={handleNewTask}/>
       <TaskList
       task={task}
       handleUpdateTask={handleUpdateTask}
       handleDeleteTask={handleDeleteTask}
       handleCompleteTask={handleCompleteTask}
       
       />

      </div>
    </>
  )
}

export default App
