import { Divider } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
    const HomePage = React.lazy(() => import("./pages/HomePage"));
    const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
    const TaskListPage = React.lazy(() => import("./pages/TaskListPage"));

    return (
        <BrowserRouter>
            <Header title="Todo App" />
            <Divider />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <HomePage />
                        </Suspense>
                    }
                />
                <Route
                    path="/about-us"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutUsPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/tasks"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <TaskListPage />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
