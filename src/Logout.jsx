import React, { useContext, useEffect } from "react";
import AuthContext from "./Context/AuthContext";
import { useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function Logout() {
  const { setauth } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        setauth(null);
        history.replace("/");
      })
      .catch((error) => {
        console.log("error :", error.message);
      });
  }, [history, setauth]);
  return <div>Loging out...</div>;
}
