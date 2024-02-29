import Header from "../components/Header";
import '../../Styles/auth.css'
import teacherImg from '../../assets/teacher.png'
import studentImg from '../../assets/student.png'
import Footer from "../Footer";

const Signup = () => {
  return (
    <>
      <Header />

      <div className="signup-box ">
        <div className="faculty-signup">
          <h2>Signup for Faculty</h2>
          <img src={teacherImg} alt="Teacher icon" />
          <a href="/faculty/signup">Continue as faculty</a>
        </div>

        <div className="student-signup">
          <h2>Signup for Students</h2>
          <img src={studentImg} alt="Student icon" />
          <a href="/student/signup">Continue as Student</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
