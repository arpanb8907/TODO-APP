
import Home from "./Home";
import Register from "./register";
import Login from "./login";

 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";

const Routes = () =>{

    return (
        <Router>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login}/>
            </Switch>

        </Router>
    )
}

export default Routes