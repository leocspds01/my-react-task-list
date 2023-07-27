import Header from './Components/Header';
import Task from './Components/Task';
import TaskList from './Components/TaskList';
import { useTask } from './hooks/useTask';

const {tasks,
    tasksCount,
    pendingTasksCount,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask} 
    = useTask ();

export default function TareaPage(){
    return (
        <div className= "card-to-do">
    <>
      <div className='counter-todos'>
      <h3>N° Tareas: {tasksCount}</h3>
      <h3>Pendientes: {pendingTasksCount}</h3>
    </div>
      <div className='add-todo'>
       <Header />
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