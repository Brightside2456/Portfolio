import React from "react";
import Home from "./assets/Pages/Home";
import ProjectsPage from "./assets/Pages/ProjectsPage";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/projects" element={<ProjectsPage />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;