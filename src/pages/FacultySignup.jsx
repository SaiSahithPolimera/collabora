import Header from "./components/Header";
import facultyImg from "../assets/teacher.png";
import googleImg from "../assets/google.png";

import {app} from "../firebase/config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const FacultySignup = () => {

  const googleSignup = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header />

      <div className="faculty-signup-container">
        <h2>Signup as Faculty</h2>

        <div className="faculty-image">
          <img src={facultyImg} alt="Faculty image" />
        </div>
        <button className="google-signup-btn" onClick={googleSignup}>
          <img
            src={googleImg}
            alt=""
            className="google-img"
          />
          Continue with Google
        </button>

        <div className="existing-faculty">
          <p>Already have an account?</p>
        </div>
        <div>
          <a href="/faculty/login">Login</a>
        </div>
      </div>
    </>
  );
};

export default FacultySignup;
