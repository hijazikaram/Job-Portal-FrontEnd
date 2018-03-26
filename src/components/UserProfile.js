import React, { Component } from 'react';
import '../css/MyProfile.css';
import '../css/Responsive.css';
import '../css/Preset.css';
import UserPageNavBar from './properties/UserPageNavBar';
import {Switch, Route, Link} from "react-router-dom";
import Home from "./UserHomePage";
import ViewResume from "./ViewResume";
import EditUserResume from "./EditUserResume";
import DeleteUserProfile from "./DeleteUserProfile";
import UserAppliedJobs from "./UserAppliedJobs";
import UserFavoriteJobs from "./UserFavoriteJobs";

class UserProfile extends Component {
  render() {
    return (
      <div>
          <section className=" job-bg page  ad-profile-page">
            <div className="container">
              <Route exact path={this.props.match.path} component={UserPageNavBar}/>
              
              <Switch>
                <Route exact path={this.props.match.path} component={Home}/>
                <Route path={this.props.match.path + "/ViewResume"} component={ViewResume} />
                <Route path={this.props.match.path + "/EditResume"} component={EditUserResume} />
                <Route path={this.props.match.path + "/DeleteMyProfile"} component={DeleteUserProfile} />
                <Route path={this.props.match.path + "/AppliedJobs"} component={UserAppliedJobs} />
                <Route path={this.props.match.path + "/FavoriteJobs"} component={UserFavoriteJobs} />
              </Switch>
        		</div>
          </section>
      </div>
    );
  }
}

export default UserProfile;
