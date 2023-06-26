import {FaTrashAlt} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';

export const Task = (props) => {
    const {NameTask} = props;
    return (
        <li>
            <input type="checkbox" className='box' /> 
            {NameTask}
            <button className="btn-delete"><FaTrashAlt/></button>
            <button className="btn-edit"><FaEdit/></button>

        </li>
    )
}