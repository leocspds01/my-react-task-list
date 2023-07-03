import TaskItem from "./TaskItem";

export default function TaskList ({
    task,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask,
}) {
     return (
        <ul>
            {task.map(task =>( 
            <TaskItem
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            />
            ))}
        </ul>
        
     )
}