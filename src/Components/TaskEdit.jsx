import { FaEdit } from "react-icons/fa";

export default function TaskEdit ({task, handleUpdateTask}) {
     return (
       <form>
       <input
       type='text'
       className='input-update'
       name="description"
       value= {task.description}
       placeholder="que hay que hacer"
       />,
       <button className="btn-edit" type="submit"><FaEdit/></button>
       </form>         
    )
}