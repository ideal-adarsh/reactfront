import React from "react";
import { CssBaseline, Grid } from "@mui/material";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AllCollege from "./Pages/AllCollege";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import IndiCollege from "./Pages/IndiCollege";
import { CourseList } from "./Pages/CourseList";
import { Statelist } from "./Pages/StateList";
const App = () => {
  return (
    <Router>
      <Header />
      <CssBaseline />

      <Routes>
        <Route exact path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/collegelists" element={<AllCollege />} />
        <Route path="/states/:id" element={<Statelist />} />
        <Route path="/courses/:id" element={<CourseList />} />
        <Route path="/college/:id" element={<IndiCollege />} />
      </Routes>
    </Router>
  );
};

export default App;
