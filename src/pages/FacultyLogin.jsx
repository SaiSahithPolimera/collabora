import Header from "./components/Header";
import facultyImg from "../assets/teacher.png";
import googleImg from "../assets/google.png";

import { app } from "../firebase/config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const FacultyLogin = () => {
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

      <div className="faculty-login-container">
        <h2>Login as Faculty</h2>

        <div className="faculty-image">
          <img src={facultyImg} alt="Faculty image" />
        </div>

        <button className="google-login-btn" onClick={signInWithGoogle}>
          <img src={googleImg} alt="google icon" className="google-img" />
          Continue with Google
        </button>

        <div className="new-faculty">
          <p>Don&apos;t have an account?</p>
          <div>
            <a href="/faculty/signup">Signup</a>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default FacultyLogin;
