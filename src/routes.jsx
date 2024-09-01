import React from "react";
import Home from "./Home";
import Register from "./register";
import Login from "./login";
import Base from "./Base";
import Logout from "./Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import for v5.x
import Footer from "./Footer";
import AuthContext from "./Context/AuthContext";
const AppRoutes = () => {

  
  return (
  
    <Router>
      <Switch>
        {" "}
        {/* Use Switch for v5.x */}
        <Route exact path="/" component={Base} />
        <Route path="/home" component={Home}/>
    
         
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
      
    </Router>

    
    
    
  );
};

export default AppRoutes;
