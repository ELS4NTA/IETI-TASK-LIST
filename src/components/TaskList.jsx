import Task from "./Task";

const TaskList = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => (
                <Task key={task.name} name={task.name} />
            ))}
        </ul>
    );
};

export default TaskList;
