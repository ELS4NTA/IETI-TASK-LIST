const Task = (props) => {
    const { title, description, onDelete, onEdit } = props;

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Task;
