import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./Login.css";
import smallImage from './backgroung.jpg'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault(); // Prevents the default form submission
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Use Link to navigate to "/Signup"
      navigate("/HomePage")
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/HomePage")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="root">
      <header className="showcase">
        <div className="showcase-content">
          <div className="formm">
            <form onSubmit={signIn}>
              <h1>Sign In</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  className="email"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="btn">
                <button type="submit" className="btn-primary">
                  Sign In
                </button>
              </div>
              <div className="btn">
                <button onClick={signInWithGoogle} className="btn-google">
                <img src={smallImage} alt="Small Icon" />Sign In with Google
                </button>
              </div>
            </form>
          </div>
          <div className="signup">
            <p>New to College Collab?</p>
            <Link to="/Signup">Sign up now</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

