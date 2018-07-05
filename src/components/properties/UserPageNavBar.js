import React, {Component} from 'react';
import userIcon from '../../img/user.jpg';
import axios from 'axios';

class UserPageNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loaded1: false,
      loaded2: false,
      appliedJobs: 0,
      bookmarkedJobs: 0
    };

    this.id = localStorage.getItem('user_id');
    axios.get('http://localhost:5000/api/user/' + this.id).then(res => {
      const user = res.data.user;
      this.setState({name: user.name});
    });
  }

  onLogOut = (e) => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_type');
  }
  componentDidMount() {
      const userId = localStorage.getItem('user_id');

      axios.get('http://localhost:5000/api/users/' + userId + '/applications').then((response) => {
        if (response.data.applications) {
          this.setState({
            loaded1: true,
            appliedJobs: response.data.applications.length
          });

          axios.get('http://localhost:5000/api/users/' + userId + '/bookmarkedJobs').then((response) => {
            if (response.data.bookmarkedJobs) {
              this.setState({
                loaded2: true,
                bookmarkedJobs: response.data.bookmarkedJobs.length
              });
            }
          }, (error) => {
            console.log(error);
          });
        }
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    const logout = this.onLogOut;
    return (<div>
      <div className="job-profile section">
        <div className="user-profile">
          <div className="user-images">
            <img src={userIcon} alt="User Images" className="img-responsive"/>
          </div>
          <div className="user">
            <h2>Hello,
              <a href="/UserProfile">{this.state.name}</a>
            </h2>
          </div>

          <div className="favorites-user">
            <div className="favorites">
              <a href="/UserProfile/AppliedJobs">{this.state.appliedJobs}<small>Apply Job</small>
              </a>
            </div>
            <div className="favorites">
              <a href="/UserProfile/FavoriteJobs">{this.state.bookmarkedJobs}<small>Favorites</small>
              </a>
            </div>
          </div>
        </div>
        <ul className="user-menu">
          <li>
            <a href={"/UserProfile"}>Profile Details</a>
          </li>
          <li>
            <a href={"/UserProfile/FavoriteJobs"}>Bookmark</a>
          </li>
          <li>
            <a href={"/UserProfile/AppliedJobs"}>Applied Jobs</a>
          </li>
          <li>
            <a href={"/UserProfile/DeleteMyProfile"}>Close account</a>
          </li>
          <li>
            <a href={"/SignIn"} onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>);
  }
}

export default UserPageNavBar;
