import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
    const tasks = [
        { name: "Buy a new gaming laptop" },
        { name: "Complete a previous task" },
        { name: "Create video for youtube" },
        { name: "Create a new portfolio site" },
    ];

    return (
        <>
            <Header title="Todo App" />
            <TaskList tasks={tasks} />
        </>
    );
}

export default App;
