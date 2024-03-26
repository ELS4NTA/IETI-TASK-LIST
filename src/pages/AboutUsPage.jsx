const AboutUsPage = () => {
    return (
        <section>
            <h1>About the project</h1>
            <acticle>
                <h2>The product</h2>
                <p>
                    This application allows users to create, edit and delete
                    tasks from a list. It is a productivity tool that helps
                    users organize their daily tasks and keep track of what they
                    need to do.
                </p>
            </acticle>
            <article>
                <h2>Features</h2>
                <ul>
                    <li>
                        <p>
                            <strong>Add Tasks:</strong>
                            Users can add new tasks to the list. Each task has a
                            title and description. This functionality is useful
                            for keeping track of all the tasks you need to do.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Edit Tasks:</strong>
                            Users can delete tasks that are no longer necessary.
                            This helps keep your to-do list clean and organized.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Delete Tasks:</strong>
                            Users can modify the title and description of
                            existing tasks. This is useful when the details of a
                            task change or when an error is made while adding a
                            task.
                        </p>
                    </li>
                </ul>
            </article>
            <article>
                <h2>Tecnologies used</h2>
                <ol>
                    <li><a href="https://react.dev/">React</a></li>
                    <li><a href="https://reactrouter.com/en/main">React Router</a></li>
                    <li><a href="https://react-hook-form.com/">React Form Hook</a></li>
                    <li><a href="https://vitejs.dev/">Vite</a></li>
                    <li><a href="https://git-scm.com/">Git</a></li>
                    <li><a href="https://www.npmjs.com/">Npm</a></li>
                </ol>
            </article>
        </section>
    );
};

export default AboutUsPage;
