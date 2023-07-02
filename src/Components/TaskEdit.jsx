import { FaEdit } from "react-icons/fa";

export default function TaskEdit ({taskName}) {
    const addTask = () => {
    onAddtask(taskName)
    };
    return (
     <>
      <h2>
        {taskName}
      </h2>
     </>,
     <form>
       <input
       type='text'
       className='input-update'
       name="description"
       value='estudiar ingles'
       placeholder="que hay que hacer"
       />,
       <button onClick={addTask} className="btn-edit" type="submit"><FaEdit/></button>
       </form>         
    )
}