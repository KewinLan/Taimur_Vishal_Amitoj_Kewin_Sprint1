import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth"
import { auth, provider } from "../../firebase-config";
import { signUpWithGoogle } from "@firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [user,setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  })

  const register = async() => {
      try{
          const user = await createUserWithEmailAndPassword(auth, email, password);
          setEmail(" ");
          setPassword(" ");
      } catch (error){
          console.log(error.message)
      }
  }

  const logout = async() => {
      await signOut(auth)
  }

 



  return (
    <div>
      <h2>Sign Up</h2>

      <div>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button onClick={register}> Register </button>
      

      <div>
          <h2>User Logged In:{user?.email}</h2>
          
      </div>
    </div>
  );
};

export default SignUp;