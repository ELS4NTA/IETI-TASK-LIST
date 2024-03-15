const Header = (props) => {
    const { title } = props;
    
    return (
        <div>
            <h1>{title}</h1>
            <input type="text" name="task" id="task" placeholder="Add yout new todo"/>
            <button>Add</button>
        </div>
    );
};

export default Header;
