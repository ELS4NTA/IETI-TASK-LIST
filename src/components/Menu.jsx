import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tasks">Task List</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
