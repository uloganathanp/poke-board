import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { getPageList } from "./Pages";

function App() {
  //Get all the pages
  const pageRoutes = getPageList();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        {pageRoutes.map((page) => {
          return (
            <Route key={page.id} path={page.path} element={page.element} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
