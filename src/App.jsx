import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import StudentSignup from "./pages/StudentSignup";
import Signup from "./pages/components/Signup";
import Proposal from "./pages/components/Proposal";
import FacultyLogin from "./pages/FacultyLogin";
import StudentLogin from "./pages/StudentLogin";
import FacultySignup from "./pages/FacultySignup";
import FacultyProposal from "./pages/FacultyProposal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CreateProposal" element={<Proposal />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/faculty/signup" element={<FacultySignup />} />
        <Route path="/faculty/login" element={<FacultyLogin />} />
        <Route path="/faculty/facultyproposal" element={<FacultyProposal />} />
      </Routes>
    </>
  );
}

export default App;
