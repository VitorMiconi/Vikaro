import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleGolisk from "./SingleGolisk";
import SingleSparo from "./SingleSparo";

const NotFound = () => {
  return <h2>404 - Page Not Found</h2>;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/golisk" element={<SingleGolisk />} />
        <Route path="/sparo" element={<SingleSparo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
