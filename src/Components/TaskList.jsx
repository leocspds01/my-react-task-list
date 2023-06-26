import { Task } from "./Task";

export const TaskList = (props) => {
    
    return (
        <ul>
            <span >
                <p>
                <Task NameTask = "Ir al Trabajo"  />
                </p>
            </span> 
            <Task NameTask = "Comprar la comida del perro"  />            
            <Task NameTask = "Ir al Gym" />
            <Task NameTask = "Salir con mi Novia" />            
        </ul>
    )
}