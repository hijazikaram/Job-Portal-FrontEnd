import React, {Component} from 'react';
import userIcon from '../../img/user.jpg';
import {Link} from "react-router-dom";
import axios from 'axios';

class UserPageNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      jobs: '0',
      availableJobs: 0
    };

    const id = localStorage.getItem('user_id');
    const user_type = localStorage.getItem('user_type');

    const self = this;
    if (id && user_type) {
      axios.get('http://localhost:5000/api/institution/' + id).then(res => {
        if (res.data.success) {

          const institution = res.data.institution;
          self.setState({name: institution.name, availableJobs: institution.availableJobs});
          self.setState({company_logo: institution.logo});
          axios.get('http://localhost:5000/api/jobs/' + id).then(res => {
            if (res.data.success) {
              const jobs = res.data.jobs;
              self.setState({jobs: jobs.length});
            }
          }, function(error) {
            console.log(error);
          });
        }
      }, function(error) {
        console.log(error);
      });
    }
  }

  onLogOut = () => {
    localStorage.removeItem('user_id');
  }
  render() {
    const logout = this.onLogOut;

    return (
      <div className="job-profile section">
        <div className="user-profile">
          <div className="user-images">
            <img src={userIcon} alt="User Images" className="img-responsive"/>
          </div>
          <div className="user">
            <h2>Salam, <a href="/InstitutionProfile">{this.state.name}</a>
            </h2>
          </div>

          <div className="favorites-user">
          <div className="favorites">
              <a href="bookmark.html">{this.state.availableJobs}<small>Available</small>
              </a>
            </div>
            <div className="favorites">
              <Link to={"/InstitutionProfile/PostedJobs"}>{this.state.jobs}<small>Posted Job</small>
              </Link>
            </div>
          </div>
        </div>
        <ul className="user-menu">
          <li>
            <Link to={"/InstitutionProfile"}>Account Info</Link>
          </li>
          <li>
            <Link to={"/InstitutionProfile/PostAJob"}>Post Your Job</Link>
          </li>
          <li>
            <Link to={"/InstitutionProfile/PostedJobs"}>Posted Jobs</Link>
          </li>
          <li>
            <Link to={"/InstitutionProfile/Transactions"}>Transactions</Link>
          </li>
          <li>
            <Link to={"/InstitutionProfile/DeleteMyProfile"}>Close account</Link>
          </li>
          <li>
            <Link to={"/SignIn"} onClick={logout}>Logout</Link>
          </li>
        </ul>
      </div>);
  }
}

export default UserPageNavBar;
