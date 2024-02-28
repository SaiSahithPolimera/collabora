import Header from "./components/Header";
import studentImg from "../assets/student.png";
import googleImg from "../assets/google.png";
import { app } from "../firebase/config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const StudentLogin = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />

      <div className="student-login-container">
        <h2>Login as Student</h2>

        <div className="student-image">
          <img src={studentImg} alt="Student image" />
        </div>

        <button className="google-login-btn" onClick={signInWithGoogle}>
          <img src={googleImg} alt="" className="google-img" />
          Continue with Google
        </button>

        <div className="new-student">
          <p>Don&apos;t have an account?</p>
          <div>
            <a href="/student/signup">Signup</a>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
