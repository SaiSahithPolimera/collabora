import Header from "./components/Header";
import studentImg from "../assets/student.png";
import googleImg from "../assets/google.png";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/config";

const StudentSignup = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <>
      <Header />

      <div className="student-signup-container">
        <h2>Signup as Student</h2>

        <div className="student-image">
          <img src={studentImg} alt="Student image" />
        </div>

        <button className="google-signup-btn" onClick={signInWithGoogle}>
          <img src={googleImg} alt="" className="google-img" />
          Continue with Google
        </button>

        <div className="existing-student">
          <p>Already have an account?</p>
          <div>
            <a href="/student/login">Login</a>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default StudentSignup;
