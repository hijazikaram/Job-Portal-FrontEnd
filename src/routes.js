import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/App";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails/JobDetails";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Price from "./components/Stripe/Price";
import UserProfile from "./components/UserProfile";
import InstitutionProfile from "./components/InstitutionProfile";
import Transactions from "./components/Transactions";
import ViewJob from "./components/ViewJob";
import EditJob from "./components/EditJob";
import Applicants from "./components/InstitutionApplicants";

const BasicExample = () => (<Router>
  <div><NavBar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Prices" component={Price}/>
    <Route exact path="/JobList" component={JobList}/>
    <Route path="/JobList/:job_id" component={JobDetails}/>
    <Route path="/SignIn" component={SignIn}/>
    <Route path="/SignUp" component={SignUp}/>
    <Route path="/UserProfile" component={UserProfile}/>
    <Route path="/InstitutionProfile" component={InstitutionProfile}/>
    <Route path="/InstitutionProfile/Job/:job_id" component={ViewJob} exact/>
    <Route path="/InstitutionProfile/editJob/:job_id" component={EditJob}/>
    <Route path="/InstitutionProfile/Job/:job_id/Applications" component={Applicants} exact/>
	 <Route exact path="/InstitutionProfile/Transactions" component={Transactions}/>
  </div>
</Router>);
export default BasicExample;
