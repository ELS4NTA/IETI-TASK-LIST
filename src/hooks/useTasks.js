import { useEffect, useState } from "react";

function useTasks(params) {
    const { tasks } = params;
    const [tasksList, setTasksList] = useState([]);

    const addTask = () => {
        const { title, description } = taskDetails();
        const newTask = { title, description, completed: false };
        const newTaskList = [...tasksList, newTask];
        setAndSaveTasks(newTaskList);
    };

    const editTask = (index) => {
        const { title, description } = taskDetails();
        const newTaskList = [...tasksList];
        newTaskList[index] = { ...newTaskList[index], title, description };
        setAndSaveTasks(newTaskList);
    };

    const deleteTask = (index) => {
        const newTaskList = tasksList.filter((task, i) => i !== index);
        setAndSaveTasks(newTaskList);
    };

    const setAndSaveTasks = (newTaskList) => {
        setTasksList(newTaskList);
        localStorage.setItem("tasks", JSON.stringify(newTaskList));
    };

    const taskDetails = () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        return { title, description };
    };

    useEffect(() => {
        const localStorageData = localStorage.getItem("tasks");
        const storedTasks = JSON.parse(localStorageData);
        if (storedTasks !== null) {
            setTasksList(storedTasks);
        } else {
            setTasksList(tasks);
        }
    }, []);

    return [tasksList, addTask, editTask, deleteTask];
}

export default useTasks;
