
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { useState ,useContext} from "react";
import { auth, database } from "./firebase";
import { doc,setDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";



function Register() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const history = useHistory()
  
  function verifyEmail(){
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      console.log("email verification sent");
      
    })
  }

  async function add_user(user) {

      try {
        
        await setDoc(doc(database,"users",user.uid),{

            email : user.email,
            userid : user.uid 
        });

        
        console.log("user is added");
        

      } catch (error) {
        console.log("error",error);
        
      }
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        
        // add user to database

        verifyEmail()
        add_user(user);
        
        //naviagte to login page
        history.replace("/login")
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        
      });
  }

  return (
    <form className="mx-md-5 col-12 col-md-6" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlfor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlfor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary" >
        Register
      </button>
    </form>
  );
}

export default Register;
