import './App.css'
import 'react-icons/fa'
import Header from './Components/Header'
import Task from './Components/Task'
import TaskList from './Components/TaskList'
import { useTask } from './hooks/useTask'


function App() {

  const {tasks,
    tasksCount,
    pendingTasksCount,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask} 
    = useTask ();

   return (
    <div className= "card-to-do">
    <>
      <div className='counter-todos'>
      <h3>N° Tareas: {tasksCount}</h3>
      <h3>Pendientes: {pendingTasksCount}</h3>
    </div>
      <div className='add-todo'>
       <Header/>
       <Task handleNewTask={handleNewTask}/>
       <TaskList
       tasks={tasks}
       handleUpdateTask={handleUpdateTask}
       handleDeleteTask={handleDeleteTask}
       handleCompleteTask={handleCompleteTask}
       
       />

      </div>
    </>
    </div>
  )
}

export default App
