import TaskList from "../components/TaskList";

const TaskListPage = () => {
    const tasks = [
        {
            title: "Buy a new gaming laptop",
            description: "A new gaming laptop with a good graphics card",
            completed: false,
        },
        {
            title: "Complete a previous task",
            description: "Finish the task from last week",
            completed: false,
        },
        {
            title: "Create video for youtube",
            description: "Create a video about the new laptop",
            completed: true,
        },
        {
            title: "Create a new portfolio site",
            description: "Create a new portfolio site using React",
            completed: true,
        },
    ];

    return <TaskList tasks={tasks} />;
};

export default TaskListPage;
