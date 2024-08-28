
import Home from "./Home";
import Register from "./register";
import Login from "./login";
import Base from "./Base";
 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";

const Routes = () =>{

    return (
        <Router>

            <Switch>
                <Route exact path="/" component={Base}/>
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login}/>
            </Switch>

        </Router>
    )
}

export default Routes