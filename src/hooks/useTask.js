import {useEffect, useReducer} from "react"
import { taskReducer } from "../taskReducer";


export const useTask = () => {
    const initialStates = [];

    const init = () => {
        return JSON.parse (localStorage.getItem('task')) || []
    }

    const [task,dispatch] = useReducer(
        taskReducer, 
        initialStates, 
        init
        );
    
    const taskCount = task.length
    const pendingTaskCount = task.filter(task => !task.complete).length

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task))
    }, [task])
    
    const handleNewTask = task => {
        const action = {
            type: "Add task",
            payload: task,
        }

        dispatch (action)
    }

    const handleDeleteTask = id => {
        const action = {
            type: 'Delete task',
            payload: id,
        }
        dispatch (action);
    }

    const handleCompleteTask = id => {
        const action ={
            type: 'Complete Task',
            payload: id
        }

        dispatch (action)
    }
    const handleUpdateTask = (id, description) => {
        const action ={
            type: 'Complete Task',
            payload: {
                id, 
                description
            }
        }
        dispatch (action);
    }

    return {
        task,
        taskCount,
        pendingTaskCount,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask
    }
}