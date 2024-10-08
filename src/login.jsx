  import React, { useContext, useState } from "react";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import Task from "./task";
  import { auth } from "./firebase";
  import { useHistory } from "react-router-dom";
  import AuthContext from "./Context/AuthContext";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  
  function login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const history = useHistory();

    const { auth: authstate, setauth } = useContext(AuthContext);
    
    // onAuthStateChanged(auth,(user)=>{

    //   if(user){
    //     setauth({user})
    //   }

    //   else{
    //     setauth(null)
    //   }
    // });

    const handlesubmit = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setauth({ user });
          //console.log(user);

          
          

          history.replace("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(error);
        });
    };

    return (
      <div className="mx-md-5 col-12 col-md-6 justify-content-center">
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Log in
          </button>
        </form>
      </div>
    );
  }

  export default login;
