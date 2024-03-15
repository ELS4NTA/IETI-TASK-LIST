const Task = (props) => {
    const { name } = props;

    function handleClick() {
        console.log("Edit button clicked");
    }

    return (
        <div onClick={handleClick}>
            <p>{name}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};

export default Task;
