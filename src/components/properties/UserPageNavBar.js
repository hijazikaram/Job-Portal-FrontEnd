import React, { Component } from 'react';
import userIcon from '../../img/user.jpg';
import {Link} from "react-router-dom";
import axios from 'axios';

class UserPageNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : ''
    };

    this.id = this.props.location.search.split("?id=")[1];
    axios.get('http://localhost:5000/api/user/' + this.id).then(res => {
      var user = res.data.user;
      this.setState({ name : user.name });
    });
  }
  render() {
    return (
      <div>
      <div className="job-profile section">
        <div className="user-profile">
          <div className="user-images">
            <img src={userIcon} alt="User Images" className="img-responsive"/>
          </div>
          <div className="user">
            <h2>Hello, <a href="#">{this.state.name}</a></h2>
            <h5>You last logged in at: 10-01-2017 6:40 AM [ USA time (GMT + 6:00hrs)]</h5>
          </div>

          <div className="favorites-user">
            <div className="favorites">
              <a href="applied-job.html">29<small>Apply Job</small></a>
            </div>
            <div className="favorites">
              <a href="bookmark.html">18<small>Favorites</small></a>
            </div>
          </div>
        </div>
        <ul className="user-menu">
          <li><Link to={"/UserProfile"}>Profile Details</Link></li>
          <li><Link to={"/UserProfile/ViewResume"}>View Resume</Link></li>
          <li><Link to={"/UserProfile/EditResume"}>Edit Resume</Link></li>
          <li><Link to={"/UserProfile/FavoriteJobs"}>Bookmark</Link></li>
          <li><Link to={"/UserProfile/AppliedJobs"}>Applied Jobs</Link></li>
          <li><Link to={"/UserProfile/DeleteMyProfile"}>Close account</Link></li>
        </ul>
      </div>
      </div>
    );
  }
}

export default UserPageNavBar;
