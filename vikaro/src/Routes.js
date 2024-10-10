import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleGolisk from "./SingleGolisk";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/golisk" element={<SingleGolisk />} />
      </Routes>
    </Router>
  );
};  

export default AppRoutes;
