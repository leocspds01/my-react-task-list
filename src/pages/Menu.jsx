import { Link } from "react-router-dom";

export default function Menu(){
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="sobre-nosotros">Sobre Nosotros</Link>
            </li>
            <li>
                <Link to="Tareas">Tareas</Link>
            </li>

        </ul>
    </nav>
}