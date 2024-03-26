import Task from "./Task";
import useTasks from "../hooks/useTasks";
import TaskForm from "./TaskForm";

const TaskList = (props) => {
    const { tasks } = props;
    const [tasksList, addTask, editTask, deleteTask] = useTasks({ tasks });

    return (
        <div>
            <TaskForm addTask={addTask} />
            <ul>
                {tasksList.map((task, index) => (
                    <li key={index}>
                        <Task
                            title={task.title}
                            description={task.description}
                            onEdit={() => editTask(index)}
                            onDelete={() => deleteTask(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
