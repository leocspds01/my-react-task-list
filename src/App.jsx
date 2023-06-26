import './App.css';
import  Header  from './Components/Header';
import { Task } from './Components/Task';
import {TaskList} from './Components/TaskList';


function App() {
  return (
    <div className='App'>
      <Header titulo='Todo App'/>;
      <Task/>;
    </div>,
    <div className='App'>
    <input className='box' type="textArea" id="name" placeholder="Add new task"/> Add New todo
    <button className='btn-add' >+</button>
    </div>,  
    <div className='counter-task'>
      <h4>Nº Tareas: 4</h4> 
      <h4>Pendientes: 3</h4>
     </div>,
     <div>
      <TaskList/>;
    </div>

 )
}

export default App
