import React from "react";
import Home from "./Home";
import Register from "./register";
import Login from "./login";
import Base from "./Base";
import Logout from "./Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import for v6+

const Routes = () => {
  return (
    <Router>
      <Routes> {/* Updated to Routes */}
        <Route path="/" element={<Base />} /> {/* Updated to use element prop */}
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default Routes;
