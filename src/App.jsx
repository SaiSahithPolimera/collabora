import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import StudentSignup from "./pages/StudentSignup";
import Login from "./pages/components/Login";
import Signup from "./pages/components/Signup";
import Proposal from "./pages/components/Proposal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route oath="/login" element={<Login />} />
        <Route path="/CreateProposal" element={<Proposal />} />
      </Routes>
    </>
  );
}

export default App;
