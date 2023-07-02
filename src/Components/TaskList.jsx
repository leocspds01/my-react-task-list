import { FaTrashAlt } from "react-icons/fa";

export default function TaskList () {
     return (
        <li>
        <span>
            <label htmlFor=' ' className="cointiner-done"></label>
        </span>
        <button className="btn-delete"><FaTrashAlt/></button>
    </li>
     )
}