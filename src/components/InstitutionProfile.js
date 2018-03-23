import React, { Component } from 'react';
import '../css/MyProfile.css';
import '../css/Responsive.css';
import '../css/Preset.css';
import '../css/index.css';
import InstitutionPageNavBar from './properties/InstitutionPageNavBar';
import {Switch, Route, Link} from "react-router-dom";
import Home from "./InstitutionHomePage";
import InstitutionPostAJob from "./InstitutionPostAJob";
import EditUserResume from "./EditUserResume";
import DeleteUserProfile from "./DeleteUserProfile";
import InstitutionPostedJobs from "./InstitutionPostedJobs";

class UserProfile extends Component {
  render() {
    return (
      <div>
          <section className=" job-bg page  ad-profile-page">
            <div className="container">
              <InstitutionPageNavBar/>
              <Switch>
                <Route exact path={this.props.match.path} component={Home}/>
                <Route path={this.props.match.path + "/PostAJob"} component={InstitutionPostAJob} />
                <Route path={this.props.match.path + "/EditResume"} component={EditUserResume} />
                <Route path={this.props.match.path + "/DeleteMyProfile"} component={DeleteUserProfile} />
                <Route path={this.props.match.path + "/PostedJobs"} component={InstitutionPostedJobs} />
              </Switch>
        		</div>
          </section>
      </div>
    );
  }
}

export default UserProfile;
