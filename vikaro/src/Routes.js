import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProjects from "./SingleProjects";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/single-projects" element={<SingleProjects />} />
      </Routes>
    </Router>
  );
};  

export default AppRoutes;
