import { Accordion, Flex, Heading } from "@chakra-ui/react";
import useTasks from "../hooks/useTasks";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = (props) => {
    const { tasks } = props;
    const [tasksList, addTask, editTask, deleteTask] = useTasks({ tasks });

    return (
        <Flex direction="column" gap="50" p={6} align="center">
            <Heading bgGradient="linear(to-l, #36D1DC, #5B86E5)" bgClip="text" as="h2">Task List</Heading>
            <TaskForm addTask={addTask} />
            <Accordion minW="600px" allowToggle>
                {tasksList.map((task, index) => (
                    <Task
                        key={index}
                        title={task.title}
                        description={task.description}
                        onEdit={() => editTask(index)}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </Accordion>
        </Flex>
    );
};

export default TaskList;
