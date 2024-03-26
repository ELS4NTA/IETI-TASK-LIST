import { useForm } from "react-hook-form";

const TaskForm = (props) => {
    const { addTask } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        addTask(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Title:{" "}
                <input
                    {...register("title", {
                        required: "Title is required",
                        minLength: { value: 3, message: "Title is too short" },
                    })}
                    id="title"
                    type="text"
                    placeholder="Title of todo"
                />
            </label>
            {errors.title && <span style={{color: 'red'}}>{errors.title.message}</span>}
            <label>
                Description:{" "}
                <input
                    {...register("description")}
                    id="description"
                    type="text"
                    placeholder="Description of todo"
                />
            </label>
            <button>Add</button>
        </form>
    );
};

export default TaskForm;
