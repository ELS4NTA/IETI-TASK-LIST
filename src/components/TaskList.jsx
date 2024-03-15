import { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = (props) => {
    const { tasks } = props;
    const [tasksList, setTasksList] = useState([]);

    const handleOnAddTask = () => {
        const { title, description } = taskDetails();
        const newTask = { title, description, completed: false };
        const newTaskList = [...tasksList, newTask];
        setAndSaveTasks(newTaskList);
    };

    const handleOnEditTask = (index) => {
        const { title, description } = taskDetails();
        const newTaskList = [...tasksList];
        newTaskList[index] = { ...newTaskList[index], title, description };
        setAndSaveTasks(newTaskList);
    };

    const handleOnDeleteTask = (index) => {
        const newTaskList = tasksList.filter((task, i) => i !== index);
        setAndSaveTasks(newTaskList);
    };

    const setAndSaveTasks = (newTaskList) => {
        setTasksList(newTaskList);
        localStorage.setItem('tasks', JSON.stringify(newTaskList));
    };

    const taskDetails = () => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        return { title, description };
    };

    useEffect(() => {
        const localStorageData = localStorage.getItem('tasks');
        const storedTasks = JSON.parse(localStorageData);
        if (storedTasks !== null) {
            setTasksList(storedTasks);
        } else {
            setTasksList(tasks);
        }
    }, []);

    return (
        <div>
            <ul>
                {tasksList.map((task, index) => (
                    <Task
                        key={index}
                        title={task.title}
                        description={task.description}
                        onEdit={() => handleOnEditTask(index)}
                        onDelete={() => handleOnDeleteTask(index)}
                    />
                    ))}
            </ul>
            <input type="text" name="task" id="title" placeholder="Title of todo" />
            <input type="text" name="description" id="description" placeholder="Description of todo" />
            <button onClick={() => handleOnAddTask()}>Agregar tarea</button>
        </div>
    );
};

export default TaskList;
