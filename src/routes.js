import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./components/App";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import InstitutionProfile from "./components/InstitutionProfile";
import ViewJob from "./components/ViewJob";
import configureStore from "./store/configure-store";
const store = configureStore();


const BasicExample = () => (<Router>
  <div><NavBar/>
    <Route exact path="/" component={Home}/>
    <Route path="/SignIn" component={SignIn}/>
    <Route path="/SignUp" component={SignUp}/>
    <Route path="/UserProfile" component={UserProfile}/>
    <Route path="/InstitutionProfile" component={InstitutionProfile}/>
    <Route path="/InstitutionProfile/Job/:job_id" component={ViewJob}/>
  </div>
</Router>);
export default BasicExample;
