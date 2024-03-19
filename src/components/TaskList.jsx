import Task from "./Task";
import useTasks from "../hooks/useTasks";

const TaskList = (props) => {
    const { tasks } = props;
    const [tasksList, addTask, editTask, deleteTask] = useTasks({ tasks });

    return (
        <div>
            <ul>
                {tasksList.map((task, index) => (
                    <Task
                        key={index}
                        title={task.title}
                        description={task.description}
                        onEdit={() => editTask(index)}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </ul>
            <input
                type="text"
                name="task"
                id="title"
                placeholder="Title of todo"
            />
            <input
                type="text"
                name="description"
                id="description"
                placeholder="Description of todo"
            />
            <button onClick={() => addTask()}>Agregar tarea</button>
        </div>
    );
};

export default TaskList;
